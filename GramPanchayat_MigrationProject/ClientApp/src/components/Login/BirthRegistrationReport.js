import React, { useState, useEffect } from 'react';
import axios from "axios";
import './tablestyle.css'


var date = new Date();

function BirthRegistrationReport(){

  const [data, setData] = useState([])
  const fetchData = () => { 
    fetch(`https://localhost:7277/BirthRegistration`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
  // const generatepdf =()=>{
  //   fetch(`https://localhost:7277/BirthRegistration/GeneratePDF`)
  //   .then((response) => response.json())
  //   .then((actualData) => { 
  //     console.log(actualData); 
  //     setData(actualData); 
  //     console.log(data); 
  //   }) 
  //   .catch((err) => { 
  //     console.log(err.message); 
  //   }); 
  // };
    return (
      <>
      <div className="header">
      <h1 align="center">Birth Registration Report</h1>
      </div>
      <div class='col-md-6'>
        <label class="form-label">Date :- </label>
        <input class="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
        <br/><br/>
        <label for="inputDistrict" class="form-label">Time :- </label>
        <input class="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
        {/* <br/><button onClick={generatepdf}>Download PDF</button>       */}
      </div>
        <div className="tableData">
          <table>
            <thead>
            <tr>
              <th>Registration no<br/>Registration Date<br/>Date of Birth</th>
              <th>Sex<br/>Child Name</th>
              <th>Father Name<br/>Mother Name</th>
              <th>Address<br/>Birth Place</th>
              <th>Delivery Type<br/>Total Live Child with this Child</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.registrationNo}<br/>{val.registrationDate}<br/>{val.dateOfBirth}</td>
                  <td>{val.sex}<br/>{val.childName}</td>
                  <td>{val.fatherName}<br/>{val.motherName}</td>
                  <td>{val.address}<br/>{val.birthPlace}</td>
                  <td>{val.deliveryType}<br/>{val.totalLiveChildWithThisChild}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>

        </>
      );
    }
      
  export default BirthRegistrationReport;
