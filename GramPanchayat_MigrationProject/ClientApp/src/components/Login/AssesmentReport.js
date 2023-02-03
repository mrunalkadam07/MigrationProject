import React, { useState , useEffect, useRef } from "react";
import { DataGrid} from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { Buffer } from 'buffer';
//import './dtatgrid.css';
import { Link } from "react-router-dom"; 
  
  const columns = [
    {
      field: "formNo",
      headerName: <strong>FormNo</strong>,
      width: "150",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.formNo}<br/></Typography>
        </div>
      )
    },
    {
      field: "date",
      headerName: <strong>Date</strong>,
      width: "190",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.date}</Typography>
        </div>
      )
    },
    {
      field: "wardNo",
      headerName: <strong>WardNo</strong>,
      width: "150",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.wardNo}<br/></Typography>
        </div>
      )
    },
    {
      field: "oldAssassmentNo",
      headerName: <strong>OldAssassmentNo</strong>,
      width: "180",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.oldAssasmentNo}</Typography>
        </div>
      )
    },
    {
      field: "ownersName",
      headerName: <strong>OwnersName</strong>,
      width: "220",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.ownersName}<br/></Typography>
        </div>
      )
    },
    {
        field: "holdersName",
        headerName: <strong>HoldersName</strong>,
        width: "220",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.holdersName}</Typography>
            </div>
          )
    },
    {
      field: "propertyAddress",
      headerName: <strong>PropertyAddress</strong>,
      width: "220",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.propertyAddress}<br/></Typography>
          </div>
        )
  },
    {
        field: "useOfPropertyType",
        headerName: <strong>UseOfPropertyType</strong>,
        width: "220",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.useOfPropertyType}</Typography>
            </div>
          )
    },
    {
      field: "assassedProperty",
      headerName: <strong>AssassedProperty</strong>,
      width: "190",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.assasedPropertyTax}<br/></Typography>
          </div>
        )
  },
    {
        field: "wardTotal",
        headerName: <strong>WardTotal</strong>,
        width: "190",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.wardTotal}</Typography>
            </div>
          )
    },
    
  ];


 function AssasmentReport() {
    const [pagesize, setPageSize] = useState(null)
    var date = new Date();

    const tableRef = useRef(null);

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
              link.download = "AssessmentReportFile.pdf";
              link.click();
              window.URL.revokeObjectURL(data);
          })
        };



    return(
        <>
    <div className="header">
      <h1 align="center">Assessment Report</h1>
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
      
      {/* <table ref={tableRef}></table> */}
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
          getRowId={(row) => row.formNo}
          // experimentalFeatures={{ columnGrouping: true }}
          // columnGroupingModel={columnGroupingModel}
          />
        </div>

        </Box>
      
        </>
    )


  }

  export default AssasmentReport;


// import React, { useState , useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useTheme, styled} from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));


// function TablePaginationActions(props) {

//     // const [data, setData] = useState([])
//     // const fetchData = () => { 
//     //   fetch(`https://localhost:7277/Assasmenttax`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
//     //   .then((response) => response.json())
//     //   .then((actualData) => { 
//     //     console.log(actualData); 
//     //     setData(actualData); 
//     //     console.log(data); 
//     //   }) 
//     //   .catch((err) => { 
//     //     console.log(err.message); 
//     //   }); 
//     // };
  
//     // useEffect(() => {
//     //   fetchData();
//     // }, []);


//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };


// export default function AssessmentReport() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [data, setData] = useState([])
//     const fetchData = () => { 
//       fetch(`https://localhost:7277/Assasmenttax`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
//       .then((response) => response.json())
//       .then((actualData) => { 
//         console.log(actualData); 
//         setData(actualData); 
//         console.log(data); 
//       }) 
//       .catch((err) => { 
//         console.log(err.message); 
//       }); 
//     };
  
//     useEffect(() => {
//       fetchData();
//     }, []);


//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
//       <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell> */}
//             {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {(rowsPerPage > 0
//             ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : data
//           ).map((row) => (
//             <TableRow key={row.formNo}>
//               <TableCell component="th" scope="row">
//                 {row.taluko}
//               </TableCell>
//               <TableCell style={{ width: 160 }} align="right">
//                 {row.nameOfDeathPerson}
//               </TableCell>
//               <TableCell style={{ width: 160 }} align="right">
//                 {row.registrationNo}
//               </TableCell>
//             </TableRow>
//           ))}

