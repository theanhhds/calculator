import React from 'react';
import KeyPad from './keypad';
import Result from './result';
import {Row, Col, Container} from 'react-bootstrap';

class App extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			display_res : "0",
			history : [],
		}
	}
	
	handleClick(name)
	{
		var flag = 0;
		var equation = this.state.display_res;
		var new_res = this.state.display_res;
		if (new_res == "ERROR!!!")
			new_res = "0";
		if (name === '='){
			try {new_res = eval(this.state.display_res);}
			catch (e){
				if (e instanceof SyntaxError)
					new_res = "ERROR!!!";
			}
			flag = 1;
			// this.setState({history : })
		}
		else if (name === 'C'){
			new_res = "0";
		}
		else if (name === 'CE'){
			if (new_res === 'ERROR!!!' || new_res === '0') new_res = "00";
			new_res = new_res.toString().substring(0, new_res.length - 1);
		}
		else{
			new_res += name;
			if (new_res.charAt(0) == '0') new_res = new_res.substr(1);
			if (new_res === "") new_res = "0";
		}
		this.setState({display_res: new_res.toString()});
		if (new_res !== "ERROR!!!" && flag == 1){
			var eq = equation + " = " + new_res;
			this.setState({history : this.state.history.concat(eq)});
			console.log(this.state.history);
		}

	}
	
	render(){
		return(
		<div className="container">
			<Row>
				<Col className="border">
					<Result className="row col-12" result={this.state.display_res} />
					<KeyPad className="row " display_res={this.state.display_res} handleClick={this.handleClick}/>
				</Col>
				<Col className="border res">
					<h1 className="d-flex justify-content-center"> My calculation</h1><br/>
					<ul className="list-group list-group-flush">
						{this.state.history.map((i) => 
							<li className="list-group-item list-group-item-warning">{i}</li>)}
					</ul>
				</Col>
			</Row>
		</div>
		);
	}
}


export default App;
