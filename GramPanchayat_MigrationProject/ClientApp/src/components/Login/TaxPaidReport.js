// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import './tablestyle.css'
// import { Buffer } from 'buffer';

// var date = new Date();

// function TaxPaidReport(){

//   const [data, setData] = useState([])
//   const fetchData = () => { 
//     fetch(`https://localhost:7277/PropertyTax`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
//       `https://localhost:7277/PropertyTax/Generate`,{
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
//             link.download = "PropertyTaxFile.pdf";
//             link.click();
//             window.URL.revokeObjectURL(data);
//         })
//       };

//     return (
//       <>
//       <div>
//       <h1 align="center">Tax Paid Report</h1>
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
//               <th>Bill Date<br/>Bill No</th>
//               <th>Year<br/>Name</th>
//               <th>Address<br/>Property No</th>
//               <th>Home Tax<br/>Electricity Tax</th>
//               <th>Special Water Tax<br/>Educational Sess</th>
//               <th>Penalty Charge<br/>Total</th>
//             </tr>
//             </thead>
//             <tbody>
//             {data.map((val, key) => {
//               return (
//                 <tr key={key}>
//                   <td>{val.billDate}<br/>{val.billNo}</td>
//                   <td>{val.year}<br/>{val.name}</td>
//                   <td>{val.address}<br/>{val.propertyNo}</td>
//                   <td>{val.homeTax}<br/>{val.electricityTax}</td>
//                   <td>{val.specialWaterTax}<br/>{val.educationalSess}</td>
//                   <td>{val.panaltyCharge}<br/>{val.total}</td>
//                 </tr>
//               )
//             })}
//             </tbody>
//           </table>
//         </div>

//         </>
//       );
//     }
      
// export default TaxPaidReport;


import React, { useState , useEffect, useRef } from "react";
import { DataGrid} from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { Buffer } from 'buffer';
//import './dtatgrid.css'
  
  const columns = [
    {
      field: "billNo",
      headerName: "BillNo",
      width: "160",
      headerAlign: "center",
      align: "center",
     // sortable: false,
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.billDate}<br/></Typography>
          <Typography>{params.row.billNo}</Typography>
        </div>
      )
    },
    {
      field: "name",
      headerName: "Name",
      width: "170",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.year}<br/></Typography>
          <Typography>{params.row.name}</Typography>
        </div>
      )
    },
    {
        field: "propertyNo",
        headerName: "PropertyNo",
        width: "180",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.address}<br/></Typography>
              <Typography>{params.row.propertyNo}</Typography>
            </div>
          )
    },
    {
        field: "electricityTax",
        headerName: "ElectricityTax",
        width: "180",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.homeTax}<br/></Typography>
              <Typography>{params.row.electricityTax}</Typography>
            </div>
          )
    },
    {
        field: "educationalSess",
        headerName: "EducationalSess",
        width: "180",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.specialWaterTax}<br/></Typography>
              <Typography>{params.row.educationalSess}</Typography>
            </div>
          )
    },
    {
        field: "total",
        headerName: "Total",
        width: "180",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.panaltyCharge}<br/></Typography>
              <Typography>{params.row.total}</Typography>
            </div>
          )
    },
    
  ];

  const columnGroupingModel = [
    {
      groupId: 'BillDate',
      children: [{field: 'billNo'}],
      headerAlign: "center",
      headerClassName: 'super-app-theme--header',
  
    },
    {
        groupId: 'Year',
        children: [{field: 'name'}],
        headerAlign: "center",
        headerClassName: 'super-app-theme--header', 
        
    },
    {
        groupId: 'Address',
        children: [{field: 'propertyNo'}],
        headerAlign: "center",
        headerClassName: 'super-app-theme--header',
        
    },
    {
        groupId: 'HomeTax',
        children: [{field: 'electricityTax'}],
        headerAlign: "center",
        headerClassName: 'super-app-theme--header',
        
    },
    {
        groupId: 'SpecialWaterTax',
        children: [{field: 'educationalSess'}],
        headerAlign: "center",
        headerClassName: 'super-app-theme--header',
        
    },
    {
        groupId: 'PenaltyCharge',
        children: [{field: 'total'}],
        headerAlign: "center",
        headerClassName: 'super-app-theme--header',
        
    },
]


  
 function TaxPaidReport() {
    const [pagesize, setPageSize] = useState(null)
    var date = new Date();


  const [data, setData] = useState([])
  const fetchData = () => { 
    fetch(`https://localhost:7277/PropertyTax`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
      `https://localhost:7277/PropertyTax/Generate`,{
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
            link.download = "PropertyTaxFile.pdf";
            link.click();
            window.URL.revokeObjectURL(data);
        })
      };





    return(
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
        <br/><br/>
        <button onClick={generatepdf}> Download as PDF</button>
      </div>
      
      {/* <table ref={tableRef}></table> */}
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
        <div style={ { width: '89%'}}>
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
          getRowId={(row) => row.billNo}
          experimentalFeatures={{ columnGrouping: true }}
          columnGroupingModel={columnGroupingModel}
          />
        </div>

        </Box>
      
        </>
    )


  }

  export default TaxPaidReport;
