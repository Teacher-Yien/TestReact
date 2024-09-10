import React from "react";
class Color extends React.Component {
				render() {
				const colorBgRed = {
					  width:"300px",
							height:"300px",
							backgroundColor:"red"
				}
				const colorBgLime= {
					width:"300px",
					height:"300px",
					backgroundColor:"lime"
		}
					 return(
							<div>	
									{this.props.bg?(
										<div style={colorBgRed}>Color red</div>
									):(
										 <div style={colorBgLime}>Color Lime</div>
									)
									}
							</div>
						)
				}
}
export default Color