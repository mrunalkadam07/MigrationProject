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
import { DataGrid} from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';

const columns = [
  {
    field: "registrationNo",
    headerName: <strong>RegistrationNo</strong>,
    width: "150",
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
    field: "marriageDate",
    headerName: <strong>MarriageDate</strong>,
    width: "160",
    headerAlign: "center",
    align: "center",
    headerClassName: 'super-app-theme--header-a',
    renderCell: (params) => (
      <div>
        <Typography>{params.row.merrageDate}</Typography>
      </div>
    )
  },
  {
    field: "marriagePlace",
    headerName: <strong>MarriagePlace</strong>,
    width: "200",
    headerAlign: "center",
    align: "center",
    headerClassName: 'super-app-theme--header-a',
    renderCell: (params) => (
      <div>
        <Typography>{params.row.merragePlace}</Typography>
      </div>
    )
  },
  {
    field: "groomName",
    headerName: <strong>GroomName</strong>,
    width: "240",
    headerAlign: "center",
    align: "center",
    headerClassName: 'super-app-theme--header-a',
    renderCell: (params) => (
      <div>
        <Typography>{params.row.fullNameOFGroom}</Typography>
      </div>
    )
  },
  {
      field: "groomAge",
      headerName: <strong>GroomAge</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.groomAge}</Typography>
          </div>
        )
  },
  {
    field: "groomReligion",
    headerName: <strong>GroomReligion</strong>,
    width: "150",
    headerAlign: "center",
    align: "center",
    headerClassName: 'super-app-theme--header-a',
    renderCell: (params) => (
        <div>
          <Typography>{params.row.groomReligion}</Typography>
        </div>
      )
},
  {
      field: "groomAddress",
      headerName: <strong>GroomAddress</strong>,
      width: "220",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.groomAddress}</Typography>
          </div>
        )
  },
  {
    field: "brideName",
    headerName: <strong>BrideName</strong>,
    width: "240",
    headerAlign: "center",
    align: "center",
    headerClassName: 'super-app-theme--header-a',
    renderCell: (params) => (
      <div>
        <Typography>{params.row.fullNameOFBride}</Typography>
      </div>
    )
  },
  {
      field: "brideAge",
      headerName: <strong>BrideAge</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.brideAge}</Typography>
          </div>
        )
  },
  {
    field: "brideReligion",
    headerName: <strong>BrideReligion</strong>,
    width: "150",
    headerAlign: "center",
    align: "center",
    headerClassName: 'super-app-theme--header-a',
    renderCell: (params) => (
        <div>
          <Typography>{params.row.brideReligion}</Typography>
        </div>
      )
},
  {
      field: "brideAddress",
      headerName: <strong>BrideAddress</strong>,
      width: "220",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.brideAddress}</Typography>
          </div>
        )
  },
  {
    field: "nameOfBrahman",
    headerName: <strong>NameOfBrahman</strong>,
    width: "180",
    headerAlign: "center",
    align: "center",
    headerClassName: 'super-app-theme--header-a',
    renderCell: (params) => (
        <div>
          <Typography>{params.row.nameOfBrahMan}</Typography>
        </div>
      )
},
  {
      field: "firstWitness",
      headerName: <strong>FirstWitness</strong>,
      width: "190",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.firstFullNameOfWitness}</Typography>
          </div>
        )
  },
  {
    field: "fWitnessAdd",
    headerName: <strong>FirstWitnessAddress</strong>,
    width: "240",
    headerAlign: "center",
    align: "center",
    headerClassName: 'super-app-theme--header-a',
    renderCell: (params) => (
        <div>
          <Typography>{params.row.firstWitnessAddress}</Typography>
        </div>
      )
},
  {
      field: "secondWitness",
      headerName: <strong>SecondWitness</strong>,
      width: "190",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.secondFullNameOfWitness}</Typography>
          </div>
        )
  },
  {
    field: "sWitnessAdd",
    headerName: <strong>SecondWitnessAddress</strong>,
    width: "240",
    headerAlign: "center",
    align: "center",
    headerClassName: 'super-app-theme--header-a',
    renderCell: (params) => (
        <div>
          <Typography>{params.row.secondWitnessAddress}</Typography>
        </div>
      )
},
  
];



function MarriageReport() {
    const [pagesize, setPageSize] = useState(null)
    var date = new Date();

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


  };

  export default MarriageReport;



