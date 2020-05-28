import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
	position: relative;
	max-width: 1130px;
	width: 100%;
	flex: 1;
	margin: 48px auto 64px auto;
	padding-left: 24px;
	overflow: hidden;
	border: ${(props) => props.debug && "solid 1px red"};
`;

function PageContainer({ navState }) {
	const { debug } = navState;
	return <Container debug={debug}></Container>;
}

const mapStateToProps = (state) => ({
	navState: state.navState,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
