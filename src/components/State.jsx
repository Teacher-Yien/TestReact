import React from "react";
class State extends React.Component {
	constructor(props) {
				super(props);
				this.state = {name:"Hello State Full"};
				this.handlerChangeName = this.handlerChangeName.bind(this);
	}
	handlerChangeName(){
			this.setState({name:"I Lover Programming"});
	}

	render() {
			return(
				<React.Fragment>
						  <h1>{this.state.name}</h1>
								<button onClick={this.handlerChangeName} className=" btn btn-danger">Change State</button>
				</React.Fragment>
			)
	}
}
export default State