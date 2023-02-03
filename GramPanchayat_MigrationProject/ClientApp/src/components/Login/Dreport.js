// import React, { useState, useEffect, useRef } from 'react';
// import axios from "axios";
// import './tablestyle.css';
// import ReactToPrint from 'react-to-print';
// import {Base64} from 'js-base64';
// import { Buffer } from 'buffer';
// var date = new Date();


// function Dreport(){
//   const tableRef = useRef(null);

//   const [data, setData] = useState([])
//   const fetchData = () => { 
//     fetch(`https://localhost:7277/DeathRegistration`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
//       `https://localhost:7277/DeathRegistration/Generate`,{
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
//             link.download = "MyDeathFile.pdf";
//             link.click();
//             window.URL.revokeObjectURL(data);
//         })
//       };
//   // const generatepdf =()=>{
//   //   // fetch(`https://localhost:7277/DeathRegistration/Generate`,{
//   //   //   method: "GET",
//   //   //   headers: {
//   //   //    "Accept": "application/octet-stream",
//   //   //    "Authorization": "Bearer " +localStorage.getItem("Token"),
//   //   //   }}
//   //   //   // responseType: 'arraybuffer' //#1 remove this,
//   //   //   .then((res) => res.arraybuffer())
//   //   //   .then((data) => {
//   //   //     var base64Str = Buffer.from(data).toString('base64');
//   //   //     Base64.base64Decode(base64Str, "file.pdf");
//   //   //   })
//   //   // );
    
//   //   fetch(
//   //     `https://localhost:7277/DeathRegistration/Generate`,{
//   //     method: "GET",
//   //     headers: {
//   //      "Accept": "application/octet-stream",
//   //      "Authorization": "Bearer " +localStorage.getItem("Token")
//   //     },
//   //     },
//   // //   ).then(function(response) {
//   // //     return response.arrayBuffer()
//   // //   })
//   // //   .then(function(data) {
//   // //     // do stuff with `data`
//   // //     console.log(data, data instanceof ArrayBuffer);
//   // //     //var arrBuffer = bytes;
//   // //     var newBlob = new Blob([data], { type: "application/pdf" });
//   // //     // $("#pdfviewer").attr("src", URL.createObjectURL(new Blob([data], {
//   // //     //     type: "application/pdf"
//   // //     // })))
//   // //     data = window.URL.createObjectURL(newBlob);

//   // //           var link = document.createElement('a');
//   // //           document.body.appendChild(link);
//   // //           link.href = data;
//   // //           link.download = "Myfile.pdf";
//   // //           link.click();
//   // //           window.URL.revokeObjectURL(data);
//   // //   }, function(err) {
//   // //       console.log(err);
//   // //   });
//   // // };
//   // ).then((res) => res.arrayBuffer())
//   //       .then(data => {
//   //         console.log(data);
          
//   //           var base64Str = Buffer.from(data).toString('base64');

//   //           var binaryString = window.atob(base64Str);
//   //           var binaryLen = binaryString.length;
//   //           var bytes = new Uint8Array(binaryLen);
//   //           for (var i = 0; i < binaryLen; i++) {
//   //               var ascii = binaryString.charCodeAt(i);
//   //               bytes[i] = ascii;
//   //           }
//   //           var arrBuffer = bytes;

//   //           var newBlob = new Blob([arrBuffer], { type: "application/pdf" });

//   //           if (window.navigator && window.navigator.msSaveOrOpenBlob) {
//   //               window.navigator.msSaveOrOpenBlob(newBlob);
//   //               return;
//   //           }

//   //           data = window.URL.createObjectURL(newBlob);

