import { Container } from "./styles";

const Details = ({ details, selectedStates }) => {
	return (
		<Container>
			{selectedStates.length}
			{JSON.stringify(details)}
		</Container>
	);
};

export default Details;
