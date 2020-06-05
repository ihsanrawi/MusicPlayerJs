import {
	FETCH_ALBUM,
	FETCH_ALBUM_LIST,
	FETCH_ARTIST,
	FETCH_ARTIST_LIST,
} from "../types";
import Api from "../../utils/components/Api";

export const fetchArtists = () => {
	return (dispatch) => {
		return Api.fetchArtists()
			.then((artists) => {
				// The albums of each artist
				const artistData = {};

				for (let i in artists) {
					const artist = artists[i].artist;
					artistData[artist] = [];
				}

				dispatch({
					type: FETCH_ARTIST_LIST,
					artists,
					artistData,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const fetchArtist = (artist) => {
	return (dispatch) => {
		return Api.fetchArtist(artist)
			.then((albums) => {
				const albumData = {};

				for (let i in albums) {
					const album = albums[i];
					albumData[album.album] = [];
				}

				dispatch({
					type: FETCH_ARTIST,
					name: artist,
					albums,
					albumData,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const fetchAlbums = () => {
	return (dispatch) => {
		return Api.fetchAlbums()
			.then((albums) => {
				const albumData = {};

				for (let album of albums) {
					const name = album.album;
					albumData[name] = [];
				}

				dispatch({
					type: FETCH_ALBUM_LIST,
					albumData,
					albums,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const fetchAlbum = ({ artist, album }) => {
	return (dispatch) => {
		return Api.fetchAlbum({ artist, album })
			.then((tracks) => {
				dispatch({
					type: FETCH_ALBUM,
					album,
					tracks,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
