import React, { Component } from 'react';
import axios from 'axios';
import '../Style/card.css'

class Card extends Component {
	state = {
		update: []
	};

	componentDidMount() {
		axios
			.get('https://corona.lmao.ninja/v2/all')
			.then((resp) => this.setState({ update: resp.data }))
			.catch((err) => err.message);
	}

	render() {
		const date = new Date(parseInt(this.state.update.updated));
		const lastUpdated = date.toString();

		return (
			<>
				<div className="card-container">
					<div className="card">
						<h3>Cases</h3>
						<h1 className="textUpdate t1">{this.state.update.cases}</h1>
						<div className="sub-container">
							<p>
								<small>last updated {lastUpdated}</small>
							</p>
						</div>
					</div>
					<div className="card">
						<h3>Deaths</h3>
						<h1 className="textUpdate t2">{this.state.update.deaths}</h1>
						<div className="sub-container">
							<p>
								<small>last updated {lastUpdated}</small>
							</p>
						</div>
					</div>
					<div className="card">
						<h3>Recovered</h3>
						<h1 className="textUpdate t3">{this.state.update.recovered}</h1>
						<div className="sub-container">
							<p>
								<small>last updated {lastUpdated}</small>
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Card;
