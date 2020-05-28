import React from "react";
import styled from "styled-components";

import Player from "../components/bar/player";
import Overlay from "../components/bar/overlay";

const Container = styled.div`
	z-index: 50;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 64px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

function BarContainer(props) {
	return (
		<Container>
			<Overlay />
			<Player />
		</Container>
	);
}

export default BarContainer;
