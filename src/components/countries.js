import React, { Component } from 'react';
import axios from 'axios';
import Columns from 'react-columns';
import Search from './search';
import '../Style/country.css'


class Countries extends Component {
	state = {
		countries: [],
		searchText: '',
		error: false
	};

	onChange = (e) => {
		this.setState({
			searchText: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const newCountryList = this.state.countries.filter(
			(id) => id.country.toLocaleLowerCase() === this.state.searchText.toLocaleLowerCase() ? this.state.searchText : id="Not found"
		);
		this.setState({ countries: newCountryList, searchText: '' });
	};

	componentDidMount() {
		axios
			.get('https://corona.lmao.ninja/v2/countries?sort=country')
			.then((resp) =>
				this.setState({
					countries: resp.data
				})
			)
			
	}

	render() {

		const queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];

		return (
			<div className="country-body">
				<Search onChange={this.onChange} onSubmit={this.onSubmit} className="searhcBox" />

				<Columns queries={queries}>
					{this.state.countries.map((data, id) => {
						return (
							<div className="country-card" key={id}>
								<img src={data.countryInfo.flag} alt="flag" className="img" />
								<div className="country-card-sub">
									<ul>
										<li><h4>{data.country}</h4></li>
										<li>Cases {data.cases}</li>
										<li>Deaths {data.deaths}</li>
										<li>Critical {data.critical}</li>
										<li>Active {data.active}</li>
										<li>Rcovered {data.recovered}</li>
									</ul>
								</div>
							</div>
						);
					})}
				</Columns>
			</div>
		);
	}
}

export default Countries;