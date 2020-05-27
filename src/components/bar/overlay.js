import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { constants } from "../../utils";
import { toggleFullscreen } from "../../redux/actions/navigation";

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

function Overlay({ navState, toggleFullscreen }) {
	const { isFullScreen } = navState;
	const [isClosing, setIsClosing] = useState(false);

	return (
		<Container
			isFullScreen={isFullScreen || isClosing}
			onClick={toggleFullscreen}
		/>
	);
}

const mapStateToProps = (state) => ({
	navState: state.navState,
});

const mapDispatchToProps = (dispatch) => {
	return {
		toggleFullscreen: () => dispatch(toggleFullscreen()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);

/**
 * todo:: add togglefullscreen function here
 */
