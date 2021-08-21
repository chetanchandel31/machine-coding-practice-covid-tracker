import { Container } from "./styles";

const Sidebar = ({ data, setSelectedStates, selectedStates }) => {
	const allStatesList = Object.keys(data);

	const selectUnselectAll = ({ target }) => {
		if (target.checked) setSelectedStates(allStatesList);
		else setSelectedStates([]);
	};

	const selectUnselectState = ({ target }) => {
		if (target.checked) setSelectedStates(prev => [...prev, target.value]);
		else setSelectedStates(prev => prev.filter(state => state !== target.value));
	};

	return (
		<Container>
			<div>
				<input type="checkbox" checked={allStatesList.length === selectedStates.length} onChange={selectUnselectAll} /> select all
			</div>
			{allStatesList.map((el, i) => (
				<div key={i}>
					<input type="checkbox" value={el} checked={selectedStates.includes(el)} onChange={selectUnselectState} /> {el}
				</div>
			))}
		</Container>
	);
};

export default Sidebar;
