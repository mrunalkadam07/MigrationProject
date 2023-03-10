import React, { useState, useEffect, useNavigate } from 'react';
import './Assessment.list.css';
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import {Link} from "react-router-dom";
import { DataGrid} from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

const services = new DeathRegistrationService();

export const DeathRegistrationForm = (props) => {
    // const navigate = useNavigate();
    // const logout = () =>{
    //     localStorage.setItem("Token","");
    //     navigate("/login");
    // }
    const [pagesize, setPageSize] = useState("")
    const [registration_no, setRegistrationNo] = useState("");
    const [taluka, setTaluka] = useState("");
    const [district, setDistrict] = useState("");
    const [city,setCity] = useState("");
    const [name,setName] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [place, setPlace] = useState("");
    const [relative,setRelative] = useState("");
    const [addressOfDeadPerson,setAddressOfDeadPerson] = useState("");
    const [registrar,setRegistrar] = useState("");
    const [addressOfSenderPerson,setAddressOfSenderPerson] = useState("");
    const [year, setYear] = useState("");
    const [registrationDate, setRegistrationDate] = useState(new Date());
    const [deathDate, setDeathDate] = useState(new Date());


    const handleSubmit  = () => {
        console.log(registration_no, taluka,name, registrationDate,addressOfDeadPerson);
    }

    const addData = (e) =>{
        e.preventDefault();
        if(year==="" && name==="" && addressOfDeadPerson==="" && relative==="" && registrationDate==="" && place==="" && age==="" &&
         city==="" && district===""&& registrar==="" && deathDate==="" && sex==="")
        {
            alert("Enter all the required input Fields")
            console.log("Input fields are Empty");
            return
        }
        console.log("Data : ",year,name,addressOfDeadPerson,relative,deathDate,addressOfSenderPerson,place,city,registrar);
        const data = {
                    'Year': year,
                    'CityVillege': city,
                    'Taluko': taluka,
                    'Dist': district,
                    'RegistrationDate': registrationDate,
                    'DateOfDeath': deathDate,
                    'NameAndAddressOfDeathSenderPerson': addressOfSenderPerson,
                    'Sex': sex,
                    'AgeAtDeath': age,
                    'PlaceOfDeath': place,
                    'MotherFatherHusbandName': relative,
                    'PermentAddressOfDeathPerson': addressOfDeadPerson,
                    'NameOfDeathPerson': name,
                    'NameOfRegistar': registrar
        }
        services.DeathRegistration(data).then((data)=>{
            console.log(data)
            refreshPage();
        }).catch((error)=>{
            console.log(error)
        })
    }

    // const modifyData = (e) =>{
    //     e.preventDefault();
    //     console.log("Data : ",registration_no,year,name,addressOfDeadPerson,relative,deathDate,addressOfSenderPerson,place,city,registrar);
    //     const data = {
    //                 'RegistrationNo': registration_no,
    //                 'Year': year,
    //                 'CityVillege': city,
    //                 'Taluko': taluka,
    //                 'Dist': district,
    //                 'RegistrationDate': registrationDate,
    //                 'DateOfDeath': deathDate,
    //                 'NameAndAddressOfDeathSenderPerson': addressOfSenderPerson,
    //                 'Sex': sex,
    //                 'AgeAtDeath': age,
    //                 'PlaceOfDeath': place,
    //                 'MotherFatherHusbandName': relative,
    //                 'PermentAddressOfDeathPerson': addressOfDeadPerson,
    //                 'NameOfDeathPerson': name,
    //                 'NameOfRegistar': registrar
    //     }
    //     services.UpdateDeathRegistration(registration_no,data).then((data)=>{
    //         console.log(data)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }
    const modifyData = (e) => {
        e.preventDefault();
        let url = "https://localhost:7277/DeathRegistration/" + registration_no;
        console.log(url);
        const data = {
            'Year': year,
            'CityVillege': city,
            'Taluko': taluka,
            'Dist': district,
            'RegistrationDate': registrationDate,
            'DateOfDeath': deathDate,
            'NameAndAddressOfDeathSenderPerson': addressOfSenderPerson,
            'Sex': sex,
            'AgeAtDeath': age,
            'PlaceOfDeath': place,
            'MotherFatherHusbandName': relative,
            'PermentAddressOfDeathPerson': addressOfDeadPerson,
            'NameOfDeathPerson': name,
            'NameOfRegistar': registrar}
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
            alert("Data Updated Successfully");
            refreshPage();
           // console.log(data); 
          }) 
          .catch((err) => { 
            console.log(err.message); 
          }); 

    }

    function deleteData(id){
       // e.preventDefault();
        let url = "https://localhost:7277/DeathRegistration/" + registration_no;
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

  function prePopulate(id){
        setRegistrationNo(data[id-1].registrationNo)
        setTaluka(data[id-1].taluko)
        setDistrict(data[id-1].dist)
        setCity(data[id-1].cityVillege)
        setName(data[id-1].nameOfDeathPerson)
        setSex(data[id-1].sex)
        setAge(data[id-1].ageAtDeath)
        setPlace(data[id-1].placeOfDeath)
        setRelative(data[id-1].motherFatherHusbandName)
        setAddressOfDeadPerson(data[id-1].permentAddressOfDeathPerson)
        setRegistrar(data[id-1].nameOfRegistar)
        setAddressOfSenderPerson(data[id-1].nameAndAddressOfDeathSenderPerson)
        setYear(data[id-1].year)
        setRegistrationDate(data[id-1].registrationDate)
        setDeathDate((data[id-1].dateOfDeath))
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
    {
        field: "actions",
        headerName: <strong>Actions</strong>,
        width: "190",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <button className="btn btn-success"onClick={()=>prePopulate(params.row.registrationNo)}>UPDATE</button>
              <br/><br/>
              <button type="DELETE" className="btn btn-danger"onClick={()=>deleteData(params.row.registrationNo)}>DELETE </button>
            </div>
          )
    },
    
  ];


