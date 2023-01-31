import React, { useState, useEffect } from 'react';
import axios from "axios";
import './tablestyle.css';
import { Buffer } from 'buffer';

// const data = [
//     { registration_no: 1, name: "Anom", city: "abc", age: 19, sex: "Male", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//     { registration_no: 2, name: "Megha", city: "abc", age: 19, sex: "Female", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//     { registration_no: 3, name: "Subham", city: "abc", age: 25, sex: "Male", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
//   ]
var date = new Date();

function AssesmentReport(){

  const [data, setData] = useState([])
  const fetchData = () => { 
    fetch(`https://localhost:7277/Assasmenttax`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
      `https://localhost:7277/Assasmenttax/Generate`,{
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
            link.download = "MyAssessmentFile.pdf";
            link.click();
            window.URL.revokeObjectURL(data);
        })
      };
    return (
      <>
      <div>
      <h1 align="center">Assesment Report</h1>
      </div>
      <div class='col-md-6'>
        <label class="form-label">Date :- </label>
        <input class="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
        <br/><br/>
        <label for="inputDistrict" class="form-label">Time :- </label>
        <input class="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
        <br/><button onClick={generatepdf}>Download PDF</button>   
      </div>
        <div className="tableData">
          <table>
            <thead>
            <tr>
              <th>Form No<br/>Date</th>
              <th>Ward No<br/>Old Assesment No</th>
              <th>Owners Name<br/>Holders Name</th>
              <th>Property Address<br/>Use of Property Type</th>
              <th>Assesed Property Tax<br/>Ward Total</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.formNo}<br/>{val.date}</td>
                  <td>{val.wardNo}<br/>{val.oldAssasmentNo}</td>
                  <td>{val.ownersName}<br/>{val.holdersName}</td>
                  <td>{val.propertyAddress}<br/>{val.useOfPropertyType}</td>
                  <td>{val.assasedPropertyTax}<br/>{val.wardTotal}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>

        </>
      );
    }
      
    export default AssesmentReport;





// import { useState } from "react";
// import React, {useEffect, useRef } from "react";
// import { DataGrid} from '@mui/x-data-grid';
// import { Typography } from "@mui/material";
// import Box from '@mui/material/Box';
// import { Buffer } from 'buffer';
// //import './dtatgrid.css'
  
//   const columns = [
//     {
//       field: "date",
//       headerName: "Date",
//       width: "180",
//       headerAlign: "center",
//       align: "center",
//      // sortable: false,
//       headerClassName: 'super-app-theme--header-a',
//       renderCell: (params) => (
//         <div>
//           <Typography>{params.row.formNo}<br/></Typography>
//           <Typography>{params.row.date}</Typography>
//         </div>
//       )
//     },
//     {
//       field: "oldAssassmentNo",
//       headerName: "OldAssassmentNo",
//       width: "150",
//       headerAlign: "center",
//       align: "center",
//       headerClassName: 'super-app-theme--header-a',
//       renderCell: (params) => (
//         <div>
//           <Typography>{params.row.wardNo}<br/></Typography>
//           <Typography>{params.row.oldAssassmentNo}</Typography>
//         </div>
//       )
//     },
//     {
//         field: "holdersName",
//         headerName: "HoldersName",
//         width: "180",
//         headerAlign: "center",
//         align: "center",
//         headerClassName: 'super-app-theme--header-a',
//         renderCell: (params) => (
//             <div>
//               <Typography>{params.row.ownersName}<br/></Typography>
//               <Typography>{params.row.holdersName}</Typography>
//             </div>
//           )
//     },
//     {
//         field: "useOfPropertyType",
//         headerName: "UseOfPropertyType",
//         width: "150",
//         headerAlign: "center",
//         align: "center",
//         headerClassName: 'super-app-theme--header-a',
//         renderCell: (params) => (
//             <div>
//               <Typography>{params.row.propertyAdress}<br/></Typography>
//               <Typography>{params.row.useOfPropertyType}</Typography>
//             </div>
//           )
//     },
//     {
//         field: "wardTotal",
//         headerName: "WardTotal",
//         width: "180",
//         headerAlign: "center",
//         align: "center",
//         headerClassName: 'super-app-theme--header-a',
//         renderCell: (params) => (
//             <div>
//               <Typography>{params.row.assassedPropertyTax}<br/></Typography>
//               <Typography>{params.row.wardTotal}</Typography>
//             </div>
//           )
//     },
    
