import React from 'react';
import './style.css';

class Result extends React.Component{
	render(){
		return(
			<input type="text" readonly value={this.props.result} className="display_res"/>
		);
	}
}

export default Result;	