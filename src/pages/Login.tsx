import React, { useEffect, useState } from "react";
import { API_CLIENT } from "../../env.config";
import logo from "../assets/Images/background spotify.jpeg";
import { redirectAfterAuthtentication, redirectUri } from "../../global";

export default function Login() {
  const clientId = API_CLIENT;
  const redirectUriApp = redirectUri;
  const redirectAfterAuthtenticationApp = redirectAfterAuthtentication;
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const [isRedirect, setIsRedirect] = useState(true);

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

  async function login() {
    const codeVerifierStorage: string | undefined = generateRandomString(128);

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
      const scopeString = scope.join(" ");

      localStorage.setItem("code_verifier", codeVerifierStorage);

      const args = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scopeString,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
      });

      window.location = ("https://accounts.spotify.com/authorize?" +
        args) as unknown as Location;
    });
  }

  useEffect(() => {
    if (code && isRedirect) {
      setIsRedirect(false);
      setToken(code);
    }
  }, []);

  async function setToken(code: string) {
    const code_verifier = localStorage.getItem("code_verifier");
    // Utilisez une condition pour gérer le cas où 'code_verifier' est null ou undefined
    const verifier = code_verifier !== null ? code_verifier : undefined;

    // Créez l'objet 'body' en n'incluant que les propriétés non undefined et non null
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUriApp,
      client_id: clientId,
    });

    // Ajoutez la propriété 'code_verifier' uniquement si elle n'est pas 'undefined'
    if (verifier !== undefined) {
      body.append("code_verifier", verifier);
    }
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }

    const data = await response.json();
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    localStorage.setItem("expires_in", data.expires_in);
    const currentTime = Math.floor(Date.now() / 1000);
    localStorage.setItem("token_timestamp", currentTime.toString());
    window.location.href = redirectAfterAuthtenticationApp;
  }
  async function connect() {
    await login();
  }

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
          alignItems: "center",
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
        Log In
      </button>
    </div>
  );
}
