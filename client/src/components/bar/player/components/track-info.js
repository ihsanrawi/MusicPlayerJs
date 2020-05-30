import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// import { constants } from "../../../../general/constants";

// const { color } = constants;

const Container = styled.div`
	margin-top: 16px;
	border: ${(props) => props.debug && "solid 1px red"};
`;

const Title = styled.h3`
	text-align: center;
	margin: 0;
`;
const Subtitle = styled.h3`
	color: #f62a54;
	font-weight: normal;
	text-align: center;
	margin: 8px 0 0;
`;

function TrackInfo(props) {
	const { navState, audioState } = props;
	const { debug } = navState;
	const { title, artist, album } = audioState;

	return (
		<Container debug={debug}>
			<Title>{title}</Title>
			<Subtitle>
				{artist} - {album}
			</Subtitle>
		</Container>
	);
}

const mapStateToProps = (state) => ({
	navState: state.navState,
	audioState: {
		artwork: "images/default_artwork.svg",
		title: "Music Player",
		artist: "Ihsan Rawi",
		album: "ReactJs",
	},
});

export default connect(mapStateToProps)(TrackInfo);
