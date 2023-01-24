import React, { useState, useEffect } from 'react';
import axios from "axios";
import './tablestyle.css';

// const data = [
//     { registration_no: 1, name: "Anom", city: "abc", age: 19, sex: "Male", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//     { registration_no: 2, name: "Megha", city: "abc", age: 19, sex: "Female", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//     { registration_no: 3, name: "Subham", city: "abc", age: 25, sex: "Male", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//   ]
var date = new Date();

function Dreport(){

  const [data, setData] = useState([])
  const fetchData = () => { 
    fetch(`https://localhost:7277/DeathRegistration`)
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

  const generatepdf =()=>{
    fetch(`https://localhost:7277/DeathRegistration/GeneratePDF`)
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
    return (
      <>
      <div className="header">
      <h1 align="center">Death Registration Report</h1>
      </div>
      <div class='col-md-6'>
        <label class="form-label">Date :- </label>
        <input class="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
        <br/>
        <label for="inputDistrict" class="form-label">Time :- </label>
        <input class="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
        <button onClick={generatepdf}>Download PDF</button>      
      </div>
        <div className="tableData">
          <table>
            <thead>
            <tr>
              <th>Registration no<br/>Year</th>
              <th>City/Village<br/>Taluka</th>
              <th>Date of Death<br/>Registration Date</th>
              <th>Age at Death<br/>Sex</th>
              <th>Name of Dead Person<br/>Place of Death</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.registrationNo}<br/>{val.year}</td>
                  <td>{val.cityVillege}<br/>{val.taluko}</td>
                  <td>{val.dateOfDeath}<br/>{val.registrationDate}</td>
                  <td>{val.ageAtDeath}<br/>{val.sex}</td>
                  <td>{val.nameOfDeathPerson}<br/>{val.placeOfDeath}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>

        </>
      );
    }
      
    export default Dreport;

