const getFormattedDateString = dateObj => {
	const year = dateObj.getFullYear();
	const date = dateObj.getDate();
	const month = dateObj.getMonth() + 1;

	return `${year}-${month < 9 ? "0" : ""}${month}-${date < 9 ? "0" : ""}${date}`;
};

export default getFormattedDateString;
