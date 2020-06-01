import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Button from "../../commons/button";
import { pushView } from "../../../redux/actions/view";

const Container = styled.div`
	margin-top: 48px;
`;

const ButtonContainer = styled.div``;

export const ArtistListView = ({ pushView, apiState }) => {
	let { artists } = apiState.data;

	if (artists.length == 0) {
		artists = ["Adele", "Bring Me The Horizon", "Hujan", "Yuna"];
	}

	const changeView = (title) => {
		pushView({
			name: "Artist",
			title,
			props: {},
		});
	};

	return (
		<Container>
			<ButtonContainer>
				{artists &&
					artists.map((artist, index) => (
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistListView);
