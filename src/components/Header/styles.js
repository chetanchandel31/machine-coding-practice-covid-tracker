import styled from "styled-components/macro";
import { PRIMARY, TERTIARY } from "../../constants";

export const HeaderContainer = styled.div`
	padding: 10px;
	background-color: ${PRIMARY};
	color: #fffffe;

	& > div {
		text-align: right;
	}

	& input {
		background-color: ${TERTIARY};
		color: ${PRIMARY};
		font-weight: bolder;
		text-align: center;
	}
`;
