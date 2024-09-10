import { FaBars } from "react-icons/fa";
function Menu(){
	return(
		<div className=" container">
			<div className=" navbar navbar-expand-lg">
				<div className="navbar-brand"><h1>Yummy <span className=" text-danger">.</span></h1></div>
				<div className=" navbar-collapse collapse">
					<ul className="navbar-nav mx-5">
						 <li className="nav-item"><a href="#" id="a" className="nav-link active">Home</a></li>
						 <li className="nav-item"><a href="#" id="a" className="nav-link">About</a></li>
						 <li className="nav-item"><a href="#" id="a" className="nav-link">Menu</a></li>
						 <li className="nav-item"><a href="#" id="a" className="nav-link">Events</a></li>
						 <li className="nav-item"><a href="#" id="a" className="nav-link">Chefs</a></li>
						 <li className="nav-item"><a href="#" id="a"  className="nav-link">Gallery</a></li>
					</ul>
				</div>
				<div className=" btn-group">
					  <button className=" btn btn-danger px-3  rounded-5 me-3">Book a Table</button>
						<FaBars id="bar" data-bs-toggle="modal" data-bs-target="#model" style={{fontSize:"24px"}} className="  d-lg-none d-md-block mt-2 mx-3"/>
				</div>
				{/* model */}
				<div className=" modal fade" id="model">
					<div className="modal-dialog">
						<div className=" modal-header"><button className=" btn-close " data-bs-dismiss="modal"></button></div>
						<div className=" modal-body bg-light">
								<ul className="navbar-nav mx-5">
									<li className="nav-item"><a href="#" id="b" className="nav-link active">Home</a></li>
									<li className="nav-item"><a href="#" id="b" className="nav-link ">About</a></li>
									<li className="nav-item"><a href="#" id="b" className="nav-link">Menu</a></li>
									<li className="nav-item"><a href="#" id="b"	className="nav-link">Events</a></li>
									<li className="nav-item"><a href="#" id="b"	className="nav-link">Chefs</a></li>
									<li className="nav-item"><a href="#" id="b" className="nav-link">Gallery</a></li>
								</ul>
						</div>
					</div>
				</div>

			</div>
			<div className=" row">
					<div className="col-lg-6"></div>
					<div className="col-lg-6 p-2 " data-aos="fade-down-left"  data-aos-duration="3000"><img  className=" img-fluid" src="assets/login.png" alt="" /></div>
			</div>
		</div>
	)
}
export default Menu