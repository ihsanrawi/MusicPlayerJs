import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { constants } from "../../../utils/index";

const { color } = constants;

const AlbumContainer = styled.div`
	margin: 0 16px 16px;
	width: 185px;
	cursor: pointer;
`;
const ImgContainer = styled.div`
	position: relative;
	min-height: 185px;
	margin-bottom: 16px;
`;
const Artwork = styled.img`
	position: absolute;
	top: 0;
	border-radius: 4px;
	max-width: 100%;
	pointer-events: none;
	user-select: none;
`;
const TextContainer = styled.div`
	margin: 4px 0;
`;
const Label = styled.h4`
	font-weight: normal;
	margin: 0 0 4px 0;
	user-select: none;
`;
const Sublabel = styled.h4`
	color: ${color.gray[5]};
	font-weight: normal;
	margin: 0;
	user-select: none;
`;

export const AlbumButton = ({ label, sublabel }) => {
	return (
		<AlbumContainer>
			<ImgContainer>
				<Artwork src="images/default_artwork.svg" />
			</ImgContainer>
			<TextContainer>
				<Label>{label}</Label>
				<Sublabel>{sublabel}</Sublabel>
			</TextContainer>
		</AlbumContainer>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumButton);
