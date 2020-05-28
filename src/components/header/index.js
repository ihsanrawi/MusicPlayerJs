import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { constants } from "../../utils";
import { popView } from "../../redux/actions/view";
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
	border: ${(props) => props.debug && "solid 1px red"};
`;

export const Header = ({ navState }) => {
	const { debug } = navState;

	return (
		<Container debug={debug}>
			<BackButton />
			<TitleStack />
		</Container>
	);
};

const mapStateToProps = (state) => ({
	navState: state.navState,
	viewState: state.viewState,
});

const mapDispatchToProps = (dispatch) => {
	return {
		popView: () => dispatch(popView()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
