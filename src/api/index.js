import SpotifyWebApi from "spotify-web-api-js";

const accessToken = REACT_APP_SPOTIFY_ACCESS_TOKEN;

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(accessToken);
