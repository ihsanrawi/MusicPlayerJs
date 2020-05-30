import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { constants } from "../../../utils";
import { popView } from "../../../redux/actions/view";

const { color } = constants;

const Container = styled.div`
	position: absolute;
	margin-top: ${(props) =>
		(props.isBackButton && !props.exiting) || props.isHidden
			? "5px"
			: "48px"};
	margin-left: ${(props) =>
		props.isHidden && !props.exiting ? "-100%" : "24px"};
	margin-left: ${(props) => props.isTitle && props.exiting && "100vw"};
	transition: all 0.3s ease-in-out;

	h1 {
		color: ${(props) =>
			(props.isBackButton && !props.exiting) || props.isHidden
				? color.red[4]
				: color.black};
		color: ${(props) => props.isTitle && props.exiting && "white"};
		font-weight: ${(props) =>
			(props.isBackButton && !props.exiting) || props.isHidden
				? "normal"
				: "bold"};
		font-size: ${(props) =>
			(props.isBackButton && !props.exiting) || props.isHidden
				? "20px"
				: null};
		opacity: ${(props) => (props.isHidden && !props.exiting ? 0 : 1)};
		cursor: ${(props) => props.isBackButton && "pointer"};

		&:active {
			color: ${(props) => props.isBackButton && color.redAlpha[2]};
		}
		border: ${(props) => props.debug && "solid 1px red"};
	}
	border: ${(props) => props.debug && "solid 1px red"};
`;

const Title = styled.h1`
	margin: 0;
	border: ${(props) => props.debug && "solid 1px red"};
`;

export const TitleStack = ({ viewState, navState }) => {
	const { stack } = viewState;
	const { debug } = navState;

	const currentStack = stack[stack.length - 1];
	const { hideTitle } = currentStack.props;

	return stack.map(({ name, title, props }, index) => {
		const isHidden = index < stack.length - 2;
		const isBackButton = index === stack.length - 2;
		const isTitle = index === stack.length - 1;

		return (
			index >= stack.length - 3 && (
				<Container
					debug={debug}
					key={`title-${name}`}
					isHidden={isHidden}
					isBackButton={isBackButton}
					exiting={false}
					isTitle={isTitle}>
					<Title
						debug={debug}
						onClick={() => (isBackButton ? popView : null)}>
						{title || name}
					</Title>
				</Container>
			)
		);
	});
};

const mapStateToProps = (state) => ({
	viewState: state.viewState,
	navState: state.navState,
});

const mapDispatchToProps = (dispatch) => {
	return {
		popView: () => dispatch(popView()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleStack);
