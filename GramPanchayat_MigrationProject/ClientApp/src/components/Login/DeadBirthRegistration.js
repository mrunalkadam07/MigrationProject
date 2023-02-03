import React, {useState, useEffect, useNavigate} from "react";
import './Assessment.list.css';
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import { Link } from "react-router-dom";
import { DataGrid} from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

const services = new DeathRegistrationService();

        export const DeadBirthRegistration = (props) => {
            // const navigate = useNavigate();
            // const logout = () =>{
            //     localStorage.setItem("Token","");
            //     navigate("/login");
            // }
            // const [billNo, setBillNo] = useState('');
            const [pagesize, setPageSize] = useState("")
            const [registrationNo, setRegistrationNo] = useState("");
            const [registrationDate, setRegistrationDate] = useState("");
            const [fatherName, setFatherName] = useState("");
            const [motherName, setMotherName] = useState("");
            const [year, setYear] = useState("");
            const [city, setCity] = useState("");
            const [taluka, setTaluka] = useState("");
            const [district, setDistrict] = useState("");
            const [deadBirthDate, setDeadBirthDate] = useState("");
            const [sex, setSex] = useState("");
            const [address, setAddress] = useState("");
            const [birthPlace, setBirthPlace] = useState("");
            const [detailSender, setDetailSender] = useState("");
            const [nameOfRegistar, setNameOfRegistar] = useState("");
        
            const addDeadBirthRegistration = (e) =>{
                e.preventDefault();
                if(registrationDate==="" && fatherName==="" && motherName==="" && year==="" && city==="" && district==="" && deadBirthDate==="" && sex==="" && address==="" &&
                birthPlace===""  && nameOfRegistar==="")
                {
                    alert("Enter all the required input Fields")
                    console.log("Input fields are Empty");
                    return
                }
                console.log("Data : ",registrationNo,registrationDate,fatherName,motherName,year,city,taluka,district,
                deadBirthDate,sex,address,birthPlace,detailSender,nameOfRegistar);
                const data = {
                    'year' : year,
                    'cityVillege' : city,
                    'taluko' : taluka,
                    'dist' : district,
                    'registretionDate' : registrationDate,
                    'deadBirthDate' : deadBirthDate,
                    'sex' : sex,
                    'fatherName' : fatherName,
                    'motherName' : motherName,
                    'address' : address,
                    'birthPlace' : birthPlace,
                    'nameAndAddressOfDetailSendesPerson' : detailSender,
                    'nameOfRegistar' : nameOfRegistar

                }
                services.DeadBirthRegistration(data).then((data)=>{
                    console.log(data)
                    refreshPage();
                }).catch((error)=>{
                    console.log(error)
                })
            }

                const modifyData = (e) => {
                    e.preventDefault();
                    let url = "https://localhost:7277/DeadBirthReg/" + registrationNo;
                    console.log(url);
                    const data = {

                        'registretionNo' : registrationNo,
                        'registrationDate' : registrationDate,
                        'fatherName' : fatherName,
                        'motherName' : motherName,
                        'year' : year,
                        'city' : city,
                        'taluka' : taluka,
                        'district' : district,
                        'deadBirthDate' : deadBirthDate,
                        'sex' : sex,
                        'address' : address,
                        'birthPlace' : birthPlace,
                        'detailSender' : detailSender,
                        'nameOfRegistar' : nameOfRegistar
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
                         alert("Data Updated Successfully!")
                         refreshPage();
                       // console.log(data); 
                      }) 
                      .catch((err) => { 
                        console.log(err.message); 
                      }); 
            
                }
            
                function deleteData(id){
                   // e.preventDefault();
                    let url = "https://localhost:7277/DeadBirthReg/" + id;
                    console.log(url);
                    fetch(url , {
                        method : 'DELETE',
                        headers : {
                            'Accept' : 'application/json',
                            'Content-Type' : 'application/json',
                            'Authorization':'Bearer'+" "+localStorage.getItem("Token")
                        }
                    }).then(response => response.json())
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
            
              function prePopulate(id){
                    setRegistrationNo(data[id-1].registretionNo)
                    setRegistrationDate(data[id-1].registretionDate)
                    setFatherName(data[id-1].fatherName)
                    setMotherName(data[id-1].motherName)
                    setYear(data[id-1].year)
                    setCity(data[id-1].cityVillege)
                    setTaluka(data[id-1].taluko)
                    setDistrict(data[id-1].dist)
                    setDeadBirthDate(data[id-1].deadBirthDate)
                    setSex(data[id-1].sex)
                    setAddress(data[id-1].address)
                    setBirthPlace(data[id-1].birthPlace)
                    setDetailSender(data[id-1].nameAndAddressOfDetailSendesPerson)
                    setNameOfRegistar(data[id-1].nameOfRegistar)
              }
            
              useEffect(() => {
                fetchData();
              }, []);

              function refreshPage() {

                window.location.reload(false);
            
              }
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
                {
                    field: "actions",
                    headerName: <strong>Actions</strong>,
                    width: "190",
                    headerAlign: "center",
                    align: "center",
                    headerClassName: 'super-app-theme--header-a',
                    renderCell: (params) => (
                        <div>
                          <button className="btn btn-success"onClick={()=>prePopulate(params.row.registretionNo)}>UPDATE</button>
                          <br/><br/>
                          <button type="DELETE" className="btn btn-danger"onClick={()=>deleteData(params.row.registretionNo)}>DELETE </button>
                        </div>
                      )
                },
                
              ];

            
    return(
        <>  
           
            <h1 align="center">Dead Birth Registration Form</h1>
            <form className="form-deadbirth">
                <div className="leftdiv">
                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputRegistrationNo" className="input-text js-input">Registration No.  </label>
                            <input value = {registrationNo} onChange={(e) => setRegistrationNo(e.target.value)} type="text" className="newStyle" id="inputRegistrationNo"/>
                        </div>                    
                        <div className="mb-3">
                            <label htmlFor="inputRegistrationDate" className="form-label">Registration Date <span class="required">*</span>  </label>
                            <input value = {registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} type="Date" className="newStyle" id="inputRegistrationDate"/>
                        </div>
                    </div>
                    
                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputFatherName" className="form-label">Father's Name <span class="required">*</span>  </label>
                            <input value = {fatherName} onChange={(e) => setFatherName(e.target.value)} type="text" className="newStyle" id="inputFatherName"/>
                        </div>                    
                        <div className="mb-3">
                            <label htmlFor="inputMotherName" className="form-label">Mother's Name <span class="required">*</span>  </label>
                            <input value = {motherName} onChange={(e) => setMotherName(e.target.value)} type="text" className="newStyle" id="inputMotherName"/>
                        </div>
                    </div>

                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputYear" className="form-label">Year <span class="required">*</span>  </label>
                            <input value = {year} onChange={(e) => setYear(e.target.value)} type="number" placeholder="yyyy" min="1947" max="2023" className="newStyle" id="inputYear"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputCity" className="form-label">City <span class="required">*</span>  </label>
                            <input value = {city} onChange={(e) => setCity(e.target.value)} type="text" className="newStyle" id="inputCity"/>
                        </div>
                    </div>

                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputTaluka" className="form-label">Taluka  </label>
                            <input value = {taluka} onChange={(e) => setTaluka(e.target.value)} type="text" className="newStyle" id="inputTaluka"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDistrict" className="form-label">Dist <span class="required">*</span>  </label>
                            <input value = {district} onChange={(e) => setDistrict(e.target.value)} type="text" className="newStyle" id="inputDistrict"/>
                        </div>     
                    </div>

                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputDeadBirthDate" className="form-label">Dead Birth Date <span class="required">*</span>  </label>
                            <input value = {deadBirthDate} onChange={(e) => setDeadBirthDate(e.target.value)} type="Date" className="newStyle" id="inputDeadBirthDate"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputSex" className="form-label">Gender <span class="required">*</span> </label>
                            <select id="inputSex" className="form-select">
                                <option defaultValue="select">Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                                </select>
                            <input value = {sex} onChange={(e) => setSex(e.target.value)} type="text" className="newStyle" id="inputSex" />
                        </div>
                    </div>
                    
                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputAddress" className="form-label">Address <span class="required">*</span>  </label>
                            <input value = {address} onChange={(e) => setAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputBirthPlace" className="form-label">Birth Place <span class="required">*</span> </label>
                            <input value = {birthPlace} onChange={(e) => setBirthPlace(e.target.value)} type="text" className="newStyle" id="inputBirthPlace"/>
                        </div>
                    </div>
                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputDetailSender" className="form-label">Name and Address of Detail Sender  </label>
                            <input value = {detailSender} onChange={(e) => setDetailSender(e.target.value)} type="text" className="newStyle" id="inputDetailSender"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputNameOfRegistar" className="form-label">Name of Registar <span class="required">*</span>  </label>
                            <input value = {nameOfRegistar} onChange={(e) => setNameOfRegistar(e.target.value)} type="text" className="newStyle" id="inputNameOfRegistar"/>
                        </div>
                    </div>

                    <div className="mb-3 btns">
                        <button type="ADD" className="btn btn-primary" onClick={addDeadBirthRegistration}>ADD </button> &nbsp;&nbsp;
                        {/* <button type="SAVE" classNameName="btn btn-primary">SAVE </button> &nbsp;&nbsp; */}
                        <button type="MODIFY" className="btn btn-success" onClick={modifyData}>MODIFY </button> &nbsp;&nbsp;
                        <Link to="/Navbar"><button type="CANCEL" className="btn btn-warning" >CANCEL </button></Link> &nbsp;&nbsp;
                        <Link to="/login"><button type="EXIT" className="btn btn-dark">LOGOUT</button></Link>
                    </div>

                </div>
            </form>
            {/* <div className="tableData">
          <table>
            <thead>
            <tr>
              <th>Registration no<br/>Year</th>
              <th>CityVillage<br/>Registration Date</th>
              <th>Dead BirthDate<br/>Sex</th>
              <th>Father Name<br/>Mother Name</th>
              <th>Address<br/>Birth Place</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.registrationNo}<br/>{val.year}</td>
                  <td>{val.cityVillege}<br/>{val.registrationDate}</td>
                  <td>{val.deathBirthDate}<br/>{val.sex}</td>
                  <td>{val.fatherName}<br/>{val.motherName}</td>
                  <td>{val.address}<br/>{val.birthPlace}</td>
                  <td>
                  <button onClick={()=>prePopulate(val.registretionNo)}>Update</button>
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
          getRowId={(row) => row.registretionNo}
          />
        </div>

        </Box>
        </>
    )
}

export default DeadBirthRegistration;