// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import './tablestyle.css';
// import { Buffer } from 'buffer';
// var date = new Date();

// function DeadBirthRegistrationReport(){

//     const [data, setData] = useState([])
//   const fetchData = () => { 
//     fetch(`https://localhost:7277/DeadBirthReg`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
//       `https://localhost:7277/DeadBirthReg/Generate`,{
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
//             link.download = "MyDeadBirthFile.pdf";
//             link.click();
//             window.URL.revokeObjectURL(data);
//         })
//       };
//     return (
//       <>
//       <div>
//       <h1 align="center">Dead Birth Registration Report</h1>
//       </div>
//       <div class='col-md-6'>
//         <label class="form-label">Date :- </label>
//         <input class="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
//         <br/><br/>
//         <label for="inputDistrict" class="form-label">Time :- </label>
//         <input class="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
//         <br/><button onClick={generatepdf}>Download PDF</button>   
//       </div>
//         <div className="tableData">
//           <table>
//             <thead>
//             <tr>
//               <th>Registration no<br/>Year</th>
//               <th>CityVillage<br/>Registration Date</th>
//               <th>Dead BirthDate<br/>Sex</th>
//               <th>Father Name<br/>Mother Name</th>
//               <th>Address<br/>Birth Place</th>
//             </tr>
//             </thead>
//             <tbody>
//             {data.map((val, key) => {
//               return (
//                 <tr key={key}>
//                   <td>{val.registrationNo}<br/>{val.year}</td>
//                   <td>{val.cityVillege}<br/>{val.registrationDate}</td>
//                   <td>{val.deathBirthDate}<br/>{val.sex}</td>
//                   <td>{val.fatherName}<br/>{val.motherName}</td>
//                   <td>{val.address}<br/>{val.birthPlace}</td>
//                 </tr>
//               )
//             })}
//             </tbody>
//           </table>
//         </div>

//         </>
//       );
//     }
      
//     export default DeadBirthRegistrationReport;


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
      width: "180",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.registretionNo}</Typography>
        </div>
      )
    },
    {
      field: "registrationDate",
      headerName: <strong>RegistrationDate</strong>,
      width: "180",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.registretionDate}</Typography>
        </div>
      )
    },
    {
      field: "year",
      headerName: <strong>Year</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.year}</Typography>
        </div>
      )
    },
    {
      field: "city",
      headerName: <strong>City/Villege</strong>,
      width: "180",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.cityVillege}</Typography>
        </div>
      )
    },
    {
      field: "deadBirthDate",
      headerName: <strong>DeadBirthdate</strong>,
      width: "180",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.deadBirthDate}</Typography>
        </div>
      )
    },
    {
        field: "sex",
        headerName: <strong>Gender</strong>,
        width: "180",
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
      width: "200",
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
        width: "200",
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
        field: "address",
        headerName: <strong>Address</strong>,
        width: "240",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.address}</Typography>
            </div>
          )
    },
    
  ];

function DeadBirthRegistrationReport() {
    const [pagesize, setPageSize] = useState(null)
    var date = new Date();

  const [data, setData] = useState([])
  const fetchData = () => { 
    fetch(`https://localhost:7277/DeadBirthReg`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
      `https://localhost:7277/DeadBirthReg/Generate`,{
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
            link.download = "DeadBirthReportFile.pdf";
            link.click();
            window.URL.revokeObjectURL(data);
        })
      };






    return(
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
          getRowId={(row) => row.registretionNo}
          // experimentalFeatures={{ columnGrouping: true }}
          // columnGroupingModel={columnGroupingModel}
          />
        </div>

        </Box>
      
        </>
    )


  }

  export default DeadBirthRegistrationReport;
