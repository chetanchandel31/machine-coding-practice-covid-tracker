import styled from "styled-components/macro";
import { PRIMARY } from "../../constants";

export const Container = styled.div`
	flex-grow: 1;
	min-height: 200px; //remove
	padding-bottom: 30px;
`;

export const StatsContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	/* justify-content: space-evenly; */
	@media (max-width: 1000px) {
		flex-wrap: wrap;
	}

	& > div {
		flex-grow: 1;
		position: relative;
		flex-basis: 25%;
		margin: 10px 0;
		@media (max-width: 1000px) {
			flex-basis: 50%;
		}
	}

	& .outlinedBox {
		border: solid 2px ${PRIMARY};
		color: ${PRIMARY};
		font-weight: bolder;
		padding: 20px;
		margin: 0 2px;
		@media (max-width: 1000px) {
			margin: 0 8px;
		}
	}

	& .outlinedBoxHeading {
		position: absolute;
		color: ${PRIMARY};
		font-weight: bolder;
		background-color: white;
		top: 0;
		left: 15px;
		transform: translateY(-50%);
		padding: 2px;
		@media (max-width: 1000px) {
			font-size: small;
		}
	}
`;
