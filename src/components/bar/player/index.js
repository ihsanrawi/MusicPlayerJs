import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import MiniPlayer from "./mini-player";
import Scrubber from "./components/scrubber";
import TrackInfo from "./components/track-info";
import Controls from "./components/controls";
import VolumeSlider from "./components/volume-slider";

const Container = styled.div`
	position: fixed;
	right: 0;
	bottom: 0;
	height: ${(props) => (props.isFullScreen ? "100%" : "64px")};
	width: 100%;
	max-width: 400px;
	background: #fff;
	border: ${(props) => props.debug && "solid 1px red"};
`;

const CloseControls = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${(props) => (props.hidden ? "0" : "48px")};
	opacity: ${(props) => props.hidden && "0"};
	pointer-events: ${(props) => props.hidden && "none"};
	cursor: pointer;
`;
const Svg = styled.img``;

const FullScreenPlayer = styled.div`
	opacity: ${(props) => props.hidden && 0};
	margin-top: 5vh;
`;

function Player(props) {
	const { navState } = props;
	const { isFullScreen, debug } = navState;

	return (
		<Container debug={debug} isFullScreen={isFullScreen}>
			<CloseControls hidden={!isFullScreen}>
				<Svg src="images/chevron_wide.svg" />
			</CloseControls>
			<MiniPlayer />
			<FullScreenPlayer hidden={!isFullScreen}>
				<Scrubber musicJs={props.musicJs} />
				<TrackInfo musicJs={props.musicJs} />
				<Controls musicJs={props.musicJs} />
				<VolumeSlider musicJs={props.musicJs} />
			</FullScreenPlayer>
		</Container>
	);
}

const mapStateToProps = (state) => ({
	navState: state.navState,
});

export default connect(mapStateToProps)(Player);
