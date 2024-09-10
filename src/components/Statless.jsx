import React from "react";

export default class Navbar extends React.Component {
	render() {
		const links = this.props.links.map((e)=>(
			<a href={"/"+e} key={e}>{e}</a>
		))
		console.log(links)
		return(
			<>
			  <nav>{links}</nav>
			</>
		)
	}
}