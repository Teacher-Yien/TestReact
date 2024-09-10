import { useState } from "react";
import DataJson from "./data.json";

function FilterData() {
  const [item, setItem] = useState("");

  return (
    <div>
      <div className="container mt-4">
        <label htmlFor="search">Type Search Lesson Program</label>
        <input
          type="text"
          onChange={(e) => setItem(e.target.value)}
          id="search"
          className="form-control"
          placeholder="Search Data"
        />
        <table className="table table-dark table-hover mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {DataJson.Program
              .filter(sc =>{
                if(sc.name ===""){
                  return <h1 className=" text-center text-danger">Search Not Found</h1>;
                }else{
                  return   sc.name.toLowerCase().includes(item.toLowerCase());
                }
              }
              
              )
              .map(e => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.type}</td>
                  <td><img src={e.pic} alt={e.name} style={{width: '50px', height: '50px'}} /></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FilterData;
