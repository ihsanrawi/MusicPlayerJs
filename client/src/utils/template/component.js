import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
	border: ${(props) => props.debug && "solid 1px red"};
`;

export const index = ({ navState }) => {
	const { debug } = navState;
	return <Container debug={debug}></Container>;
};

const mapStateToProps = (state) => ({
	navState: state.navState,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
