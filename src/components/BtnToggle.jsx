import React from "react";
class BtnToggle extends React.Component {
				render() {
					 return(
							<>
							  <button className=" btn btn-success mt-3" onClick={this.props.onC}>Change Color</button>
							</>
						)
				}
}
export default BtnToggle