import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import Button from "../../commons/button";
import { pushView } from "../../../redux/actions/view";

const Container = styled.div`
	margin-top: 48px;
	border: ${(props) => props.debug && "solid 1px red"};
`;

const ButtonContainer = styled.div``;

export const LibraryView = ({ navState, pushView }) => {
	const { debug } = navState;

	const changeView = (name) => {
		pushView({
			name,
			props: {},
		});
	};

	return (
		<Container debug={debug}>
			<ButtonContainer>
				<Button
					label="Artists"
					theme="red"
					chevron
					onClick={() => changeView("Artists")}
				/>
				<Button
					label="Albums"
					theme="red"
					chevron
					onClick={() => changeView("Albums")}
				/>
			</ButtonContainer>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	navState: state.navState,
});

const mapDispatchToProps = (dispatch) => {
	return {
		pushView: (view) => dispatch(pushView(view)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryView);
