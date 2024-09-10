import React from "react"
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {clock:new Date()}
	}
	componentDidMount(){
		setInterval(()=>{
				this.setState({clock:new Date()});
		},1000)
	}
	render() {
			return(
				<>
						<div style={{width:"300px",margin:"auto"}}>
							<h1>{this.state.clock.toLocaleTimeString()}</h1>
							
						</div>
				</>
			)
	}
}
export default Clock