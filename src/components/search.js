import React, { Component } from 'react';

export default class Search extends Component {
	
	render() {
          
		
		return (
			<React.Fragment>
				<form 
				className="formBox" 
				onSubmit={this.props.onSubmit}
				>
					<div>
						<input 
						className="inputBox"
						type="text" 
						value={this.props.value}
						onChange={this.props.onChange} 
						placeholder="search country" 
						/>
					</div>
				</form>
			</React.Fragment>
		);
	}
}
