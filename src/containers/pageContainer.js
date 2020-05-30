import React from "react";
import styled from "styled-components";

import ViewStack from "../components/page/viewStack";

const Container = styled.div`
	position: relative;
	max-width: 1130px;
	width: 100%;
	flex: 1;
	margin: 48px auto 64px auto;
	padding-left: 24px;
	overflow: hidden;
`;

function PageContainer() {
	return (
		<Container>
			<ViewStack />
		</Container>
	);
}

export default PageContainer;
