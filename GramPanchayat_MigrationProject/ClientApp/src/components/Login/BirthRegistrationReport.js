import React, { useState, useEffect } from 'react';
import axios from "axios";
import './tablestyle.css';
import { Buffer } from 'buffer';


var date = new Date();

function BirthRegistrationReport(){

  const [data, setData] = useState([])
  const fetchData = () => { 
    fetch(`https://localhost:7277/BirthRegistration`,
    {
      headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
    
    fetch(
      `https://localhost:7277/BirthRegistration/Generate`,{
      method: "GET",
      headers: {
       "Accept": "application/octet-stream",
       "Authorization": "Bearer " +localStorage.getItem("Token")
      },
      },
  ).then((res) => res.arrayBuffer())
        .then(data => {
          console.log(data);
          
            var base64Str = Buffer.from(data).toString('base64');

            var binaryString = window.atob(base64Str);
            var binaryLen = binaryString.length;
            var bytes = new Uint8Array(binaryLen);
            for (var i = 0; i < binaryLen; i++) {
                var ascii = binaryString.charCodeAt(i);
                bytes[i] = ascii;
            }
            var arrBuffer = bytes;

            var newBlob = new Blob([arrBuffer], { type: "application/pdf" });

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }

            data = window.URL.createObjectURL(newBlob);

            var link = document.createElement('a');
            document.body.appendChild(link);
            link.href = data;
            link.download = "MyBirthFile.pdf";
            link.click();
            window.URL.revokeObjectURL(data);
        })
      };
    return (
      <>
      <div className="header">
      <h1 align="center">Birth Registration Report</h1>
      </div>
      <div className='col-md-6'>
        <label className="form-label">Date :- </label>
        <input className="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
        <br/><br/>
        <label htmlFor="inputDistrict" className="form-label">Time :- </label>
        <input className="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
        <br/><button onClick={generatepdf}>Download PDF</button>       
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
