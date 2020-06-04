const express = require("express");
const router = express.Router();
const Artist = require("../../models/Artist");

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get("/albums", (req, res) => {});

// @route    GET /album/:album_id
// @desc     Get profile by user ID
// @access   Public
router.get("/album/:album_id", ({ params: { album_id } }, res) => {});

// @route    GET /artists
// @desc     Get profile by user ID
// @access   Public
router.get("/artists", (req, res) => {
	Artist.find({}, { artist: 1 }, (err, result) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ result: "NOT OK" });
		} else {
			return res.status(200).json({
				data: result,
			});
		}
	});
});

// @route    GET /artist/:artist_id
// @desc     Get profile by user ID
// @access   Public
router.get("/artist/:artist_id", ({ params: artist_id }, res) => {});

/*
router.post("/artist", (req, res) => {
	try {
		let user = [
			{ artist: "Bring Me The Horizon", created_date: Date.now() },
			{ artist: "Paramore", created_date: Date.now() },
			{ artist: "Yuna", created_date: Date.now() },
			{ artist: "Hujan", created_date: Date.now() },
		];

		Artist.collection.insertMany(user, (err, docs) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ result: "NOT OK" });
			} else {
				return res.status(200).json({
					result: "Multiple documents inserted to Collection",
				});
			}
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});
*/
module.exports = router;
