import React from "react";
class NavbarState extends React.Component {
	render() {
		const menu = ["Home", "About", "Contact", "Projects", "Applications"];
		const items = menu.map((e)=>(
			<a href={"/"+e} key={e} style={{fontSize:"24px",margin:"10px"}}>{e}</a>
		))
		console.log(items)

		return(
			<>
			  <nav>{items}</nav>
			</>
		)
	}
}
export default Navbar