import React from "react";
import Color from "./Color";
import BtnToggle from "./BtnToggle";
class Result extends React.Component {
	  constructor(props) {
						  super(props);
								this.state = {darkMode:"gray"};
								this.Toggle = this.Toggle.bind(this);
			}
			Toggle(){
				let mode= !this.state.darkMode;
				this.setState({darkMode:mode})
			}
				render() {
					 return(
							<>
								{/* <div style={{width:"300px",height:"300px",backgroundColor:`${this.state.darkMode}`}}></div> */}
								 <Color bg={this.state.darkMode}/>
								
									<BtnToggle onC={this.Toggle}/>

							</>
						)
				}
}

export default Result