//   //           var link = document.createElement('a');
//   //           document.body.appendChild(link);
//   //           link.href = data;
//   //           link.download = "Myfile.pdf";
//   //           link.click();
//   //           window.URL.revokeObjectURL(data);
//   //       })
//   //     };
//   //   fetch(
//   //     `https://localhost:7277/DeathRegistration/Generate`,{
//   //     method: "GET",
//   //     headers: {
//   //      "Accept": "application/octet-stream",
//   //      "Authorization": "Bearer " +localStorage.getItem("Token"),
//   //     },
//   //     },
//   // )
//   //     .then((res) => {
//   //         if (!res.ok) {
//   //             return res.status.toString()
//   //         }
//   //         return res.arrayBuffer()
//   //     })
//   //     .then(data => {
//   //       console.log(data);
//   //         var base64Str = Buffer.from(data).toString('base64');
//   //         Base64.base64Decode(base64Str, "file.pdf");
//   //     })
//   //     .catch(
//   //         (err) => {
//   //             return err.Message;
//   //         })
//   //};

//     // fetch("https://localhost:7277/DeathRegistration/Generate",{
//     //      headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
//     //   .then(async response => {
//     //     const filename = response.headers
//     //       .get("content-disposition")
//     //     const text = await response.text();
//     //     return { filename, text };
//     //   })
//     //   .then(response => response.blob())
//     //  .then((blob) => URL.createObjectURL(blob))
//     //   .catch((err) => console.error(err));
//       // .then(responseText => this.download(responseText))
//       // .catch(error => {
//       //   console.log("error", error.message);
//       // });


//     // fetch("https://localhost:7277/DeathRegistration/Generate",{
//     //   headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")},
//     //           'content-type': 'application/pdf'}
//     //           //'X-CSRF-TOKEN': getCookies("CSRF-TOKEN")},
//     // ).then(response => response.blob())
//     // .then((blob) => URL.createObjectURL(blob))
//     //  .catch((err) => console.error(err));

//   //};
  
//   // ).then((response) => response.blob())
//   // .then((blob) => URL.createObjectURL(blob))
//   // .catch((err) => console.error(err));
//     // .then((response) => response.json())
//     // .then((actualData) => { 
//     //   console.log(actualData); 
//     //   setData(actualData); 
//     //   console.log(data); 
//     // }) 
//     // .catch((err) => { 
//     //   console.log(err.message); 
//     // }); 
//     return (
//       <>
//       <div>
//       <h1 align="center">Death Registration Report</h1>
//       </div>
//       <div className='col-md-6'>
//         <label className="form-label">Date :- </label>
//         <input className="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
//         <br/>
//         <label htmlFor="inputDistrict" className="form-label">Time :- </label>
//         <input className="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
//         <br/>
//         <button onClick={generatepdf}> Download as PDF</button>
//        {/* <ReactToPrint 
//           content={()=> tableRef.current}
//           trigger={()=><button className='btn'>Print</button>}/>     */}
//       </div>
//         <div className="tableData">
//           <table ref={tableRef}>
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
      
//     export default Dreport;
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
        field: "registrationDate",
        headerName: <strong>RegistrationDate</strong>,
        width: "185",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.registrationDate}</Typography>
            </div>
          )
    },
    {
      field: "city",
      headerName: <strong>City/Villege</strong>,
      width: "190",
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
      field: "dateOfDeath",
      headerName: <strong>DateOfDeath</strong>,
      width: "200",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.dateOfDeath}</Typography>
        </div>
      )
    },
    {
      field: "nameOfDeathPerson",
      headerName: <strong>NameOfDeadPerson</strong>,
      width: "220",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.nameOfDeathPerson}</Typography>
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
      field: "age",
      headerName: <strong>AgeAtDeath</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.ageAtDeath}</Typography>
          </div>
        )
  },
    {
        field: "placeOfDeath",
        headerName: <strong>PlaceOfdeath</strong>,
        width: "190",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.placeOfDeath}</Typography>
            </div>
          )
    },
    
  ];

function Dreport() {
    const [pagesize, setPageSize] = useState(null)
    var date = new Date();


  const [data, setData] = useState([])
  const fetchData = () => { 
    fetch(`https://localhost:7277/DeathRegistration`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
      `https://localhost:7277/DeathRegistration/Generate`,{
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
            link.download = "DeathReportFile.pdf";
            link.click();
            window.URL.revokeObjectURL(data);
        })
      };






    return(
        <>
    <div className="header">
      <h1 align="center">Death Registration Report</h1>
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
      sx={{'& .super-app-theme--header-a': {
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

  export default Dreport;