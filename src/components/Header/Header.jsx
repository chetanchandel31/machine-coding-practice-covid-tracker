import getFormattedDateString from "../../helpers/getFormattedDateString";

const Header = ({ selectedDate, setSelectedDate }) => {
	return (
		<div>
			<input
				type="date"
				value={getFormattedDateString(selectedDate)}
				onChange={({ target }) => {
					setSelectedDate(new Date(target.value));
					console.log(new Date(target.value).toLocaleDateString() === new Date().toLocaleDateString());
				}}
			/>
		</div>
	);
};

export default Header;
