import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const path = "images";

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-height: 14vh;
	margin-top: 16px;
	border: ${(props) => props.debug && "solid 1px red"};
`;

const Svg = styled.img`
	height: 32px;
	width: 32px;
	margin: 0 8px;
	cursor: pointer;
`;

const prevSong = () => {
	console.log("Prev song!");
};

const resume = () => {
	console.log("resume song!");
};

const pause = () => {
	console.log("pause song!");
};

const nextSong = () => {
	console.log("next song!");
};

function Controls(props) {
	const { navState } = props;
	const { debug } = navState;

	return (
		<Container debug={debug}>
			<Svg src={`${path}/skip_back.svg`} onClick={prevSong} />
			<Svg src={`${path}/play.svg`} onClick={resume} />
			<Svg src={`${path}/skip_next.svg`} onClick={nextSong} />
		</Container>
	);
}

const mapStateToProps = (state) => ({
	navState: state.navState,
});

export default connect(mapStateToProps)(Controls);
