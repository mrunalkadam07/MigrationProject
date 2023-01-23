import React, { useState, useEffect } from 'react';
import axios from "axios";
import './tablestyle.css'

// const data = [
//     { registration_no: 1, name: "Anom", city: "abc", age: 19, sex: "Male", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//     { registration_no: 2, name: "Megha", city: "abc", age: 19, sex: "Female", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//     { registration_no: 3, name: "Subham", city: "abc", age: 25, sex: "Male", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//   ]
var date = new Date();

function DeadBirthRegistrationReport(){

    const [data, setData] = useState(null)
  const fetchData = () => { 
    fetch(`https://localhost:7277/DeadBirthReg`)
    .then((response) => response.json())
    .then((actualData) => { 
      console.log(actualData); 
      setData(actualData); 
      console.log(data); 
    }) 
    .catch((err) => { 
      console.log(err.message); 
    }); 
  };

  useEffect(() => {
    fetchData();
  }, []);

    return (
      <>
      <div className="header">
      <h1 align="center">Dead Birth Registration Report</h1>
      </div>
      <div class='col-md-6'>
        <label class="form-label">Date :- </label>
        <input class="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
        <br/><br/>
        <label for="inputDistrict" class="form-label">Time :- </label>
        <input class="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
      </div>
        <div className="tableData">
          <table>
            <thead>
            <tr>
              <th>Registration no<br/>Year</th>
              <th>CityVillage<br/>Registration Date</th>
              <th>Dead BirthDate<br/>Sex</th>
              <th>Father Name<br/>Mother Name</th>
              <th>Address<br/>Birth Place</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.registrationNo}<br/>{val.year}</td>
                  <td>{val.cityVillege}<br/>{val.registrationDate}</td>
                  <td>{val.deathBirthDate}<br/>{val.sex}</td>
                  <td>{val.fatherName}<br/>{val.motherName}</td>
                  <td>{val.address}<br/>{val.birthPlace}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>

        </>
      );
    }
      
    export default DeadBirthRegistrationReport;
