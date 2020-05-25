import React from "react";
import styled from "styled-components";

import BottomBar from "../components/bar";

const Container = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
`;

function MusicJs(props) {
	return (
		<Container>
			<BottomBar />
		</Container>
	);
}

export default MusicJs;
