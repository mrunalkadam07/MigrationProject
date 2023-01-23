import React, { useState, useEffect } from 'react';
import axios from "axios";
import './tablestyle.css'

// const data = [
//     { registration_no: 1, name: "Anom", city: "abc", age: 19, sex: "Male", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//     { registration_no: 2, name: "Megha", city: "abc", age: 19, sex: "Female", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//     { registration_no: 3, name: "Subham", city: "abc", age: 25, sex: "Male", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//   ]
var date = new Date();

function TaxPaidReport(){

  const [data, setData] = useState(null)
  const fetchData = () => { 
    fetch(`https://localhost:7277/PropertyTax`)
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
      <h1 align="center">Tax Paid Report</h1>
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
              <th>Bill Date<br/>Bill No</th>
              <th>Year<br/>Name</th>
              <th>Address<br/>Property No</th>
              <th>Home Tax<br/>Electricity Tax</th>
              <th>Special Water Tax<br/>Educational Sess</th>
              <th>Penalty Charge<br/>Total</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.billDate}<br/>{val.billNo}</td>
                  <td>{val.year}<br/>{val.name}</td>
                  <td>{val.address}<br/>{val.propertyNo}</td>
                  <td>{val.homeTax}<br/>{val.electricityTax}</td>
                  <td>{val.specialWaterTax}<br/>{val.educationalSess}</td>
                  <td>{val.panaltyCharge}<br/>{val.total}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>

        </>
      );
    }
      
    export default TaxPaidReport;
