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
  
  const columns = [
    {
      field: "year",
      headerName: "Year",
      width: "180",
      headerAlign: "center",
      align: "center",
     // sortable: false,
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.registrationNo}<br/></Typography>
          <Typography>{params.row.year}</Typography>
        </div>
      )
    },
    {
      field: "registrationDate",
      headerName: "RegistrationDate",
      width: "150",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.cityVillege}<br/></Typography>
          <Typography>{params.row.registrationDate}</Typography>
        </div>
      )
    },
    {
        field: "sex",
        headerName: "Sex",
        width: "180",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.deathBirthDate}<br/></Typography>
              <Typography>{params.row.sex}</Typography>
            </div>
          )
    },
    {
        field: "motherName",
        headerName: "MotherName",
        width: "200",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.fatherName}<br/></Typography>
              <Typography>{params.row.motherName}</Typography>
            </div>
          )
    },
    {
        field: "birthPlace",
        headerName: "BirthPlace",
        width: "190",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.address}<br/></Typography>
              <Typography>{params.row.birthPlace}</Typography>
            </div>
          )
    },
    
  ];

  const columnGroupingModel = [
    {
      groupId: 'RegistrationNo',
      children: [{field: 'year'}],
      headerAlign: "center",
      headerClassName: 'super-app-theme--header',
  
    },
    {
        groupId: 'City/Villege',
        children: [{field: 'registrationDate'}],
        headerAlign: "center",
        headerClassName: 'super-app-theme--header',
         
    },
    {
        groupId: 'DeadBirthDate',
        children: [{field: 'sex'}],
        headerAlign: "center",
        headerClassName: 'super-app-theme--header',
        
    },
    {
        groupId: 'FatherName',
        children: [{field: 'motherName'}],
        headerAlign: "center",
        headerClassName: 'super-app-theme--header',
        
    },
    {
        groupId: 'Address',
        children: [{field: 'birthPlace'}],
        headerAlign: "center",
        headerClassName: 'super-app-theme--header',
        
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
            link.download = "MyBirthFile.pdf";
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
        <button onClick={generatepdf}> Download as PDF</button>
      </div>
      
      <Box 
      container
      justify={'center'}
      sx={{
        '& .super-app-theme--header': {
          backgroundColor: '#93acbc',
          fontSize: 18,
          fontFamily:'Roboto',
        },
        '& .super-app-theme--header-a': {
          backgroundColor: '#9db7c8',
          fontSize: 18,
          fontFamily:'Roboto',
          borderBottom: 2,
        },
      }}
    >
        <div style={ { width: '77.5%'}}>
          <DataGrid 
          sx={{ m:6,
            boxShadow: 20,
            border: 3,
            borderColor: 'black',
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#7caad8",
            },
          }}
          initialState={{
            pagination: {
              pageSize: 10,
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
          experimentalFeatures={{ columnGrouping: true }}
          columnGroupingModel={columnGroupingModel}
          />
        </div>

        </Box>
      
        </>
    )


  }

  export default DeadBirthRegistrationReport;
