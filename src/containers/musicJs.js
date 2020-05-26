import React from "react";
import styled from "styled-components";

import BottomBar from "./bottomBar";
import Header from "../components/header";

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
			<Header />
			<BottomBar />
		</Container>
	);
}

export default MusicJs;
