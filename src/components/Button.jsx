import React from 'react';
class Button extends React.Component {
	render() {
		return(
			<>
			  <button className='btn btn-success' onClick={this.props.clickapi}>Button Click</button>
			</>
		)
	}
}
export default Button