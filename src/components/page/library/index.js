import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { constants } from "../../utils";

const { color } = constants;

const Container = styled.div`
	border: ${(props) => props.debug && "solid 1px red"};
`;

export const LibraryPage = ({ navState }) => {
	const { debug } = navState;

	return <Container debug={debug}></Container>;
};

const mapStateToProps = (state) => ({
	navState: state.navState,
});

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage);
