import React from 'react';
import {Row, Col, Container, ButtonGroup, Button, ButtonToolbar} from 'react-bootstrap';
import './style.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class KeyPad extends React.Component{
	render(){
		return(
		<div>
				<ButtonGroup>
					<CopyToClipboard text={this.props.display_res}>
				  		<Button className="myBtn" variant="danger"> CP </Button>
					</CopyToClipboard>
					<Button className="myBtn2" variant="danger" name="C" onClick={(e) => this.props.handleClick(e.target.name)}> C </Button>
					<Button className="myBtn" variant="danger" name="CE" onClick={(e) => this.props.handleClick(e.target.name)}> CE </Button>
				</ButtonGroup><br />
				<ButtonGroup>
					<Button className="myBtn" variant="warning" name="7" onClick={(e) => this.props.handleClick(e.target.name)}> 7 </Button>
					<Button className=" myBtn" variant="warning" name="8" onClick={(e) => this.props.handleClick(e.target.name)}> 8 </Button>
					<Button className=" myBtn" variant="warning" name="9" onClick={(e) => this.props.handleClick(e.target.name)}> 9 </Button>
					<Button className=" myBtn" variant="danger" name="/" onClick={(e) => this.props.handleClick(e.target.name)}> / </Button>
				</ButtonGroup><br /><ButtonGroup>
					<Button className=" myBtn" variant="warning" name="4" onClick={(e) => this.props.handleClick(e.target.name)}> 4 </Button>
					<Button className=" myBtn" variant="warning" name="5" onClick={(e) => this.props.handleClick(e.target.name)}> 5 </Button>
					<Button className=" myBtn" variant="warning" name="6" onClick={(e) => this.props.handleClick(e.target.name)}> 6 </Button>
					<Button className=" myBtn" variant="danger" name="*" onClick={(e) => this.props.handleClick(e.target.name)}> x </Button>
				</ButtonGroup><br /><ButtonGroup>
					<Button className=" myBtn" variant="warning" name="1" onClick={(e) => this.props.handleClick(e.target.name)}> 1 </Button>
					<Button className=" myBtn" variant="warning" name="2" onClick={(e) => this.props.handleClick(e.target.name)}> 2 </Button>
					<Button className=" myBtn" variant="warning" name="3" onClick={(e) => this.props.handleClick(e.target.name)}> 3 </Button>
					<Button className=" myBtn" variant="danger" name="-" onClick={(e) => this.props.handleClick(e.target.name)}> - </Button>
				</ButtonGroup><br /><ButtonGroup>
					<Button className=" myBtn" variant="warning" name="0" onClick={(e) => this.props.handleClick(e.target.name)}> 0 </Button>
					<Button className=" myBtn" variant="danger" name="." onClick={(e) => this.props.handleClick(e.target.name)}> . </Button>
					<Button className=" myBtn" variant="danger" name="=" onClick={(e) => this.props.handleClick(e.target.name)}> = </Button>
					<Button className=" myBtn" variant="danger" name="+" onClick={(e) => this.props.handleClick(e.target.name)}> + </Button>
				</ButtonGroup>
		</div>
		);
	}
}

export default KeyPad;