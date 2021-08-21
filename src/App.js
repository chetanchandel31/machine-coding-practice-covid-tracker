import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import getFormattedDateString from "./helpers/getFormattedDateString";

function App() {
	const [data, setData] = useState({});
	const [selectedStates, setSelectedStates] = useState([]); //["AN", "AP" ....]
	const [details, setDetails] = useState({ tested: 0, confirmed: 0, recovered: 0 });
	const [selectedDate, setSelectedDate] = useState(new Date());
	const isSelectedDateSameAsCurrentDate = selectedDate.toLocaleDateString() === new Date().toLocaleDateString();

	useEffect(() => {
		const API = isSelectedDateSameAsCurrentDate
			? "https://data.covid19india.org/v4/min/data.min.json"
			: "https://data.covid19india.org/v4/min/timeseries.min.json";

		fetch(API)
			.then(res => res.json())
			.then(data => {
				setData(data);
				setSelectedStates(Object.keys(data));
			})
			.catch(err => console.log(err));
	}, [selectedDate, isSelectedDateSameAsCurrentDate]);

	// (re)-calculate details whenever date/selected states change
	useEffect(() => {
		let tested, confirmed, recovered;
		tested = confirmed = recovered = 0;

		for (let state of selectedStates) {
			const totalStateStats = isSelectedDateSameAsCurrentDate ? data[state]?.total : data[state].dates[getFormattedDateString(selectedDate)]?.total;

			tested += totalStateStats?.tested || 0;
			confirmed += totalStateStats?.confirmed || 0;
			recovered += totalStateStats?.recovered || 0;
		}

		setDetails({ tested, confirmed, recovered });
		// we won't have data as soon as date changes, so listening to changes in data only which will only change as result of change in date
		// eslint-disable-next-line
	}, [data, selectedStates]);

	return (
		<div className="App">
			<Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
			<MainContent data={data} selectedStates={selectedStates} setSelectedStates={setSelectedStates} details={details} />
		</div>
	);
}

export default App;

// listen to changes in date
// if selected date is same as current date, everything remains same
// else change API and totalStateStats
// memoize?
// can add loader also