//   ];

//   const columnGroupingModel = [
//     {
//       groupId: 'FormNo',
//       children: [{field: 'date'}],
//       headerAlign: "center",
//       headerClassName: 'super-app-theme--header',
  
//     },
//     {
//         groupId: 'WardNo',
//         children: [{field: 'oldAssassmentNo'}],
//         headerAlign: "center",
//         headerClassName: 'super-app-theme--header',
        
        
//     },
//     {
//         groupId: 'OwnersName',
//         children: [{field: 'holdersName'}],
//         headerAlign: "center",
//         headerClassName: 'super-app-theme--header',
        
//     },
//     {
//         groupId: 'PropertyAddress',
//         children: [{field: 'useOfPropertyType'}],
//         headerAlign: "center",
//         headerClassName: 'super-app-theme--header',
        
//     },
//     {
//         groupId: 'AssassedProperty',
//         children: [{field: 'wardTotal'}],
//         headerAlign: "center",
//         headerClassName: 'super-app-theme--header',
        
//     },
// ];
  
//  function AssasmentReport(){
//   const [pagesize,setPageSize] = useState();
//   var date =new Date();

//   const [data, setData] = useState([])
//   const fetchData = () => { 
//     fetch(`https://localhost:7277/Assasmenttax`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
//       `https://localhost:7277/Assasmenttax/Generate`,{
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
//             link.download = "MyAssessmentFile.pdf";
//             link.click();
//             window.URL.revokeObjectURL(data);
//         })
//       };


//     return(
//         <>
//     <div className="header">
//       <h1 align="center">Assasment Report</h1>
//       </div>
//       <div class='col-md-6'>
//         <label class="form-label">Date :- </label>
//         <input class="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
//         <br/><br/>
//         <label for="inputDistrict" class="form-label">Time :- </label>
//         <input class="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
//       </div>
//       <button onClick={generatepdf}> Download as PDF</button>
//       {/* <table ref={tableRef}></table> */}
//       <Box 
//       container
//       justify={'center'}
//       sx={{
//         '& .super-app-theme--header': {
//           backgroundColor: '#93acbc',
//           fontSize: 18,
//           fontFamily:'Roboto',
//         },
//         '& .super-app-theme--header-a': {
//           backgroundColor: '#9db7c8',
//           fontSize: 18,
//           fontFamily:'Roboto',
//           borderBottom: 2,
//         },
//       }}
//     >
//         <div style={ { width: '77.5%'}}>
//           <DataGrid 
//           sx={{ m:6,
//             boxShadow: 20,
//             border: 3,
//             borderColor: 'black',
//             "& .MuiDataGrid-row:hover": {
//               backgroundColor: "#7caad8",
//             },
//           }}
//           initialState={{
//             pagination: {
//               pageSize: 10,
//             },
//           }}
//           onPageSizeChange={(newPage) => setPageSize(newPage)}
//           rowsPerPageOptions={[5, 10, 20]}
//           pagination
//           autoHeight
//           columns={columns}
//           rows={data}
//           rowHeight={90}
//           getRowId={(row) => row.formNo}
//           experimentalFeatures={{ columnGrouping: true }}
//           columnGroupingModel={columnGroupingModel}
//           />
//         </div>

//         </Box>
      
//         </>
//     )


//   }

//   export default AssasmentReport;