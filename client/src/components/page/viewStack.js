import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { constants } from "../../utils";
import * as Views from "./";

const { color } = constants;

const Container = styled.div`
	z-index: ${(props) => (props.secondFromTop ? 0 : 1)};
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 0 24px;
	background: ${color.white};
	overflow: ${(props) => (props.secondFromTop ? "hidden" : "auto")};
`;

export const ViewStack = ({ viewState }) => {
	const { stack } = viewState;

	return stack.map(({ name, props }, index) => {
		const View = Views[name];
		const secondFromTop = index !== stack.length - 1;

		return (
			<Container key={`page-${name}`} secondFromTop={secondFromTop}>
				<View {...props} />
			</Container>
		);
	});
};

const mapStateToProps = (state) => ({
	viewState: state.viewState,
});

export default connect(mapStateToProps)(ViewStack);
