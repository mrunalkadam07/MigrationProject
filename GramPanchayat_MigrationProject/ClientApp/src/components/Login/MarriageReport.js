// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import './tablestyle.css';
// import { Buffer } from 'buffer';

// var date = new Date();

// function MarriageReport(){

//   const [data, setData] = useState([])
//   const fetchData = () => { 
//     fetch(`https://localhost:7277/MarriageRegistration`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
//     .then((response) => response.json())
//     .then((actualData) => { 
//       console.log(actualData); 
//       setData(actualData); 
//       console.log(data); 
//     }) 
//     .catch((err) => { 
//       console.log(err.message); 
//     }); 
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const generatepdf =()=>{
    
//     fetch(
//       `https://localhost:7277/MarriageRegistration/Generate`,{
//       method: "GET",
//       headers: {
//        "Accept": "application/octet-stream",
//        "Authorization": "Bearer " +localStorage.getItem("Token")
//       },
//       },
//   ).then((res) => res.arrayBuffer())
//         .then(data => {
//           console.log(data);
          
//             var base64Str = Buffer.from(data).toString('base64');

//             var binaryString = window.atob(base64Str);
//             var binaryLen = binaryString.length;
//             var bytes = new Uint8Array(binaryLen);
//             for (var i = 0; i < binaryLen; i++) {
//                 var ascii = binaryString.charCodeAt(i);
//                 bytes[i] = ascii;
//             }
//             var arrBuffer = bytes;

//             var newBlob = new Blob([arrBuffer], { type: "application/pdf" });

//             if (window.navigator && window.navigator.msSaveOrOpenBlob) {
//                 window.navigator.msSaveOrOpenBlob(newBlob);
//                 return;
//             }

//             data = window.URL.createObjectURL(newBlob);

//             var link = document.createElement('a');
//             document.body.appendChild(link);
//             link.href = data;
//             link.download = "MarriageFile.pdf";
//             link.click();
//             window.URL.revokeObjectURL(data);
//         })
//       };
//     return (
//       <>
//       <div>
//       <h1 align="center">Marriage Registration Report</h1>
//       </div>
//       <div class='col-md-6'>
//         <label class="form-label">Date :- </label>
//         <input class="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
//         <br/>
//         <label for="inputDistrict" class="form-label">Time :- </label>
//         <input class="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
//         <br/><button onClick={generatepdf}>Download PDF</button>      
//       </div>
//         <div className="tableData">
//           <table>
//             <thead>
//             <tr>
//               <th>Registration no<br/>Year</th>
//               <th>City/Village<br/>Taluka</th>
//               <th>Date of Death<br/>Registration Date</th>
//               <th>Age at Death<br/>Sex</th>
//               <th>Name of Dead Person<br/>Place of Death</th>
//             </tr>
//             </thead>
//             <tbody>
//             {data.map((val, key) => {
//               return (
//                 <tr key={key}>
//                   <td>{val.registrationNo}<br/>{val.year}</td>
//                   <td>{val.cityVillege}<br/>{val.taluko}</td>
//                   <td>{val.dateOfDeath}<br/>{val.registrationDate}</td>
//                   <td>{val.ageAtDeath}<br/>{val.sex}</td>
//                   <td>{val.nameOfDeathPerson}<br/>{val.placeOfDeath}</td>
//                 </tr>
//               )
//             })}
//             </tbody>
//           </table>
//         </div>

//         </>
//       );
//     }
      
//     export default MarriageReport;


import React, { useState, useEffect } from 'react';
import axios from "axios";
//import './datatable.css'
//import './tablestyle.css';
import { Buffer } from 'buffer';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

function MarriageReport() {
    const [pagesize, setPageSize] = useState(null)
    var date = new Date();

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const [data, setData] = useState([])
    const fetchData = () => { 
      fetch(`https://localhost:7277/MarriageRegistration`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
      `https://localhost:7277/MarriageRegistration/Generate`,{
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
            link.download = "MarriageFile.pdf";
            link.click();
            window.URL.revokeObjectURL(data);
        })
      };

      console.log("VALUE: *************"+ page);
      console.log(data); 
      console.log(data[0].registrationNo);

return(
      <>
      <div className="header">
      <h1 align="center">Marriage Registration Report</h1>
      </div>
      <div className='col-md-6'>
        <label className="form-label">Date :- </label>
        <input className="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
        <br/><br/>
        <label htmlFor="inputDistrict" className="form-label">Time :- </label>
        <input className="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
        <button className="btn btn-dark" onClick={generatepdf}> Download as PDF</button><br/><br/>
        <Link to="/Navbar"><button type="CANCEL" className="btn btn-dark" >CANCEL </button></Link>
      </div>
        <div className="tableData">
          <table >
            
            <tbody >
              <>
              <tr>
                <th>Registration no</th>
                {/* <td>{data[page-1].registrationNo}</td> */}
              </tr>
              <tr >
                  <th>Marriage Date</th>
                  {/* <td>{data[page-1].merrageDate}</td> */}
              </tr>
              <tr>
                <th>Marriage Place</th>
                {/* <td>{data[page-1].merragePlace}</td> */}
              </tr>
              <tr >
                <th>Full Name of Groom</th>
                {/* <td>{data[page-1].fullNameOFGroom}</td> */}
              </tr>
              <tr> 
                <th>Groom Age</th>
                {/* <td>{data[page-1].groomAge}</td> */}
              </tr>
              <tr >
                <th>Groom Religion</th>
                {/* <td>{data[page-1].groomReligion}</td> */}
              </tr>
              <tr >
                <th>Groom Address</th>
                {/* <td>{data[page-1].groomAddress}</td> */}
              </tr>
              <tr > 
                <th>Full Name of Bride</th>
                {/* <td>{data[page-1].fullNameOFBride}</td> */}
              </tr>
              <tr>
                <th>Bride Age</th>
                {/* <td>{data[page-1].brideAge}</td> */}
              </tr>
              <tr >
                <th>Bride Religion</th>
                {/* <td>{data[page-1].brideReligion}</td> */}
              </tr>
              <tr >
                <th>Bride Address</th>
                {/* <td>{data[page-1].brideAddress}</td> */}
              </tr>
              <tr > 
                <th>Groom Father and Mother Name</th>
                {/* <td>{data[page-1].groomFatherAndMotherName}</td> */}
              </tr>
              <tr>
                <th>Bride Father and Mother Name</th>
                {/* <td>{data[page-1].brideFatherAndMotherName}</td> */}
              </tr>
              <tr >
                <th>Name of Brahman</th>
                {/* <td>{data[page-1].nameOfBrahMan}</td> */}
              </tr>
              <tr >
                <th>Fullname of First Witness</th>
                {/* <td>{data[page-1].firstFullNameOfWitness}</td> */}
              </tr>
              <tr > 
                <th>Fullname of Second Witness</th>
                {/* <td>{data[page-1].secondFullNameOfWitness}</td> */}
              </tr>
              <tr>
                <th>Second Witness Address</th>
                {/* <td>{data[page-1].secondWitnessAddress}</td> */}
              </tr>
              </>
            </tbody>
          </table>
        </div>
<div className='pagination' style={{display: 'flex'}}>
          <Pagination 
            count={data.length} 
            page={page} 
            onChange={handleChange}
            variant="outlined"
            shape="rounded" 
            color="primary"
          />
    
        </div>

        </>

    )


  };

  export default MarriageReport;

