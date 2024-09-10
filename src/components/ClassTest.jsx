import React from "react";

class Test extends React.Component {
	handleClick(){
		alert("Hello world");
	}
	render() {
		return (
			<>
				<button className="btn btn-danger" onClick={this.handleClick}>Click</button>
			</>
		)
	}
}
export default Test;