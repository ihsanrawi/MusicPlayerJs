const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
	album: {
		type: String,
		required: true,
	},
	artist: {
		type: Schema.Types.ObjectId,
		ref: "artist",
	},
	artwork: {
		type: String,
	},
	created_date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Album = mongoose.model("album", AlbumSchema);
