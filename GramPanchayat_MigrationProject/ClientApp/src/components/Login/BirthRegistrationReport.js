// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import './tablestyle.css';
// import { Buffer } from 'buffer';


// var date = new Date();

// function BirthRegistrationReport(){

//   const [data, setData] = useState([])
//   const fetchData = () => { 
//     fetch(`https://localhost:7277/BirthRegistration`,
//     {
//       headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
//       `https://localhost:7277/BirthRegistration/Generate`,{
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
//             link.download = "MyBirthFile.pdf";
//             link.click();
//             window.URL.revokeObjectURL(data);
//         })
//       };
//     return (
//       <>
//       <div>
//       <h1 align="center">Birth Registration Report</h1>
//       </div>
//       <div className='col-md-6'>
//         <label className="form-label">Date :- </label>
//         <input className="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
//         <br/><br/>
//         <label htmlFor="inputDistrict" className="form-label">Time :- </label>
//         <input className="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
//         <br/><button onClick={generatepdf}>Download PDF</button>       
//       </div>
//         <div className="tableData">
//           <table>
//             <thead>
//             <tr>
//               <th>Registration no<br/>Registration Date<br/>Date of Birth</th>
//               <th>Sex<br/>Child Name</th>
//               <th>Father Name<br/>Mother Name</th>
//               <th>Address<br/>Birth Place</th>
//               <th>Delivery Type<br/>Total Live Child with this Child</th>
//             </tr>
//             </thead>
//             <tbody>
//             {data.map((val, key) => {
//               return (
//                 <tr key={key}>
//                   <td>{val.registrationNo}<br/>{val.registrationDate}<br/>{val.dateOfBirth}</td>
//                   <td>{val.sex}<br/>{val.childName}</td>
//                   <td>{val.fatherName}<br/>{val.motherName}</td>
//                   <td>{val.address}<br/>{val.birthPlace}</td>
//                   <td>{val.deliveryType}<br/>{val.totalLiveChildWithThisChild}</td>
//                 </tr>
//               )
//             })}
//             </tbody>
//           </table>
//         </div>

//         </>
//       );
//     }
      
//   export default BirthRegistrationReport;

import React, { useState , useEffect, useRef } from "react";
import { DataGrid} from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { Buffer } from 'buffer';
//import './dtatgrid.css'
import { Link } from "react-router-dom";
  
  const columns = [
    {
      field: "registrationNo",
      headerName: <strong>RegistrationNo</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.registrationNo}</Typography>
        </div>
      )
    },
    {
      field: "dateOfBirth",
      headerName: <strong>DateOfBirth</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.dateOfBirth}</Typography>
        </div>
      )
    },
    {
      field: "childName",
      headerName: <strong>ChildName</strong>,
      width: "180",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.childName}</Typography>
        </div>
      )
    },
    {
      field: "sex",
      headerName: <strong>Gender</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.sex}</Typography>
        </div>
      )
    },
    {
      field: "fatherName",
      headerName: <strong>FatherName</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.fatherName}</Typography>
        </div>
      )
    },
    {
        field: "motherName",
        headerName: <strong>MotherName</strong>,
        width: "180",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.motherName}</Typography>
            </div>
          )
    },
    {
        field: "birthPlace",
        headerName: <strong>BirthPlace</strong>,
        width: "180",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.birthPlace}</Typography>
            </div>
          )
    },
    {
      field: "deliveryType",
      headerName: <strong>DeliveryType</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.deliveryType}<br/></Typography>
        </div>
      )
    },
    {
        field: "totalLiveChildWithThisChild",
        headerName: <strong>TotalLiveChildWithThisChild</strong>,
        width: "250",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.totalLiveChildWithThisChild}</Typography>
            </div>
          )
    },
    
  ];

function BirthRegistrationReport() {
    const [pagesize, setPageSize] = useState(null)
    var date = new Date();

    const tableRef = useRef(null);

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
            link.download = "BirthReportFile.pdf";
            link.click();
            window.URL.revokeObjectURL(data);
        })
      };





    return(
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
        <br/><br/>
        <button className="btn btn-dark" onClick={generatepdf}> Download as PDF</button><br/><br/>
        <Link to="/Navbar"><button type="CANCEL" className="btn btn-dark" >CANCEL </button></Link>
      </div>
      
      <Box 
      container
      justify={'center'}
      sx={{
          '& .super-app-theme--header-a': {
          backgroundColor: '#9db7c8',
          fontSize: 20,
          fontFamily:'Roboto',
          borderBottom: 2,
        },
      }}
    >
        <div style={ { width: '86%'}}>
          <DataGrid 
          sx={{ m:6,
            boxShadow: 20,
            backgroundColor:'white',
            border: 3,
            borderColor: 'black',
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#7caad8",
            },
          }}
          initialState={{
            pagination: {
              pageSize: 5,
            },
          }}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          autoHeight
          columns={columns}
          rows={data}
          rowHeight={90}
          getRowId={(row) => row.registrationNo}
          // experimentalFeatures={{ columnGrouping: true }}
          // columnGroupingModel={columnGroupingModel}
          />
        </div>

        </Box>
      
        </>
    )


  }

  export default BirthRegistrationReport;

