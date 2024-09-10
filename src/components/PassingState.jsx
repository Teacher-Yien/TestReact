import React from "react";
import Button from "./Button";
class Pass extends React.Component {
	handleClick(){
		alert(" Passing StateFull😭😩");
	}
	render() {
		return(
			<>
			 <Button clickapi={this.handleClick}/>
			</>
		)
	}
}
export default Pass