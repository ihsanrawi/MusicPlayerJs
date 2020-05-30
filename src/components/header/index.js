import React from "react";
import styled from "styled-components";

import { constants } from "../../utils";
import BackButton from "./components/backButton";
import TitleStack from "./components/titleStack";

const { color } = constants;

const Container = styled.div`
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	max-width: 1200px;
	height: ${(props) => (props.hideTitle ? "48px" : "90px")};
	padding-left: 48px;
	background: ${color.white};
	overflow: hidden;
`;

export const Header = () => {
	return (
		<Container>
			<BackButton />
			<TitleStack />
		</Container>
	);
};

export default Header;
