import React, {useState, useEffect, useNavigate} from "react";
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import "./tablestyle.css";
import {Link} from "react-router-dom";
import { DataGrid} from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

const services = new DeathRegistrationService();

export const BirthRegistrationForm = (props) => {
    // const navigate = useNavigate();
    // const logout = () =>{
    //     localStorage.setItem("Token","");
    //     navigate("/login");
    // }
    // const [billNo, setBillNo] = useState('');
    const [pagesize, setPageSize] = useState("")
    const [registrationNo, setRegistrationNo] = useState('');
    const [registrationDate, setRegistrationDate] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [sex, setSex] = useState("");
    const [childName, setChildName] = useState("");
    const [fathersName, setFathersName] = useState("");
    const [mothersName, setMothersName] = useState("");
    const [address, setAddress] = useState("");
    const [weightOfChild, setWeightOfChild] = useState("");
    const [birthPlace, setBirthPlace] = useState("");
    const [senderPerson, setSendorPerson] = useState("");
    const [motherResidence, setMotherResidence] = useState("");
    const [city, setCity] = useState("");
    const [districtName, setDistrictName] = useState("");
    const [state, setState] = useState("");
    const [religion, setReligion] = useState("");
    const [fatherEducationalQualification, setFatherEducationalQualification] = useState("");
    const [motherEducationalQualification, setMotherEducationalQualification] = useState ("");
    const [fatherOccupation, setFatherOccupation] = useState ("");
    const [motherOccupation, setMotherOccupation] = useState ("")
    const [motherAgeMarriageTime, setMotherAgeMarriageTime] = useState("");
    const [motherAgeAtChildTime, setMotherAgeAtChildTime] = useState("");
    const [totalLiveChildWithThisChild, setTotalLiveChildWithThisChild] = useState ("");
    const [deliveryTime, setDeliveryTime] = useState ("");

    const addBirthRegistration = (e) =>{
        e.preventDefault();
        if(registrationDate==="" && dateOfBirth==="" && sex==="" &&
        childName==="" && fathersName==="" && mothersName==="" && address==="" && weightOfChild==="" && 
        birthPlace==="" && city==="" && districtName==="" && state==="" && 
        religion==="" && totalLiveChildWithThisChild==="" && deliveryTime==="")

        {
            alert("Enter all the required input Fields")
            console.log("Input fields are Empty");
            return
        }
        console.log("Data : ",registrationDate,dateOfBirth,sex,childName,fathersName,mothersName,address,weightOfChild,
        birthPlace,senderPerson,motherResidence,city,districtName,state,religion,fatherEducationalQualification,
        motherEducationalQualification,fatherOccupation,motherOccupation,motherAgeMarriageTime,motherAgeAtChildTime,
        totalLiveChildWithThisChild,deliveryTime);
        const data = {
            'registionDate' : registrationDate,
            'dateOfBirth' : dateOfBirth,
            'sex' : sex,
            'childName' : childName,
            'fatherName' : fathersName,
            'motherName' : mothersName,
            'address' : address,
            'weightOfChild' : weightOfChild,
            'birthPlace' : birthPlace,
            'nameAndAddressOfDetailSenderPerson' : senderPerson,
            'cityVillegName' : city,
            'distName' : districtName,
            'state' : state,
            'religion' : religion,
            'fatherEducationalQualification' : fatherEducationalQualification,
            'motherEducationalQualification' : motherEducationalQualification,
            'fatherOccupation' : fatherOccupation,
            'motherOccupation' : motherOccupation,
            'motherAgeMerrageTime' : motherAgeMarriageTime,
            'motherAgeAtChildTime' : motherAgeAtChildTime,
            'deliveryType' : deliveryTime,
            'motherResidence' : motherResidence,
            'totalLiveChildWithThisChild' : totalLiveChildWithThisChild

        }
        services.BirthRegistration(data).then((data)=>{
            console.log(data)
            refreshPage();
        }).catch((error)=>{
            console.log(error)
        })
    }

    const modifyData = (e) => {
        e.preventDefault();
        let url = "https://localhost:7277/BirthRegistration/" + registrationNo;
        console.log(url);
        const data = {
            'registrationNo' : registrationNo,
            'registionDate' : registrationDate,
            'dateOfBirth' : dateOfBirth,
            'sex' : sex,
            'childName' : childName,
            'fatherName' : fathersName,
            'motherName' : mothersName,
            'address' : address,
            'weightOfChild' : weightOfChild,
            'birthPlace' : birthPlace,
            'nameAndAddressOfDetailSenderPerson' : senderPerson,
            'cityVillegName' : city,
            'distName' : districtName,
            'state' : state,
            'religion' : religion,
            'fatherEducationalQualification' : fatherEducationalQualification,
            'motherEducationalQualification' : motherEducationalQualification,
            'fatherOccupation' : fatherOccupation,
            'motherOccupation' : motherOccupation,
            'motherAgeMerrageTime' : motherAgeMarriageTime,
            'motherAgeAtChildTime' : motherAgeAtChildTime,
            'deliveryType' : deliveryTime,
            'motherResidence' : motherResidence,
            'totalLiveChildWithThisChild' : totalLiveChildWithThisChild
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
           console.log("Data:"+data); 
          }) 
          .catch((err) => { 
            console.log(err.message); 
          }); 

    }

    function deleteData(id){
        // e.preventDefault();
        let url = "https://localhost:7277/BirthRegistration/" + id;
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
    fetch(`https://localhost:7277/BirthRegistration/`,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}})
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
        setRegistrationDate(data[id-1].registionDate)
        setDateOfBirth(data[id-1].dateOfBirth)
        setSex(data[id-1].sex)
        setChildName(data[id-1].childName)
        setFathersName(data[id-1].fatherName)
        setMothersName(data[id-1].motherName)
        setAddress(data[id-1].address)
        setWeightOfChild(data[id-1].weightOfChild)
        setBirthPlace(data[id-1].birthPlace)
        setSendorPerson(data[id-1].nameAndAddressOfDetailSenderPerson)
        setMotherResidence(data[id-1].motherRecidences)
        setCity(data[id-1].cityVillegName)
        setDistrictName(data[id-1].distName)
        setState(data[id-1].state)
        setReligion(data[id-1].religion)
        setFatherEducationalQualification(data[id-1].fatherEducationalQualification)
        setMotherEducationalQualification(data[id-1].motherEducationalQualification)
        setFatherOccupation(data[id-1].fatherOccupation)
        setMotherOccupation(data[id-1].motherOccupation)
        setMotherAgeMarriageTime(data[id-1].motherAgeMerrageTime)
        setMotherAgeAtChildTime(data[id-1].motherAgeAtChildTime)
        setTotalLiveChildWithThisChild(data[id-1].totalLiveChildWithThisChild)
        setDeliveryTime(data[id-1].deliveryType)
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
      field: "dateOfBirth",
      headerName: <strong>DateOfBirth</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.dateOfBirth}</Typography>
        </div>
      )
    },
    {
      field: "childName",
      headerName: <strong>ChildName</strong>,
      width: "180",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.childName}</Typography>
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
      field: "fatherName",
      headerName: <strong>FatherName</strong>,
      width: "160",
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
        width: "180",
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
        field: "birthPlace",
        headerName: <strong>BirthPlace</strong>,
        width: "180",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.birthPlace}</Typography>
            </div>
          )
    },
    {
      field: "deliveryType",
      headerName: <strong>DeliveryType</strong>,
      width: "160",
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header-a',
      renderCell: (params) => (
        <div>
          <Typography>{params.row.deliveryType}<br/></Typography>
        </div>
      )
    },
    {
        field: "totalLiveChildWithThisChild",
        headerName: <strong>TotalLiveChildWithThisChild</strong>,
        width: "250",
        headerAlign: "center",
        align: "center",
        headerClassName: 'super-app-theme--header-a',
        renderCell: (params) => (
            <div>
              <Typography>{params.row.totalLiveChildWithThisChild}</Typography>
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



    return(
        <> 
        <h1 align="center">Birth Registration Form</h1>
            <form className="form-birth">
                <div className="leftdiv">
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputRegistrationNo" className="form-label">Registration No.  </label>
                        <input value = {registrationNo} onChange={(e) => setRegistrationNo(e.target.value)} type="text" className="newStyle" id="inputRegistrationNo"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputCity" className="form-label">City/Village<span class="required">*</span>  </label>
                        <input value = {city} onChange={(e) => setCity(e.target.value)} type="text" className="newStyle" id="inputCity"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputRegistrationDate" className="form-label">Registration Date <span class="required">*</span> </label>
                        <input value = {registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} type="Date" className="newStyle" id="inputRegistrationDate"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDistrict" className="form-label">District Name <span class="required">*</span>  </label>
                        <input value = {districtName} onChange={(e) => setDistrictName(e.target.value)} type="text" className="newStyle" id="inputDistrict"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputDateOfBirth" className="form-label">Date Of Birth <span class="required">*</span>  </label>
                        <input value = {dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type="Date" className="newStyle" id="inputDateOfBirth"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputState" className="form-label">State <span class="required">*</span> </label>
                        <input value = {state} onChange={(e) => setState(e.target.value)} type="text" className="newStyle" id="inputState"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputSex" className="form-label">Sex <span class="required">*</span>  </label>
                        {/* <select id="inputSex" className="form-select">
                        <option selected>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        </select> */}
                        <input value = {sex} onChange={(e) => setSex(e.target.value)} type="text" className="newStyle" id="inputSex"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputReligion" className="form-label">Religion <span class="required">*</span>  </label>
                        <input value = {religion} onChange={(e) => setReligion(e.target.value)} type="text" className="newStyle" id="inputReligion"/>
                    </div>
                </div>
                
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputChildName" className="form-label">Child Name <span class="required">*</span>  </label>
                        <input value = {childName} onChange={(e) => setChildName(e.target.value)} type="text" className="newStyle" id="inputChildName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputFatherEducationalQualification" className="form-label">Father's Educational Qualification  </label>
                        <input value = {fatherEducationalQualification} onChange={(e) => setFatherEducationalQualification(e.target.value)} type="text" className="newStyle" id="inputFatherEducationalQualification"/>
                    </div>
                </div>
                
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputFathersName" className="form-label">Father's Name <span class="required">*</span>  </label>
                        <input value = {fathersName} onChange={(e) => setFathersName(e.target.value)} type="text" className="newStyle" id="inputFathersName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputMotherEducationalQualification" className="form-label">Mother's Educational Qualification  </label>
                        <input value = {motherEducationalQualification} onChange={(e) => setMotherEducationalQualification(e.target.value)} type="text" className="newStyle" id="inputMotherEducationalQualification"/>
                    </div>
                </div>
                
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputMothersName" className="form-label">Mother's Name <span class="required">*</span>  </label>
                        <input value = {mothersName} onChange={(e) => setMothersName(e.target.value)} type="text" className="newStyle" id="inputMothersName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputFathersOccupation" className="form-label">Father's Occupation  </label>
                        <input value = {fatherOccupation} onChange={(e) => setFatherOccupation(e.target.value)} type="text" className="newStyle" id="inputFathersOccupation"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputAddress" className="form-label">Address<span class="required">*</span> </label>
                        <input value = {address} onChange={(e) => setAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputMothersOccupation" className="form-label">Mother's Occupation  </label>
                        <input value = {motherOccupation} onChange={(e) => setMotherOccupation(e.target.value)} type="text" className="newStyle" id="inputMothersOccupation"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputWeightOfChild" className="form-label">Weight Of Child(Kg)  <span class="required">*</span> </label>
                        <input value = {weightOfChild} onChange={(e) => setWeightOfChild(e.target.value)} type="text" className="newStyle" id="inputWeightOfChild"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputMothersAge" className="form-label">Mother's Age at Marriage Time </label>
                        <input value = {motherAgeMarriageTime} onChange={(e) => setMotherAgeMarriageTime(e.target.value)} type="text" className="newStyle" id="inputMothersAge"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputBirthPlace" className="form-label">Birth Place <span class="required">*</span>  </label>
                        <input value = {birthPlace} onChange={(e) => setBirthPlace(e.target.value)} type="text" className="newStyle" id="inputBirthPlace"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputMothersAgeAtTimeOfBirth" className="form-label">Mother's Age at Time of Birth  </label>
                        <input value = {motherAgeAtChildTime} onChange={(e) => setMotherAgeAtChildTime(e.target.value)} type="text" className="newStyle" id="inputMothersAgeAtTimeOfBirth"/>
                    </div>
                </div>
                
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputSenderPerson" className="form-label">Name and Address of Detail Sender Person  </label>
                        <input value = {senderPerson} onChange={(e) => setSendorPerson(e.target.value)} type="text" className="newStyle" id="inputSenderPerson"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputTotalLiveChildWithThisChild" className="form-label">Total Live Child with this Child <span class="required">*</span>  </label>
                        <input value = {totalLiveChildWithThisChild} onChange={(e) => setTotalLiveChildWithThisChild(e.target.value)} type="text" className="newStyle" id="inputTotalLiveChildWithThisChild"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputMothersResidence" className="form-label">Mother's Residence  </label>
                        <input value = {motherResidence} onChange={(e) => setMotherResidence(e.target.value)} type="text" className="newStyle" id="inputMothersResidence"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDeliveryType" className="form-label">Delivery Type <span class="required">*</span> </label>
                        <input value = {deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} type="text" className="newStyle" id="inputDeliveryType"/>
                    </div>
                </div>
                
                    <div className="mb-3 btns"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="ADD" className="btn btn-primary" onClick={addBirthRegistration}>ADD </button> &nbsp;&nbsp;
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
              <th>Registration no<br/>RegistrationDate</th>
              <th>DateOfBirth<br/>Gender</th>
              <th>Child Name<br/>Father Name</th>
              <th>Mother Name<br/>Address</th>
              <th>WeightOfChild<br/>Birth Place</th>
              <th>Name Of Detail Sender<br/>City</th>
              <th>District<br/>State</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.registrationNo}<br/>{val.registrationDate}</td>
                  <td>{val.dateOfBirth}<br/>{val.sex}</td>
                  <td>{val.childName}<br/>{val.fathersName}</td>
                  <td>{val.mothersName}<br/>{val.address}</td>
                  <td>{val.weightOfChild}<br/>{val.birthPlace}</td>
                  <td>{val.senderPerson}<br/>{val.city}</td>
                  <td>{val.districtName}<br/>{val.state}</td>
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

export default BirthRegistrationForm;