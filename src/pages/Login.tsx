import { useEffect, useState, useContext } from "react";
import { API_CLIENT } from "../../env.config";
import logo from "../assets/logo.png";
import { loginContext } from "../hooks/LoginContext";

export default function Login() {
  const clientId = API_CLIENT;
  const redirectUri = "http://localhost:5173/callback/";
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const [isRedirect, setIsRedirect] = useState(true);
  const logincontext = useContext(loginContext);

  function generateRandomString(length: number) {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  function sha256(plain: string): Promise<ArrayBuffer> {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  }

  function base64urlencode(a: ArrayBuffer): string {
    return btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a))))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  async function generateCodeChallenge(codeVerifier: string) {
    const hashed = await sha256(codeVerifier);
    const base64encoded = base64urlencode(hashed);
    return base64encoded;
  }

  async function loginTo() {
    const codeVerifierStorage = generateRandomString(128);

    generateCodeChallenge(codeVerifierStorage).then((codeChallenge) => {
      const state = generateRandomString(16);
      const scope = [
        "user-read-email",
        "user-read-private",
        "user-modify-playback-state",
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-top-read",
        "user-library-read",
        "user-library-modify",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-private",
        "playlist-modify-public",
        "user-read-playback-position",
      ];

      localStorage.setItem("code_verifier", codeVerifierStorage);

      const args = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
      });

      window.location = ("https://accounts.spotify.com/authorize?" +
        args) as unknown as Location;
    });
  }

  function setToken(code: string) {
    const code_verifier = localStorage.getItem("code_verifier");
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: code_verifier,
    });

    const response = fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        window.location.href = "http://localhost:5173/";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async function connect() {
    await loginTo();
  }
  useEffect(() => {
    if (code && isRedirect) {
      setIsRedirect(false);
      setToken(code);
    }
  }, [code]);

  return (
    <div>
      <img
        style={{
          position: "fixed",
          top: 1,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={logo}
      />

      <button
        style={{
          position: "absolute",
          top: "90%",
          left: "45%",
          width: "200px",
          height: "40px",
          border: "none",
          justifyContent: "center",
          alignItem: "center",
          borderRadius: 120,
          color: "white",
          backgroundColor: "green",
          fontFamily: "sans-serif",
          fontSize: "14px",
          cursor: "pointer",
        }}
        onClick={() => connect()}
      >
        {" "}
        Login With SiS Music
      </button>
    </div>
  );
}
