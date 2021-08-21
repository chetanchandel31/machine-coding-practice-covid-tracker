import Details from "../Details/Details";
import Sidebar from "../Sidebar/Sidebar";
import { Container } from "./styles";

const MainContent = ({ data, selectedStates, setSelectedStates, details }) => {
	return (
		<Container>
			<Sidebar data={data} selectedStates={selectedStates} setSelectedStates={setSelectedStates} />
			<Details details={details} selectedStates={selectedStates} />
		</Container>
	);
};

export default MainContent;
