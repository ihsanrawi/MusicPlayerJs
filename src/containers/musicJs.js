import React from "react";
import styled from "styled-components";

import BarContainer from "./barContainer";
import Header from "../components/header";
import PageContainer from "./pageContainer";

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
			<PageContainer />
			<BarContainer />
		</Container>
	);
}

export default MusicJs;
