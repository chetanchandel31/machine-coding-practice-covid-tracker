import { Container, StatsContainer } from "./styles";
import { Bar } from "react-chartjs-2";

const Details = ({ details, selectedStates }) => {
	return (
		<Container>
			<StatsContainer>
				<div>
					<span className="outlinedBoxHeading">SELECTED STATES</span>
					<div className="outlinedBox">{selectedStates.length}</div>
				</div>
				<div>
					<span className="outlinedBoxHeading">TESTED</span>
					<div className="outlinedBox">{details.tested.reduce((a, b) => a + b, 0)}</div>
				</div>
				<div>
					<span className="outlinedBoxHeading">CONFIRMED</span>
					<div className="outlinedBox">{details.confirmed.reduce((a, b) => a + b, 0)}</div>
				</div>
				<div>
					<span className="outlinedBoxHeading">RECOVERED</span>
					<div className="outlinedBox">{details.recovered.reduce((a, b) => a + b, 0)}</div>
				</div>
			</StatsContainer>
			<div style={{ maxWidth: "90%", margin: "auto" }}>
				<Bar
					data={{
						labels: selectedStates,
						datasets: [
							{
								label: "tested",
								data: details.tested,
								backgroundColor: ["rgba(153, 102, 255, 0.2)"],
								borderColor: ["rgba(153, 102, 255, 1)"],
								borderWidth: 1,
							},
							{
								label: "confirmed",
								data: details.confirmed,
								backgroundColor: ["rgba(255, 99, 132, 0.2)"],
								borderColor: ["rgba(255, 99, 132, 1)"],
								borderWidth: 1,
							},
							{
								label: "recovered",
								data: details.recovered,
								backgroundColor: ["rgba(75, 192, 192, 0.2)"],
								borderColor: ["rgba(75, 192, 192, 1)"],
								borderWidth: 1,
							},
						],
					}}
					width={600}
					height={1000}
					options={{ maintainAspectRatio: false, indexAxis: "y", responsive: true }}
				/>
			</div>
		</Container>
	);
};

export default Details;
