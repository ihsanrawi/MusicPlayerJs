import React from "react";
import styled from "styled-components";

import { constants } from "../../../utils";
import Icon from "../icon";
const { color } = constants;

const Container = styled.div`
	cursor: pointer;
	display: flex;
	min-height: 48px;
	border-bottom: solid 1px ${color.gray[3]};

	:first-of-type {
		border-top: 1px solid ${color.gray[3]};
	}

	&:active {
		background: ${color.gray[2]};
	}
`;
const ChevronContainer = styled.div`
	height: 3em;
	width: 3em;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		color: ${color.gray[4]};
		height: 20px;
		width: 20px;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	h2,
	h4 {
		font-weight: normal;
		color: ${(props) =>
			props.theme && props.theme.length
				? color[props.theme][4]
				: color.black};
		color: ${(props) => props.isPlaying && color.red[4]};
		user-select: none;
	}
`;
const Label = styled.h2`
	margin: 0;
	font-size: 1.3rem;
`;

const SubLabel = styled.h4`
	margin: 0;
`;

function Button({ label, subLabel, theme, chevron, onClick }) {
	return (
		<Container onClick={onClick}>
			<TextContainer theme={theme}>
				<Label>{label}</Label>
				<SubLabel>{subLabel}</SubLabel>
			</TextContainer>
			{chevron && (
				<ChevronContainer>
					<Icon name="chevron-right" />
				</ChevronContainer>
			)}
		</Container>
	);
}

export default Button;
