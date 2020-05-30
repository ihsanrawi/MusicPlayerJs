import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { constants } from "../../../utils";
import Icon from "../../commons/icon";
import { popView } from "../../../redux/actions/view";

const { color } = constants;

const ChevronContainer = styled.div`
	cursor: pointer;
	width: 40px;
	opacity: ${(props) => (props.isShown ? 1 : 0)};
	transform: ${(props) =>
		props.isShown ? "scale(1) translateX(0)" : "scale(0) translateX(20px)"};
`;

function BackButton({ viewState, popView }) {
	const { stack } = viewState;
	const showChevron = stack.length > 1;

	return (
		<ChevronContainer isShown={showChevron}>
			<Icon
				name="chevron-left"
				size={38}
				color={color.red[4]}
				onClick={() => (showChevron ? popView() : null)}
			/>
		</ChevronContainer>
	);
}

const mapStateToProps = (state) => ({
	viewState: state.viewState,
});

const mapDispatchToProps = (dispatch) => {
	return {
		popView: () => dispatch(popView()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BackButton);
