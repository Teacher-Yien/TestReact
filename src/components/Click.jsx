import React from "react"
function Click(){
	const heandler = ()=>{
		alert("Hello world JSX! 😘😩");	
	}
	return(
		<div className=" container">
			<button onClick={heandler} className=" btn btn-danger">Click</button>
		</div>
	)
}
export default Click