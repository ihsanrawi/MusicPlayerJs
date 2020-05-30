import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

// import { constants } from "../../../../general/constants";

// const { color } = constants;

const Container = styled.div`
	height: 48px;
	width: 90%;
	display: flex;
   margin: auto;
	border: ${(props) => props.debug && "solid 1px red"};
    
   .rangeslider-horizontal.time-slider,
   .volume-slider {
      height: 4px;
      width: 90%;
      margin: auto;
      box-shadow: none;
      .rangeslider__fill {
         background: #757778;
         box-shadow: none;
      }
      .rangeslider__handle {
         width: 7px;
         height: 7px;
         box-shadow: none;
         background: #757778;
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

      .volume-slider .rangeslider__handle {
        width: 30px;
        height: 30px;
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.12);
        box-shadow: 0 3px 3px rgb(150, 150, 150);
     }
`;

const handleChange = () => {};

function VolumeSlider(props) {
	const { audioState, navState } = props;
	const { debug } = navState;
	const { volume } = audioState;

	return (
		<Container debug={debug}>
			<Slider
				className="volume-slider"
				tooltip={false}
				value={volume * 100}
				onChange={handleChange()}
			/>
		</Container>
	);
}

const mapStateToProps = (state) => ({
	navState: state.navState,
	audioState: {
		volume: 6,
	},
});

export default connect(mapStateToProps)(VolumeSlider);
