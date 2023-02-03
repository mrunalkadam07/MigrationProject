import React, {useState, useEffect, useNavigate} from "react";
import PropertyTaxServices from "../../Services/PropertyTaxService";
import "./Assessment.list.css";
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import "./tablestyle.css";
import {Link} from "react-router-dom";
import { DataGrid} from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

const services = new DeathRegistrationService();

export const PropertyTaxPaidForm = (props) => {
    // const navigate = useNavigate();
    // const logout = () =>{
    //     localStorage.setItem("Token","");
    //     navigate("/login");
    // }
    const [pagesize, setPageSize] = useState("")
    const [billNo, setBillNo] = useState("");
    const [billDate, setBillDate] = useState("");
    const [year, setYear] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [propertyNo, setPropertyNo] = useState("");
    const [homeTax, setHomeTax] = useState("");
    const [electricityTax, setElectricityTax] = useState("");
    const [specialWaterTax, setSpecialWaterTax] = useState("");
    const [educationalsess, setEducationalsess] = useState("");
    const [penaltyCharge, setPenaltyCharge] = useState("");
    const [total, setTotal] = useState("");

    const addPropertyTax = (e) =>{

       
        e.preventDefault();
        if(billDate === "" && year==="" && name==="" && address==="" &&
         propertyNo==="" && homeTax==="" && electricityTax==="" && specialWaterTax==="" && 
         educationalsess==="" && penaltyCharge==="" && total==="")
        {
            alert("Enter all the required input Fields")
            console.log("Input fields are Empty");
            return
        }
        console.log("Data : ",billDate,year,name,address,propertyNo,homeTax,electricityTax,specialWaterTax,educationalsess,penaltyCharge,total);
        const data = {
            'billdate' : billDate,
            'year' : year,
            'name' : name,
            'address' : address,
            'propertyNo' : propertyNo,
            'homeTax' : homeTax,
            'electrycityTax' : electricityTax,
            'specialWaterTax' : specialWaterTax,
            'educationalSess' : educationalsess,
            'panaltyCharge' : penaltyCharge,
            'total' : total
        }
        services.PropertyTaxPaid(data).then((data)=>{
            console.log(data)
            refreshPage();
        }).catch((error)=>{
            console.log(error)
        })
    }
    // const modifyPropertyTax = (e) =>{
    //     e.preventDefault();
    //     if(billNo === "")
    //     {
    //         alert("Enter the bill No to update the details.")
    //         console.log("Input fields are Empty");
    //         return
    //     }
    //     console.log("Data : ",billDate,year,name,address,propertyNo,homeTax,electricityTax,specialWaterTax,educationalsess,penaltyCharge,total);
    //     const data = {
    //         billdate : billDate,
    //         year : year,
    //         name : name,
    //         address : address,
    //         propertyNo : propertyNo,
    //         homeTax : homeTax,
    //         electrycityTax : electricityTax,
    //         specialWaterTax : specialWaterTax,
    //         educationalSess : educationalsess,
    //         panaltyCharge : penaltyCharge,
    //         total : total
    //     }
    //     services.PropertyTaxPaid(data).then((data)=>{
    //         console.log(data)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }

    const modifyData = (e) => {
        e.preventDefault();
        let url = "https://localhost:7277/PropertyTax/" + billNo;
        console.log(url);
        const data = {
            'billNo' : billNo,
            'billdate' : billDate,
            'year' : year,
            'name' : name,
            'address' : address,
            'propertyNo' : propertyNo,
            'homeTax' : homeTax,
            'electrycityTax' : electricityTax,
            'specialWaterTax' : specialWaterTax,
            'educationalSess' : educationalsess,
            'panaltyCharge' : penaltyCharge,
            'total' : total
        }
        fetch(url , {
            method : 'PUT',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorization':'Bearer'+" "+localStorage.getItem("Token")
            },
            body: JSON.stringify(data)
            
            
        }).then(response => response.json())
        .then((result) => { 
            console.log(result); 
             alert("Data Updated SuccessFully!")
             refreshPage();
           // console.log(data); 
          }) 
          .catch((err) => { 
            console.log(err.message); 
          }); 

    }

    function deleteData(id){
       // e.preventDefault();
        let url = "https://localhost:7277/PropertyTax/" + billNo;
        console.log(url);
        fetch(url , {
            method : 'DELETE',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorization':'Bearer'+" "+localStorage.getItem("Token")
            }
        })
        .then((result) => { 
            console.log(result); 
            alert("Data Deleted Successfully!!"); 
            refreshPage();
           // console.log(data); 
          }) 
          .catch((err) => { 
            console.log(err.message); 
          }); 

    }
    
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

  function prePopulate(id){
        setBillNo(data[id-1].billNo)
        setBillDate(data[id-1].billDate)
        setYear(data[id-1].year)
        setName(data[id-1].name)
        setAddress(data[id-1].address)
        setPropertyNo(data[id-1].propertyNo)
        setHomeTax(data[id-1].homeTax)
        setElectricityTax(data[id-1].electricityTax)
        setSpecialWaterTax(data[id-1].specialWaterTax)
        setEducationalsess(data[id-1].educationalSess)
        setPenaltyCharge(data[id-1].penaltyCharge)
        setTotal(data[id-1].total)
  }

  useEffect(() => {
    fetchData();
  }, []);

  function refreshPage() {

    window.location.reload(false);

  }
  const columns = [
    {
      field: "billNo",
      headerName: <strong>BillNo</strong>,
      width: "150",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.billNo}</Typography>
        </div>
      )
    },
    {
      field: "billDate",
      headerName: <strong>BillDate</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.billdate}</Typography>
        </div>
      )
    },
    {
      field: "name",
      headerName: <strong>Name</strong>,
      width: "200",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.name}</Typography>
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
    {
        field: "propertyNo",
        headerName: <strong>PropertyNo</strong>,
        width: "160",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.propertyNo}</Typography>
            </div>
          )
    },
    {
      field: "homeTax",
      headerName: <strong>HomeTax</strong>,
      width: "150",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.homeTax}</Typography>
          </div>
        )
  },
    {
        field: "electricityTax",
        headerName: <strong>ElectricityTax</strong>,
        width: "160",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.electrycityTax}</Typography>
            </div>
          )
    },
    {
      field: "specialWaterTax",
      headerName: <strong>SpecialWaterTax</strong>,
      width: "180",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.specialWaterTax}</Typography>
          </div>
        )
  },
    {
        field: "educationalSess",
        headerName: <strong>EducationalSess</strong>,
        width: "180",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.educationalSess}</Typography>
            </div>
          )
    },
    {
      field: "penalty",
      headerName: <strong>PenaltyCharge</strong>,
      width: "170",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
          <div>
            <Typography>{params.row.panaltyCharge}</Typography>
          </div>
        )
  },
    {
        field: "total",
        headerName: <strong>Total</strong>,
        width: "170",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.total}</Typography>
            </div>
          )
    },
    {
        field: "actions",
        headerName: <strong>Actions</strong>,
        width: "190",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <button className="btn btn-success"onClick={()=>prePopulate(params.row.billNo)}>UPDATE</button>
              <br/><br/>
              <button type="DELETE" className="btn btn-danger"onClick={()=>deleteData(params.row.billNo)}>DELETE </button>
            </div>
          )
    },
    
  ];
  

    return(
        <>
           <h1 align="center">Property Tax Paid Form</h1>
            <form className="form-property">
                <div className="leftdiv">
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputBillDate" className="form-label">Bill Date <span class="required">*</span>  </label>
                        <input value = {billDate} onChange={(e) => setBillDate(e.target.value)} type="Date" className="newStyle" id="inputBillDate" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputYear" className="form-label">Year<span class="required">*</span>   </label>
                        <input value = {year} onChange={(e) => setYear(e.target.value)} type="number" placeholder="yyyy" min="1947" max="2023" className="newStyle" id="inputYear"/>
                    </div>
                </div>
                <div className="div1">
                     <div className="mb-3">
                        <label htmlFor="inputBillNo" className="form-label">Bill No.<span class="required">*</span>   </label>
                        <input value = {billNo} onChange={(e) => setBillNo(e.target.value)} type="text" className="newStyle" id="inputBillNo"/>
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="inputPropertNo" className="form-label">Property No.<span class="required">*</span>   </label>
                        <input value = {propertyNo} onChange={(e) => setPropertyNo(e.target.value)}  type="text" className="newStyle" id="inputPropertNo"/>
                    </div>
                </div>
                    
                
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputAddress" className="form-label">Address<span class="required">*</span>  </label>
                        <input value = {address} onChange={(e) => setAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label"><br/>Name <span class="required">*</span>  </label>
                        <input value = {name} onChange={(e) => setName(e.target.value)} type="text" className="newStyle" id="inputName"/>
                    </div>
                </div>
                <div className="div1">
                    
                    <div className="mb-3">
                        <label htmlFor="inputElectricityTax" className="form-label">Electricity Tax <span class="required">*</span>  </label>
                        {/* <select id="inputElectricityTax" className="form-selected">
                        <option defaultValue={"Select"}>Choose...</option>
                        </select> */}
                        <input value = {electricityTax} onChange={(e) => setElectricityTax(e.target.value)} type="text" className="newStyle" id="inputElectricityTax"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputSpecialWaterTax" className="form-label">Special Water Tax <span class="required">*</span>  </label>
                        {/* <select id="inputSpecialWaterTax" className="form-selected">
                        <option defaultValue={"Select"}>Choose...</option>
                        </select> */}
                        <input value = {specialWaterTax} onChange={(e) => setSpecialWaterTax(e.target.value)}type="text" className="newStyle" id="inputSpecialWaterTax"/>
                    </div>
                </div>
                <div className="div1">
                    
                    <div className="mb-3">
                        <label htmlFor="inputEducationalSess" className="form-label">Educational Sess <span class="required">*</span>  </label>
                        {/* <select id="inputEducationalSess" className="form-selected">
                        <option defaultValue={"Select"}>Choose...</option>
                        </select> */}
                        <input value = {educationalsess} onChange={(e) => setEducationalsess(e.target.value)} type="text" className="newStyle" id="inputEducationalSess"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPenaltyCharge" className="form-label">Penalty Charge <span class="required">*</span>  </label>
                        {/* <select id="inputPenaltyCharge" className="form-selected">
                        <option defaultValue={"Select"}>Choose...</option>
                        </select> */}
                        <input value = {penaltyCharge} onChange={(e) => setPenaltyCharge(e.target.value)} type="text" className="newStyle" id="inputPenaltyCharge"/>
                    </div> 
                </div>
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputTotal" className="form-label">Total <span class="required">*</span>  </label>
                        <input value = {total} onChange={(e) => setTotal(e.target.value)} type="text" className="newStyle" id="inputTotal"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputHomeTax" className="form-label">Home Tax <span class="required">*</span>  </label>
                        {/* <select id="inputHomeTax" className="form-selected">
                        <option defaultValue={"Select"}>Choose...</option>
                        </select> */}
                        <input value = {homeTax} onChange={(e) => setHomeTax(e.target.value)} type="text" className="newStyle" id="inputHomeTax"/>
                    </div>
                //</div>
                    <div className="mb-3 btns"><br/> &nbsp;&nbsp;
                    <button type="ADD" className="btn btn-primary" onClick={addPropertyTax}>ADD </button> &nbsp;&nbsp;
                        {/* <button type="SAVE" classNameName="btn btn-primary">SAVE </button> &nbsp;&nbsp; */}
                        <button type="MODIFY" className="btn btn-success" onClick={modifyData}>MODIFY </button> &nbsp;&nbsp;
                        <Link to="/Navbar"><button type="CANCEL" className="btn btn-warning" >CANCEL </button></Link> &nbsp;&nbsp;
                        {/* <button type="FIRST" classNameName="btn btn-primary">FIRST </button> &nbsp;&nbsp;
                        <button type="LAST" classNameName="btn btn-primary">LAST </button> &nbsp;&nbsp;
                        <button type="NEXT" classNameName="btn btn-primary">NEXT </button> &nbsp;&nbsp;
                        <button type="PREVIOUS" classNameName="btn btn-primary">PREVIOUS </button> &nbsp;&nbsp; */}
                         <Link to="/login"><button type="EXIT" className="btn btn-dark">LOGOUT</button></Link>
                        </div>
                </div>
                
            </form>
            {/* <div className="tableData">
          <table>
            <thead>
            <tr>
              <th>Bill No<br/>Bill Date</th>
              <th>Year<br/>Name</th>
              <th>Address<br/>Property No</th>
              <th>Home Tax<br/>Electricity Tax</th>
              <th>Special Water Tax<br/>Total</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.billNo}<br/>{val.billDate}</td>
                  <td>{val.year}<br/>{val.name}</td>
                  <td>{val.address}<br/>{val.propertyNo}</td>
                  <td>{val.homeTax}<br/>{val.electricityTax}</td>
                  <td>{val.specialWaterTax}<br/>{val.total}</td>
                  <td>
                  <button onClick={()=>prePopulate(val.billNo)}>Update</button>
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div> */}
        <Box 
      container
      justify={'center'}
      sx={{
        // '& .super-app-theme--header': {
        //   backgroundColor: '#93acbc',
        //   fontSize: 18,
          
        //   fontFamily:'Roboto',
        // },
        '& .super-app-theme--header-a': {
          backgroundColor: '#9db7c8',
          fontSize: 20,
          fontFamily:'Roboto',
          borderBottom: 2,
        },
      }}
    >
        <div style={ { width: '100%'}}>
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
          getRowId={(row) => row.billNo}
          />
        </div>

        </Box>

        </>
    )
}
