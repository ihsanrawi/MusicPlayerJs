import SpotifyWebApi from "spotify-web-api-js";

// const accessToken = REACT_APP_SPOTIFY_ACCESS_TOKEN;

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(
	"BQAePIAEX7Im6oxlNvh8qWH7DqmBJKgf6v0p3xJRZ3_Xoe-sUGg8hpfbJcjPiSpFonmP_lQqOPz3n7rK0AM"
);

spotifyApi.getPlaylistTracks();

export default spotifyApi;
