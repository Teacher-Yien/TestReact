import Swal from 'sweetalert2'
function Switc(){
  const heandle = () =>{
		Swal.fire({
			title: "Good job!",
			text: "You clicked the button!",
			icon: "success"
		});
	} 
	return(
		<div className=" container mt-5">
		  <button onClick={heandle} className=" btn btn-success">Click</button>
		</div>
	)
}
export default Switc