function If(){
		var random = Math.floor(Math.random() *100+1);
		var exam = "";
		if(random>=50){
				exam = "Exam Success So Good";
		} else{
			exam = "Exam Fail So Bed";

		}

	return(
		<>
			<div className=" container">
				<h1>Name: James</h1>
				<p>{exam}</p>
				<h3>Score: {random}</h3>
			</div>
		</>
	)
}
export default  If