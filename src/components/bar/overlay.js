import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { constants } from "../../general";

const { color } = constants;

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: ${(props) => !props.isFullScreen && "none"};
	background: ${color.grayAlpha[4]};
	cursor: pointer;
`;

function Overlay(props) {
	const [isClosing, setIsClosing] = useState(false);

	const { navState } = props;
	const { isFullScreen } = navState;

	return <Container isFullScreen={isFullScreen || isClosing} />;
}

const mapStateToProps = (state) => ({
	navState: state.navState,
});

export default connect(mapStateToProps)(Overlay);
