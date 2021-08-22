import styled from "styled-components/macro";
import { PRIMARY, SECONDARY } from "../../constants";

export const Container = styled.div`
	flex-basis: 20%;
	min-width: 20%;
	background-color: ${SECONDARY};
	color: ${PRIMARY};
	padding: 10px;
	font-weight: 600;

	& > div {
		margin-bottom: 5px;
	}

	@media (max-width: 1000px) {
		font-size: small;
	}
`;
