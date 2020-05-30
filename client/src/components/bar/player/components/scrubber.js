import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import { constants } from "../../../../utils";
const { color } = constants;

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: 3vh auto 1vh auto;
	height: 5vh;
	.rangeslider-horizontal.time-slider,
	.scrubber {
		height: 4px;
		width: 90%;
		margin: auto;
		box-shadow: none;
		.rangeslider__fill {
			background: ${(props) =>
				props.isChanging ? color.red[4] : color.gray[6]};
			box-shadow: none;
			transition: all 0.05s ease;
		}
		.rangeslider__handle {
			width: 7px;
			height: 7px;
			box-shadow: none;
			background: ${color.gray[6]};
			border: none;
			outline: none;
			&::active {
				height: 30px;
				width: 30px;
			}
			&::after {
				display: none;
			}
		}
	}
	.scrubber .rangeslider__handle {
		width: 8px;
		height: 8px;
		background: #757778;
		border: 2px solid transparent;
		transition: all 0.05s ease;
		${(props) =>
			props.isChanging &&
			css`
				height: 30px;
				width: 30px;
				background: ${color.red[4]};
				border: 2px solid white;
			`};
	}
	border: ${(props) => props.debug && "solid 1px red"};
`;

const TimeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin: auto;
`;

const Time = styled.h5`
	font-weight: normal;
	margin: 8px 0;
	color: ${(props) => (props.isChanging ? color.red[4] : color.gray[6])};
`;

const handleChange = () => {};
const startChange = () => {};
const endChange = () => {};

function Scrubber(props) {
	const { navState } = props;
	const { debug } = navState;

	return (
		<Container debug={debug}>
			<Slider
				className="scrubber"
				tooltip={false}
				value={0}
				max={1}
				onChange={handleChange}
				onChangeStart={startChange}
				onChangeComplete={endChange}
			/>
			<TimeContainer>
				<Time isChanging={false}>0:00</Time>
				<Time isChanging={false}>-0:00</Time>
			</TimeContainer>
		</Container>
	);
}

const mapStateToProps = (state) => ({
	navState: state.navState,
});

export default connect(mapStateToProps)(Scrubber);
