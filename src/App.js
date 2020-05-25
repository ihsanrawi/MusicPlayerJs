import React, { useState } from "react";
import MusicJs from "./components/index";

const initialState = {
	debug: false,
	// debug: true,
	isFullScreen: false,
	// isFullScreen: true,
	isPlaying: false,
	header: {
		titleStack: ["Library", "Artists", "Albums", "Playlists"],
	},
	playerConfig: {
		volume: 6,
	},
	miniplayer: {
		artwork: "images/default_artwork.svg",
		title: "Music Player",
		artist: "Ihsan Rawi",
		album: "ReactJs",
	},
};

function App() {
	const [defaultState, setdefaultState] = useState(initialState);
	return (
		<div>
			<MusicJs musicJs={defaultState} />
		</div>
	);
}

export default App;
