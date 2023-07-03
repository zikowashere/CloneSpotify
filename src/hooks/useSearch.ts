import { useContext, useEffect, useState } from "react";
import { SearchContext } from "./SearchContext";
import { accessToken } from "../../global";

export const useSearch = () => {
  const search = useContext(SearchContext);

  async function searchKeyWord(keyWord: string) {
    await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        keyWord
      )}&type=album%2Ctrack%2Cartist%2Cplaylist&limit=30`,
      { method: "GET", headers: { Authorization: `Bearer ${accessToken}` } }
    ).then((response) => {
      response.json().then((response) => {
        console.log("response search is", response);
        search.setSearch(response);
      });
    });
  }

  async function getPlayListUser() {
    await fetch(`https://api.spotify.com/v1/me`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      response.json().then(async (res) => {
        const userID = res.id;
        await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }).then((playlists) => {
          playlists.json().then((res) => {
            search.setPlaylist(res.items);
          });
        });
      });
    });
  }
  async function getEpisodesUser() {
    await fetch(`https://api.spotify.com/v1/me/episodes?limit=10`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      response.json().then(async (res) => {
        const userID = res.id;
      });
    });
  }

  async function topArtistFollowed() {
    await fetch(`https://api.spotify.com/v1/me/top/artists?limit=10`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      if (response.ok) {
        const data = response.json();
        data.then((res) => search.setTopArtist(res.items));
      }
    });
  }

  return {
    searchKeyWord,
    search,
    getPlayListUser,
    topArtistFollowed,
    getEpisodesUser,
  };
};
