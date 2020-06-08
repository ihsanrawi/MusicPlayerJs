import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Button from "../../commons/button";
import { pushView } from "../../../redux/actions/view";
import { fetchArtists } from "../../../redux/actions/api";

const Container = styled.div`
	margin-top: 48px;
`;

const ButtonContainer = styled.div``;

export const ArtistListView = ({ pushView, fetchArtists, apiState }) => {
	let { artists } = apiState.data;

	const changeView = (artist) => {
		pushView({
			name: "Artist",
			title: artist,
			props: { artist },
		});
	};

	useEffect(() => {
		if (!artists.length) {
			fetchArtists();
		}
	});

	return (
		<Container>
			<ButtonContainer>
				{artists &&
					artists.map(({ artist }, index) => (
						<Button
							key={`artist-${artist}`}
							label={artist}
							theme="red"
							chevron
							onClick={() => changeView(artist)}
						/>
					))}
			</ButtonContainer>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	navState: state.navState,
	apiState: state.apiState,
});

const mapDispatchToProps = (dispatch) => {
	return {
		pushView: (view) => dispatch(pushView(view)),
		fetchArtists: () => dispatch(fetchArtists()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistListView);
