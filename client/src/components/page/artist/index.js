import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { pushView } from "../../../redux/actions/view";
import { fetchArtist } from "../../../redux/actions/api";
import AlbumButton from "../../utils/album-button";

const Container = styled.div`
	margin-top: 48px;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 16px;
`;

export const ArtistView = ({ artist, apiState, fetchArtist, pushView }) => {
	let { artistData } = apiState.data;
	const albums = artistData[artist];

	const viewAlbum = ({ artist, album }) => {
		pushView({
			name: "Album",
			title: album,
			props: {
				hideTitle: true,
				artist,
				album,
			},
		});
	};

	useEffect(() => {
		if (artistData[artist].length === 0) {
			fetchArtist(artist);
		}
	}, []);

	return (
		<Container>
			<ButtonContainer>
				{albums &&
					albums.map((item, index) => {
						const { album, artist } = item;

						return (
							<AlbumButton
								key={`album-${album}`}
								labe={album}
								sublabel={artist}
								onClick={() => viewAlbum({ artist, album })}
							/>
						);
					})}
			</ButtonContainer>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	viewState: state.viewState,
	apiState: state.apiState,
});

const mapDispatchToProps = (dispatch) => {
	return {
		pushView: (view) => dispatch(pushView(view)),
		fetchArtist: (artist) => dispatch(fetchArtist(artist)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistView);
