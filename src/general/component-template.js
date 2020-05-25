import React from "react";
import styled from "styled-components";
import { constants } from "../../../../general";

const { color } = constants;

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 64px;
	display: flex;
	border: ${(props) => props.debug && "solid 1px red"};
`;

function index(props) {
	const { debug } = props.musicJs;

	return (
		<Container>
			<h3>Hello</h3>
		</Container>
	);
}

export default index;
