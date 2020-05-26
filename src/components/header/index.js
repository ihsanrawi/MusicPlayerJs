import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { constants } from "../../utils";
import { popView } from "../../redux/actions/view";
import Icon from "../../utils/components/icon";

const { color } = constants;

const Container = styled.div`
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	max-width: 900px;
	height: ${(props) => (props.hideTitle ? "48px" : "90px")};
	padding-left: 48px;
	background: ${color.white};
	overflow: hidden;
	border: ${(props) => props.debug && "solid 1px red"};
`;

const ChevronContainer = styled.div`
	cursor: pointer;
	width: 40px;
	opacity: ${(props) => (props.isShown ? 1 : 0)};
	transform: ${(props) =>
		props.isShown ? "scale(1) translateX(0)" : "scale(0) translateX(20px)"};
`;

export const Header = ({ navState, viewState }) => {
	const { debug } = navState;
	const { stack } = viewState;

	const showChevron = stack.length > 1;

	return (
		<Container debug={debug}>
			<ChevronContainer isShown={showChevron}>
				<Icon
					name="chevron-left"
					size={38}
					color={color.red[4]}
					onClick={showChevron ? popView : null}
				/>
			</ChevronContainer>
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
