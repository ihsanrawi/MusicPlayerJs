import React from "react";
import styled from "styled-components";

import Player from "./player";
import Overlay from "./overlay";

const BarContainer = styled.div`
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

function BottomBar(props) {
	return (
		<BarContainer>
			<Overlay />
			<Player />
		</BarContainer>
	);
}

export default BottomBar;
