
function List(){	
	const bg={
		backgroundColor:"red"
	}
	const text = "Hello Nana";
	return(
		<div className=" container">
		   <h1 style={bg}>{text}</h1>
		</div>
	)
}
export default List