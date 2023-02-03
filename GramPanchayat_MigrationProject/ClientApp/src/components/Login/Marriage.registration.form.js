import React, {useState, useEffect, useNavigate} from "react";
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import './tablestyle.css';
import {Link} from "react-router-dom";
import { DataGrid} from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
// import { useNavigate } from "react-router-dom";

        const services = new DeathRegistrationService();

        export const MarriageRegistrationForm = (props) => {
            // const navigate = useNavigate();
            // const logout = () =>{
            //     localStorage.setItem("Token","");
            //     navigate("/login");
            // }
            const [pagesize, setPageSize] = useState("")
            const [registrationNo, setRegistrationNo] = useState('');
            const [marriageDate, setMarriageDate] = useState("");
            const [marriagePlace, setMarriagePlace] = useState("");
            const [fullNameOfGroom, setFullNameOfGroom] = useState("");
            const [groomsAge, setGroomsAge] = useState("");
            const [groomsReligion, setgroomsReligion] = useState("");
            const [groomsPlaceOfResidence, setGroomsPlaceOfResidence] = useState("");
            const [groomsAddress, setGroomsAddress] = useState("");
            const [groomDesignation, setGroomDesignation] = useState("");
            const [fullNameOfBride, setFullNameOfBride] = useState("");
            const [bridesAge, setBridesAge] = useState("");
            const [bridesReligion, setBridesReligion] = useState("");
            const [bridesPlaceOfResidence, setBridesPlaceOfResidence] = useState("");
            const [bridesAddress, setBridesAddress] = useState("");
            const [bridesDesignation, setBridesDesignation] = useState("");
            const [groomsFatherMotherName, setGroomsFatherMotherName] = useState("");
            const [groomsFatherMotherAge, setGroomsFatherMotherAge] = useState ("");
            const [groomsParentAddress, setGroomsParentAddress] = useState ("");
            const [groomsParentPlaceOfResidence, setGroomsParentPlaceOfResidence] = useState ("")
            const [bridesFatherMotherName, setBridesFatherMotherName] = useState("");
            const [bridesFatherMotherAge, setBridesFatherMotherAge] = useState ("");
            const [bridesParentAddress, setBridesParentAddress] = useState ("");
            const [bridesParentPlaceOfResidence, setBridesParentPlaceOfResidence] = useState ("")
            const [nameOfBrahman, setNameOfBrahman] = useState ("");
            const [firstFullNameOfWitness, setFirstFullNameOfWitness] = useState ("");
            const [firstWitnessAddress, setFirstWitnessAddress] = useState ("");
            const [secondFullNameOfWitness, setSecondFullNameOfWitness] = useState ("");
            const [secondWitnessAddress, setSecondWitnessAddress] = useState ("");

        
            const addMarriageRegistration = (e) =>{
                e.preventDefault();
                if(marriageDate==="" && marriagePlace==="" && fullNameOfGroom==="" &&
                 groomsAge==="" && groomsReligion==="" && groomsPlaceOfResidence==="" && groomsAddress==="" && 
                 groomDesignation==="" && fullNameOfBride==="" && bridesAge==="" && bridesReligion==="" &&
                 bridesPlaceOfResidence==="" && bridesAddress==="" && bridesDesignation==="" 
                 && groomsFatherMotherName===""   
                 && groomsParentAddress==="" && groomsParentPlaceOfResidence ==="" &&
                 bridesFatherMotherName===""  && bridesParentAddress==="" && 
                 bridesParentPlaceOfResidence && firstFullNameOfWitness==="" && 
                 firstWitnessAddress==="")
                {
                    alert("Enter all the required input Fields")
                    console.log("Input fields are Empty");
                    return
                }
                console.log("Data : ",registrationNo,marriageDate,marriagePlace,fullNameOfGroom,groomsAge,groomsReligion,groomsPlaceOfResidence,
                groomsAddress,groomDesignation,fullNameOfBride,bridesAge,bridesReligion,bridesPlaceOfResidence,bridesAddress,bridesDesignation,
                groomsFatherMotherName,groomsFatherMotherAge,groomsParentAddress,groomsParentPlaceOfResidence,bridesFatherMotherName,bridesFatherMotherAge,
                bridesParentAddress,bridesParentPlaceOfResidence,nameOfBrahman,firstFullNameOfWitness,firstWitnessAddress,secondFullNameOfWitness,secondWitnessAddress);
                const data = {
                    'merrageDate' : marriageDate,
                    'merragePlace' : marriagePlace,
                    'fullNameOFGroom' : fullNameOfGroom,
                    'groomAge' : groomsAge,
                    'groomReligion' : groomsReligion,
                    'groomPlaceOfResidences' : groomsPlaceOfResidence,
                    'groomAddress' : groomsAddress,
                    'merrageTimeGroomDesignation' : groomDesignation,
                    'fullNameOFBride' : fullNameOfBride,
                    'brideAge' : bridesAge,
                    'brideReligion' : bridesReligion,
                    'bridePlaceOfResidences' : bridesPlaceOfResidence,
                    'brideAddress' : bridesAddress,
                    'merrageTimeBrideDesignation' : bridesDesignation,
                    'groomFatherAndMotherName' : groomsFatherMotherName,
                    'groomFatherMotherAge' : groomsFatherMotherAge,
                    'GroomFateherMotherPLaceOfResidentes' : groomsParentPlaceOfResidence,
                    'groomFatherMotherAddress' : groomsParentAddress,
                    'brideFatherAndMotherName' : bridesFatherMotherName,
                    'brideFatherMotherAge' : bridesFatherMotherAge,
                    'brideFatherMotherPlaceOfResidences' : bridesParentPlaceOfResidence,
                    'brideFatherAndMotherAddress' : bridesParentAddress,
                    'nameOfBrahMan' : nameOfBrahman,
                    'firstFullNameOfWitness' : firstFullNameOfWitness,
                    'firstWitnessAddress' : firstWitnessAddress,
                    'secondFullNameOfWitness' : secondFullNameOfWitness,
                    'secondWitnessAddress' : secondWitnessAddress

                }
                services.MarriageRegistration(data).then((data)=>{
                    console.log(data)
                    refreshPage();
                }).catch((error)=>{
                    console.log(error)
                })
            }

            const modifyData = (e) => {
                e.preventDefault();
                let url = "https://localhost:7277/MarriageRegistration/" + registrationNo;
                console.log(url);
                const data = {
                    'registrationNo' : registrationNo,
                    'merrageDate' : marriageDate,
                    'merragePlace' : marriagePlace,
                    'fullNameOFGroom' : fullNameOfGroom,
                    'groomAge' : groomsAge,
                    'groomReligion' : groomsReligion,
                    'groomPlaceOfResidences' : groomsPlaceOfResidence,
                    'groomAddress' : groomsAddress,
                    'merrageTimeGroomDesignation' : groomDesignation,
                    'fullNameOFBride' : fullNameOfBride,
                    'brideAge' : bridesAge,
                    'brideReligion' : bridesReligion,
                    'bridePlaceOfResidences' : bridesPlaceOfResidence,
                    'brideAddress' : bridesAddress,
                    'merrageTimeBrideDesignation' : bridesDesignation,
                    'groomFatherAndMotherName' : groomsFatherMotherName,
                    'groomFatherMotherAge' : groomsFatherMotherAge,
                    'GroomFateherMotherPLaceOfResidentes' : groomsParentPlaceOfResidence,
                    'groomFatherMotherAddress' : groomsParentAddress,
                    'brideFatherAndMotherName' : bridesFatherMotherName,
                    'brideFatherMotherAge' : bridesFatherMotherAge,
                    'brideFatherMotherPlaceOfResidences' : bridesParentPlaceOfResidence,
                    'brideFatherAndMotherAddress' : bridesParentAddress,
                    'nameOfBrahMan' : nameOfBrahman,
                    'firstFullNameOfWitness' : firstFullNameOfWitness,
                    'firstWitnessAddress' : firstWitnessAddress,
                    'secondFullNameOfWitness' : secondFullNameOfWitness,
                    'secondWitnessAddress' : secondWitnessAddress
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
                let url = "https://localhost:7277/MarriageRegistration/" + registrationNo;
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
        
          function prePopulate(id){
                setRegistrationNo(data[id-1].registrationNo)
                setMarriageDate(data[id-1].merrageDate)
                setMarriagePlace(data[id-1].merragePlace)
                setFullNameOfGroom(data[id-1].fullNameOFGroom)
                setGroomsAge(data[id-1].groomAge)
                setgroomsReligion(data[id-1].groomReligion)
                setGroomsPlaceOfResidence(data[id-1].groomPlaceOfResidences)
                setGroomsAddress(data[id-1].groomAddress)
                setGroomDesignation(data[id-1].merrageTimeGroomDesignation)
                setFullNameOfBride(data[id-1].fullNameOFBride)
                setBridesAge(data[id-1].brideAge)
                setBridesReligion(data[id-1].brideReligion)
                setBridesPlaceOfResidence(data[id-1].bridePlaceOfResidences)
                setBridesAddress(data[id-1].brideAddress)
                setBridesDesignation(data[id-1].merrageTimeBrideDesignation)
                setGroomsFatherMotherName(data[id-1].groomFatherAndMotherName)
                setGroomsFatherMotherAge(data[id-1].groomFatherMotherAge)
                setGroomsParentAddress(data[id-1].groomFatherMotherAddress)
                setGroomsParentPlaceOfResidence(data[id-1].groomsFateherMotherPLaceOfResidentes)
                setBridesFatherMotherName(data[id-1].brideFatherAndMotherName)
                setBridesFatherMotherAge(data[id-1].brideFatherMotherAge)
                setBridesParentAddress(data[id-1].brideFatherAndMotherAddress)
                setBridesPlaceOfResidence(data[id-1].brideFatherMotherPlaceOfResidences)
                setNameOfBrahman(data[id-1].nameOfBrahMan)
                setFirstFullNameOfWitness(data[id-1].firstFullNameOfWitness)
                setFirstWitnessAddress(data[id-1].firstWitnessAddress)
                setSecondFullNameOfWitness(data[id-1].secondFullNameOfWitness)
                setSecondWitnessAddress(data[id-1].secondWitnessAddress)
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
                width: "150",
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
                width: "150",
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
        
    return (
        <>
            <div>
            <h1 align="center">Marriage Registration Form</h1>
            </div>
            <form className="form-marriage">
            <div className="leftdiv">
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputRegistrationNo" className="form-label">Registration No.  </label>
                    <input value = {registrationNo} onChange={(e) => setRegistrationNo(e.target.value)} type="text" className="newStyle" id="inputRegistrationNo"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGroomsFatherMotherName" className="form-label">Groom's Father/Mother Name <span class="required">*</span> </label>
                    <input value = {groomsFatherMotherName} onChange={(e) => setGroomsFatherMotherName(e.target.value)} type="text" className="newStyle" id="inputGroomsFatherrName"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputMarriageDate" className="form-label">Marriage Date <span class="required">*</span> </label>
                    <input value = {marriageDate} onChange={(e) => setMarriageDate(e.target.value)} type="Date" className="newStyle" id="inputMarriageDate" /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAge" className="form-label">Age </label>
                    <input value = {groomsFatherMotherAge} onChange={(e) => setGroomsFatherMotherAge(e.target.value)} type="text" className="newStyle" id="inputAge"/>
                </div>
            </div>

            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputMarriagePlace" className="form-label">Marriage Place <span class="required">*</span> </label>
                    <input value = {marriagePlace} onChange={(e) => setMarriagePlace(e.target.value)} type="text" className="newStyle" id="inputMarriagePlace" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidence" className="form-label">Place Of Residence <span class="required">*</span> </label>
                    <input value = {groomsParentPlaceOfResidence} onChange={(e) => setGroomsParentPlaceOfResidence(e.target.value)} type="text" className="newStyle" id="inputPlaceOfResidence"/>
                </div>
            </div>

            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputFullNameOfGroom" className="form-label">Full Name Of Groom <span class="required">*</span> </label>
                    <input value = {fullNameOfGroom} onChange={(e) => setFullNameOfGroom(e.target.value)} type="text" className="newStyle" id="inputFullNameOfGroom"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address<span class="required">*</span>  </label>
                    <input value = {groomsParentAddress} onChange={(e) => setGroomsParentAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputGroomsAge" className="form-label">Age <span class="required">*</span> </label>
                    <input value = {groomsAge} onChange={(e) => setGroomsAge(e.target.value)} type="text" className="newStyle" id="inputAge"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputBridesFatherName" className="form-label">Bride's Father Name <span class="required">*</span> </label>
                    <input value = {bridesFatherMotherName} onChange={(e) => setBridesFatherMotherName(e.target.value)} type="text" className="newStyle" id="inputBridesFatherName"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputReligion" className="form-label">Religion <span class="required">*</span> </label>
                    <input value = {groomsReligion} onChange={(e) => setgroomsReligion(e.target.value)} type="text" className="newStyle" id="inputReligion"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAge" className="form-label">Age </label>
                    <input value = {bridesFatherMotherAge} onChange={(e) => setBridesFatherMotherAge(e.target.value)} type="text" className="newStyle" id="inputAge"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidences" className="form-label">Place Of Residence<span class="required">*</span>  </label>
                    <input value = {groomsPlaceOfResidence} onChange={(e) => setGroomsPlaceOfResidence(e.target.value)} type="text" className="newStyle" id="inputPlaceOfResidences"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidence" className="form-label">Place Of Residence <span class="required">*</span> </label>
                    <input value = {bridesParentPlaceOfResidence} onChange={(e) => setBridesParentPlaceOfResidence(e.target.value)} type="text" className="newStyle" id="inputPlaceOfResidence"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address <span class="required">*</span> </label>
                    <input value = {groomsAddress} onChange={(e) => setGroomsAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address <span class="required">*</span> </label>
                    <input value = {bridesParentAddress} onChange={(e) => setBridesParentAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputGroomDesignation" className="form-label">Groom Designation <span class="required">*</span> </label>
                    {/* <select id="inputGroomDesignation" className="htmlform-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select> */}
                    <input value = {groomDesignation} onChange={(e) => setGroomDesignation(e.target.value)} type="text" className="newStyle" id="inputGroomDesignation"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputNameOfBrahman" className="form-label">Full Name Of Brahman </label>
                    <input value = {nameOfBrahman} onChange={(e) => setNameOfBrahman(e.target.value)} type="text" className="newStyle" id="inputNameOfBrahman"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputFullNameOfBride" className="form-label">Full Name Of Bride <span class="required">*</span> </label>
                    <input value = {fullNameOfBride} onChange={(e) => setFullNameOfBride(e.target.value)} type="text" className="newStyle" id="inputFullNameOfGroom"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputFirstFullNameOfWitness" className="form-label">First Full Name Of Witness <span class="required">*</span> </label>
                    <input value = {firstFullNameOfWitness} onChange={(e) => setFirstFullNameOfWitness(e.target.value)} type="text" className="newStyle" id="inputFirstFullNameOfWitness"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputAge" className="form-label">Age <span class="required">*</span>  </label>
                    <input value = {bridesAge} onChange={(e) => setBridesAge(e.target.value)} type="text" className="newStyle" id="inputAge"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address <span class="required">*</span> </label>
                    <input value = {firstWitnessAddress} onChange={(e) => setFirstWitnessAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputReligion" className="form-label">Religion<span class="required">*</span>  </label>
                    <input value = {bridesReligion} onChange={(e) => setBridesReligion(e.target.value)} type="text" className="newStyle" id="inputReligion"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputSeconFullNameOfWitness" className="form-label">Second Full Name Of Witness </label>
                    <input value = {secondFullNameOfWitness} onChange={(e) => setSecondFullNameOfWitness(e.target.value)} type="text" className="newStyle" id="inputSecondFullNameOfWitness"/>
                </div>
            </div>

            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidences" className="form-label">Place Of Residence <span class="required">*</span> </label>
                    <input value = {bridesPlaceOfResidence} onChange={(e) => setBridesPlaceOfResidence(e.target.value)} type="text" className="newStyle" id="inputPlaceOfResidences"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address </label>
                    <input value = {secondWitnessAddress} onChange={(e) => setSecondWitnessAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
            </div>
                
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address<span class="required">*</span>  </label>
                    <input value = {bridesAddress} onChange={(e) => setBridesAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputBrideDesignation" className="form-label">Bride Designation <span class="required">*</span> </label>
                    {/* <select id="inputBrideDesignation" className="htmlform-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select> */}
                    <input value = {bridesDesignation} onChange={(e) => setBridesDesignation(e.target.value)} type="text" className="newStyle" id="inputBrideDesignation"/>
                </div>
            </div>
            
                

                <div className="mb-3 btns"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="ADD" className="btn btn-primary" onClick={addMarriageRegistration}>ADD </button> &nbsp;&nbsp;
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
              <th>Registration no<br/>Marriage Date</th>
              <th>Marriage Place<br/>Groom Name</th>
              <th>Groom Age<br/>Groom Religion</th>
              <th>Bride Name<br/>Bride Age</th>
              <th>Bride Religion<br/>Brahman Name</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.registrationNo}<br/>{val.merrageDate}</td>
                  <td>{val.merragePlace}<br/>{val.fullNameOFGroom}</td>
                  <td>{val.groomAge}<br/>{val.groomReligion}</td>
                  <td>{val.fullNameOFBride}<br/>{val.brideAge}</td>
                  <td>{val.brideReligion}<br/>{val.nameOfBrahMan}</td>
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
          // experimentalFeatures={{ columnGrouping: true }}
          // columnGroupingModel={columnGroupingModel}
          />
        </div>

        </Box>
        </>
    )
}

export default MarriageRegistrationForm;
