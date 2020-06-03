const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");

const router = express.Router();

const credentials = {
	clientId: "3dd88d24614f4d6b9e0c79efd4d7782c",
	clientSecret: "6ec79abd560946329b245ee9da38d229",
};

const spotifyApi = new SpotifyWebApi(credentials);
let access_token =
	"BQCB4qKS0M4NpeHeeJLeVDeqJNpVxFdrlRVMfK10d39HnvqnhDig92OOymakjgh8d3qshg_lbSYHkffibWI";

const playlistId = "7iQd6AGL7HaCJtvCNguqax";

router.get("/", async (req, res) => {
	await spotifyApi
		.clientCredentialsGrant()
		.then((data) => {
			console.log(
				"The access token expires in " + data.body["expires_in"]
			);
			console.log("The access token is " + data.body["access_token"]);

			// Save the access token so that it's used in future calls
			spotifyApi.setAccessToken(data.body["access_token"]);
			access_token = spotifyApi.getAccessToken();
			return res.status(200).json({ token: spotifyApi.getAccessToken() });
		})
		.catch((err) => {
			console.log(
				"Something went wrong when retrieving an access token",
				err
			);

			return res.status(500).json({ err: err });
		});
});

router.get("/me", async (req, res) => {
	spotifyApi.setAccessToken(access_token);
	await spotifyApi
		.getPlaylist(playlistId)
		.then((data) => {
			console.log(data.body);
			return res.status(200).json(data.body.tracks);
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).json({ result: "NOT OK" });
		});
});

module.exports = router;
