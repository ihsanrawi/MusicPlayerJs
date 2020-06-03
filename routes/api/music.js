const express = require("express");
const router = express.Router();

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get("/albums", (req, res) => {});

// @route    GET /album/:album_id
// @desc     Get profile by user ID
// @access   Public
router.get("/album/:album_id", ({ params: { album_id } }, res) => {});

// @route    GET /artits
// @desc     Get profile by user ID
// @access   Public
router.get("/artits", (req, res) => {});

// @route    GET /artist/:artist_id
// @desc     Get profile by user ID
// @access   Public
router.get("/artist/:artist_id", ({ params: { artist_id }, res) => {});

module.exports = router;
