const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");

const router = express.Router();

const credentials = {
	clientId: "3dd88d24614f4d6b9e0c79efd4d7782c",
	clientSecret: "6ec79abd560946329b245ee9da38d229",
};

const spotifyApi = new SpotifyWebApi(credentials);

// @route    POST api/posts
// @desc     Create a post
// @access   Private
const getAccessToken = spotifyApi
	.clientCredentialsGrant()
	.then((res) => {
		console.log("The access token expires in " + res.body["expires_in"]);
		console.log("The access token is " + res.body["access_token"]);

		// Save the access token so that it's used in future calls
		spotifyApi.setAccessToken(res.body["access_token"]);
	})
	.catch((err) => {
		console.log(
			"Something went wrong when retrieving an access token",
			err
		);
	});

module.exports = router;