//   refreshList(){
//     fetch("")
//     .then(response=>response.json())
//     .then(data=>{
//         this.setState({data})
//     });
//   };
//   componentDidMount(){
//     this.refreshList();
//   };
    return (
        <>
            <h1 align="center">Death Registration Form</h1>
            <form className="form-death">
                <div className="leftdiv">
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputRegistrationNo" className="form-label">Registration No.  </label>
                        <input value = {registration_no} onChange={(e) => setRegistrationNo(e.target.value)} type="text" className="newStyle" id="inputRegistrationNo" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputYear" className="form-label">Year <span class="required">*</span> </label>
                        <input value = {year} onChange={(e) => setYear(e.target.value)} type="number" placeholder="yyyy" min="1947" max="2023" className="newStyle" id="inputYear" />
                    </div>
                </div>
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputTaluka" className="form-label">Taluka </label>
                        <input value = {taluka} onChange={(e) => setTaluka(e.target.value)} type="text" className="newStyle" id="inputTaluka" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDistrict" className="form-label">District<span class="required">*</span>  </label>
                        <input value = {district} onChange={(e) => setDistrict(e.target.value)} type="text" className="newStyle" id="inputDistrict" />
                    </div>
                </div>
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputRegistrationDtae" className="form-label">Registration Date <span class="required">*</span> </label>
                        <input value = {registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} type="date" className="newStyle" id="inputRegistrationDate" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDeathDate" className="form-label">Date of Death <span class="required">*</span> </label>
                        <input value = {deathDate} onChange={(e) => setDeathDate(e.target.value)} type="date" className="newStyle" id="inputDeathDate" />
                    </div>
                </div>
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputNameofDeadPerson" className="form-label">Name of Dead Person <span class="required">*</span> </label>
                        <input value = {name} onChange={(e) => setName(e.target.value)} type="text" className="newStyle" id="inputNameofDeadPerson" />
                    </div>
                    <div className="mb-3">
                            <label htmlFor="inputSex" className="form-label">Sex <span class="required">*</span> </label>
                            <select id="inputSex" className="form-select">
                                <option defaultValue="select">Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <input value = {sex} onChange={(e) => setSex(e.target.value)} type="text" className="newStyle" id="inputSex" />
                        </div>
                    {/* </div> */}
                </div>
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputAge" className="form-label">Age of Dead Person<span class="required">*</span>  </label>
                        <input value = {age} onChange={(e) => setAge(e.target.value)} type="number" className="newStyle" id="inputAge" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPlace" className="form-label">Place of Death <span class="required">*</span> </label>
                        <input value = {place} onChange={(e) => setPlace(e.target.value)} type="text" className="newStyle" id="inputPlace" />
                    </div>
                </div>
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputRelative" className="form-label">Mother/Father/Husband Name <span class="required">*</span> </label>
                        <input value = {relative} onChange={(e) => setRelative(e.target.value)} type="text" className="newStyle" id="inputRelative" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputAddress" className="form-label">Permanent Address of Dead Person <span class="required">*</span>  </label>
                        <input value = {addressOfDeadPerson} onChange={(e) => setAddressOfDeadPerson(e.target.value)} type="text" className="newStyle" id="inputAddress" />
                    </div>
                </div>
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputNameOfSenderPerson" className="form-label">Name and Address of Sender Person</label>
                        <input value = {addressOfSenderPerson} onChange={(e) => setAddressOfSenderPerson(e.target.value)} type="text" className="newStyle" id="inputNameOfSenderPerson" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputRegistrar" className="form-label">Name of Registrar <span class="required">*</span> </label>
                        <input value = {registrar} onChange={(e) => setRegistrar(e.target.value)} type="text" className="newStyle" id="inputRegistrar" />
                    </div>
                </div> 
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputCityorVillage" className="form-label">City/Village <span class="required">*</span> </label>
                        <input value = {city} onChange={(e) => setCity(e.target.value)} type="text" className="newStyle" id="inputCityorVillage" />
                    </div>
                </div>
                    <div className="mb-3 btns"><br />
                    <button type="ADD" className="btn btn-primary" onClick={addData}>ADD </button> &nbsp;&nbsp;
                        {/* <button type="SAVE" classNameName="btn btn-primary">SAVE </button> &nbsp;&nbsp; */}
                        <button type="SAVE" className="btn btn-success" onClick={modifyData}>MODIFY </button> &nbsp;&nbsp;
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
              <th>Registration no<br/>Year</th>
              <th>City/Village<br/>Taluka</th>
              <th>Date of Death<br/>Registration Date</th>
              <th>Age at Death<br/>Sex</th>
              <th>Name of Dead Person<br/>Place of Death</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.registrationNo}<br/>{val.year}</td>
                  <td>{val.cityVillege}<br/>{val.taluko}</td>
                  <td>{val.dateOfDeath}<br/>{val.registrationDate}</td>
                  <td>{val.ageAtDeath}<br/>{val.sex}</td>
                  <td>{val.nameOfDeathPerson}<br/>{val.placeOfDeath}</td>
                  <td>
                  <button onClick={()=>prePopulate(val.registrationNo)}>Update</button>
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
          getRowId={(row) => row.registrationNo}
          />
        </div>

        </Box>
        </>
    )
}
