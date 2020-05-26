import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import { constants } from "../../../../general";
import { toggleFullscreen } from "../../../../redux/actions/navigation";

const { color } = constants;
const path = "images";

const Container = styled.div`
	position: relative;
	height: 64px;
	width: 100%;
	text-align: center;
	box-sizing: border-box;
	border-top: solid 1px ${color.gray[3]};
	border-bottom: solid 1px ${color.gray[5]};
	border-left: solid 1px ${color.gray[5]};
	background: ${color.gray[2]};
	cursor: pointer;
	border: ${(props) => props.debug && "solid 1px red"};

	${(props) =>
		props.isFullScreen &&
		css`
			height: 40vh;
			border-left: 1px solid transparent;
			border-top: none;
			border-bottom: none;
			width: 100%;
			cursor: default;
			background: #fff;
		`};
`;

const ArtworkContainer = styled.div`
	position: relative;
	max-height: 100%;
	width: 64px;
	padding: 8px 0;
	text-align: center;

	${(props) =>
		props.isFullScreen &&
		css`
			height: 46vh;
			min-height: 8em;
			width: 100%;
		`}
`;

const Artwork = styled.img`
	height: ${(props) => (props.isFullScreen ? "18em" : "50px")};
	max-height: ${(props) => (props.isFullScreen ? "90%" : "100%")};
	width: auto;
	max-width: 100%;
	margin-top: ${(props) => props.isPlaying && "8px"};
	pointer-events: none;
	user-select: none;
	border-radius: ${(props) => props.isFullScreen && "4px"};
	box-shadow: ${(props) => props.isPlaying && "0 10px 30px #a5a5a5"};
`;
const InfoContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 64px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 80px;
	opacity: ${(props) => props.isFullScreen && 0};
`;
const SongTitle = styled.h3`
	margin: 0;
	font-weight: normal;
	color: #646464;
	font-size: 13px;
`;

const ControlContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 16px;
`;

const Svg = styled.img`
	height: 24px;
	width: 24px;
	margin: 0 8px;
`;

function MiniPlayer({ navState, audioState, toggleFullscreen }) {
	// const { navState, audioState, toggleFullscreen } = props;
	const { debug, isFullScreen } = navState;
	const { title, artwork } = audioState;
	return (
		<Container
			debug={debug}
			isFullScreen={isFullScreen}
			onClick={!isFullScreen && toggleFullscreen}>
			<ArtworkContainer isFullScreen={isFullScreen}>
				<Artwork isFullScreen={isFullScreen} src={artwork} />
			</ArtworkContainer>
			<InfoContainer isFullScreen={isFullScreen}>
				<SongTitle>{title}</SongTitle>
				<ControlContainer>
					<Svg src={`${path}/play.svg`} />
					<Svg src={`${path}/skip_next.svg`} />
				</ControlContainer>
			</InfoContainer>
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

const mapDispatchToProps = (dispatch) => {
	return {
		toggleFullscreen: () => dispatch(toggleFullscreen()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);
