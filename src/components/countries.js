import React, { Component } from 'react';
import axios from 'axios';
import Columns from 'react-columns';
import Search from './search';
import Format from './utility'
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
		const newCountryList = this.state.countries.filter(id =>  id.country.toLowerCase().indexOf( this.state.searchText.toLowerCase() ) !== -1
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
				<Search 
				onChange={this.onChange} 
				value={this.state.searchText }
				onSubmit={this.onSubmit} 
				className="searhcBox" 
				/>

				<Columns queries={queries}>
					{this.state.countries.map((data, id) => {
						return (
							<div className="country-card" key={id}>
								<img src={data.countryInfo.flag} alt="flag" className="img" />
								<div className="country-card-sub">
									<ul>
										<li><h4>{data.country}</h4></li>
										<li>Cases {Format(data.cases)}</li>
										<li>Deaths {Format(data.deaths)}</li>
										<li>Critical {Format(data.critical)}</li>
										<li>Active {Format(data.active)}</li>
										<li>Rcovered {Format(data.recovered)}</li>
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
