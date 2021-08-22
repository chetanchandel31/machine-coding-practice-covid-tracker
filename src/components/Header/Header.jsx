import getFormattedDateString from "../../helpers/getFormattedDateString";
import { HeaderContainer } from "./styles";

const Header = ({ selectedDate, setSelectedDate }) => {
	return (
		<HeaderContainer>
			<h1>Covid Tracker</h1>
			<div>
				<input type="date" value={getFormattedDateString(selectedDate)} onChange={({ target }) => setSelectedDate(new Date(target.value))} />
			</div>
		</HeaderContainer>
	);
};

export default Header;
