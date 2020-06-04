const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
	artist: {
		type: String,
		required: true,
		unique: true,
	},
	created_date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Artist = mongoose.model("artist", ArtistSchema);