//           {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={3}
//               count={data.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               SelectProps={{
//                 inputProps: {
//                   'aria-label': 'rows per page',
//                 },
//                 native: true,
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//             />
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }


// // import React, { useState, useEffect } from 'react';
// // import axios from "axios";
// // import './tablestyle.css';
// // import { Buffer } from 'buffer';

// // // const data = [
// // //     { registration_no: 1, name: "Anom", city: "abc", age: 19, sex: "Male", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
// // //     { registration_no: 2, name: "Megha", city: "abc", age: 19, sex: "Female", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
// // //     { registration_no: 3, name: "Subham", city: "abc", age: 25, sex: "Male", year:2012, taluka:"taluka1", registrationDate:"12-01-2012", deathDate:"08-01-2012", place:"place1"},
// // //   ]
// // var date = new Date();

// // function AssesmentReport(){

// //   const [data, setData] = useState([])
// //   const fetchData = () => { 
// //     fetch(`https://localhost:7277/Assasmenttax`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
// //     .then((response) => response.json())
// //     .then((actualData) => { 
// //       console.log(actualData); 
// //       setData(actualData); 
// //       console.log(data); 
// //     }) 
// //     .catch((err) => { 
// //       console.log(err.message); 
// //     }); 
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const generatepdf =()=>{
    
// //     fetch(
// //       `https://localhost:7277/Assasmenttax/Generate`,{
// //       method: "GET",
// //       headers: {
// //        "Accept": "application/octet-stream",
// //        "Authorization": "Bearer " +localStorage.getItem("Token")
// //       },
// //       },
// //   ).then((res) => res.arrayBuffer())
// //         .then(data => {
// //           console.log(data);
          
// //             var base64Str = Buffer.from(data).toString('base64');

// //             var binaryString = window.atob(base64Str);
// //             var binaryLen = binaryString.length;
// //             var bytes = new Uint8Array(binaryLen);
// //             for (var i = 0; i < binaryLen; i++) {
// //                 var ascii = binaryString.charCodeAt(i);
// //                 bytes[i] = ascii;
// //             }
// //             var arrBuffer = bytes;

// //             var newBlob = new Blob([arrBuffer], { type: "application/pdf" });

// //             if (window.navigator && window.navigator.msSaveOrOpenBlob) {
// //                 window.navigator.msSaveOrOpenBlob(newBlob);
// //                 return;
// //             }

// //             data = window.URL.createObjectURL(newBlob);

// //             var link = document.createElement('a');
// //             document.body.appendChild(link);
// //             link.href = data;
// //             link.download = "MyAssessmentFile.pdf";
// //             link.click();
// //             window.URL.revokeObjectURL(data);
// //         })
// //       };
// //     return (
// //       <>
// //       <div>
// //       <h1 align="center">Assesment Report</h1>
// //       </div>
// //       <div class='col-md-6'>
// //         <label class="form-label">Date :- </label>
// //         <input class="form-control" value={date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()} readOnly={true}/>     
// //         <br/><br/>
// //         <label for="inputDistrict" class="form-label">Time :- </label>
// //         <input class="form-control" value = {date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()} readOnly={true} />
// //         <br/><button onClick={generatepdf}>Download PDF</button>   
// //       </div>
// //         <div className="tableData">
// //           <table>
// //             <thead>
// //             <tr>
// //               <th>Form No<br/>Date</th>
// //               <th>Ward No<br/>Old Assesment No</th>
// //               <th>Owners Name<br/>Holders Name</th>
// //               <th>Property Address<br/>Use of Property Type</th>
// //               <th>Assesed Property Tax<br/>Ward Total</th>
// //             </tr>
// //             </thead>
// //             <tbody>
// //             {data.map((val, key) => {
// //               return (
// //                 <tr key={key}>
// //                   <td>{val.formNo}<br/>{val.date}</td>
// //                   <td>{val.wardNo}<br/>{val.oldAssasmentNo}</td>
// //                   <td>{val.ownersName}<br/>{val.holdersName}</td>
// //                   <td>{val.propertyAddress}<br/>{val.useOfPropertyType}</td>
// //                   <td>{val.assasedPropertyTax}<br/>{val.wardTotal}</td>
// //                 </tr>
// //               )
// //             })}
// //             </tbody>
// //           </table>
// //         </div>

// //         </>
// //       );
// //     }
      
// //     export default AssesmentReport;
