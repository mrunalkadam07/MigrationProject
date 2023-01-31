import React, {useState, useEffect, useNavigate} from "react";
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import './tablestyle.css';
import {Link} from "react-router-dom";
// import { useNavigate } from "react-router-dom";

        const services = new DeathRegistrationService();

        export const MarriageRegistrationForm = (props) => {
            // const navigate = useNavigate();
            // const logout = () =>{
            //     localStorage.setItem("Token","");
            //     navigate("/login");
            // }
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
            const [groomsFatherName, setGroomsFatherName] = useState("");
            const [groomsMotherName, setGroomsMotherName] = useState("");
            const [groomsFatherAge, setGroomsFatherAge] = useState ("");
            const [groomsParentAddress, setGroomsParentAddress] = useState ("");
            const [groomsParentPlaceOfResidence, setGroomsParentPlaceOfResidence] = useState ("")
            const [bridesFatherName, setBridesFatherName] = useState("");
            const [bridesMotherName, setBridesMotherName] = useState("");
            const [bridesFatherAge, setBridesFatherAge] = useState ("");
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
                 bridesPlaceOfResidence==="" && bridesAddress==="" && bridesDesignation==="" && groomsFatherName==="" &&
                 groomsMotherName==="" && groomsFatherAge==="" && groomsParentAddress==="" && groomsParentPlaceOfResidence ==="" &&
                 bridesFatherName==="" && bridesMotherName==="" && bridesFatherAge==="" && bridesParentAddress==="" && 
                 bridesParentPlaceOfResidence && nameOfBrahman==="" && firstFullNameOfWitness==="" && firstWitnessAddress==="" && 
                 secondFullNameOfWitness==="" && secondWitnessAddress==="")
                {
                    alert("Enter all the required input Fields")
                    console.log("Input fields are Empty");
                    return
                }
                console.log("Data : ",registrationNo,marriageDate,marriagePlace,fullNameOfGroom,groomsAge,groomsReligion,groomsPlaceOfResidence,
                groomsAddress,groomDesignation,fullNameOfBride,bridesAge,bridesReligion,bridesPlaceOfResidence,bridesAddress,bridesDesignation,
                groomsFatherName,groomsMotherName,groomsFatherAge,groomsParentAddress,groomsParentPlaceOfResidence,bridesFatherName,bridesMotherName,bridesFatherAge,
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
                    'groomFatherAndMotherName' : groomsFatherName,
                    'groomFatherMotherAge' : groomsFatherAge,
                    'groomsFateherMotherPLaceOfResidentes' : groomsParentPlaceOfResidence,
                    'groomsFatherMotherAddress' : groomsParentAddress,
                    'brideFatherAndMotherName' : bridesFatherName,
                    'brideFatherMotherAge' : bridesFatherAge,
                    'brideFatherMotherPlaceOfResidences' : bridesParentPlaceOfResidence,
                    'bridesFatherAndMotherAddress' : bridesParentAddress,
                    'nameOfBrahMan' : nameOfBrahman,
                    'firstFullNameOfWitness' : firstFullNameOfWitness,
                    'firstWitnessAddress' : firstWitnessAddress,
                    'secondFullNameOfWitness' : secondFullNameOfWitness,
                    'secondWitnessAddress' : secondWitnessAddress

                }
                services.MarriageRegistration(data).then((data)=>{
                    console.log(data)
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
                    'groomFatherAndMotherName' : groomsFatherName,
                    'groomFatherMotherAge' : groomsFatherAge,
                    'groomsFateherMotherPLaceOfResidentes' : groomsParentPlaceOfResidence,
                    'groomsFatherMotherAddress' : groomsParentAddress,
                    'brideFatherAndMotherName' : bridesFatherName,
                    'brideFatherMotherAge' : bridesFatherAge,
                    'brideFatherMotherPlaceOfResidences' : bridesParentPlaceOfResidence,
                    'bridesFatherAndMotherAddress' : bridesParentAddress,
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
                   // console.log(data); 
                  }) 
                  .catch((err) => { 
                    console.log(err.message); 
                  }); 
        
            }
        
            const deleteData = (e) => {
                e.preventDefault();
                let url = "https://localhost:7277/MarriageRegistration" + registrationNo;
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
                setGroomsFatherName(data[id-1].groomFatherAndMotherName)
                setGroomsFatherAge(data[id-1].groomFatherMotherAge)
                setGroomsParentAddress(data[id-1].groomFatherMotherAddress)
                setGroomsParentPlaceOfResidence(data[id-1].groomsFateherMotherPLaceOfResidentes)
                setBridesFatherName(data[id-1].brideFatherAndMotherName)
                setBridesFatherAge(data[id-1].brideFatherMotherAge)
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
                    <label htmlFor="inputGroomsFatherName" className="form-label">Groom's Father Name </label>
                    <input value = {groomsFatherName} onChange={(e) => setGroomsFatherName(e.target.value)} type="text" className="newStyle" id="inputGroomsFatherrName"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputMarriageDate" className="form-label">Marriage Date </label>
                    <input value = {marriageDate} onChange={(e) => setMarriageDate(e.target.value)} type="Date" className="newStyle" id="inputMarriageDate" /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGroomsMotherName" className="form-label">Groom's Mother Name </label>
                    <input value = {groomsMotherName} onChange={(e) => setGroomsMotherName(e.target.value)} type="text" className="newStyle" id="inputGroomsMotherName"/>
                </div>
            </div>

            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputMarriagePlace" className="form-label">Marriage Place </label>
                    <input value = {marriagePlace} onChange={(e) => setMarriagePlace(e.target.value)} type="text" className="newStyle" id="inputMarriagePlace" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAge" className="form-label">Age </label>
                    <input value = {groomsFatherAge} onChange={(e) => setGroomsFatherAge(e.target.value)} type="text" className="newStyle" id="inputAge"/>
                </div>
            </div>

            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputFullNameOfGroom" className="form-label">Full Name Of Groom </label>
                    <input value = {fullNameOfGroom} onChange={(e) => setFullNameOfGroom(e.target.value)} type="text" className="newStyle" id="inputFullNameOfGroom"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidence" className="form-label">Place Of Residence </label>
                    <input value = {groomsParentPlaceOfResidence} onChange={(e) => setGroomsParentPlaceOfResidence(e.target.value)} type="text" className="newStyle" id="inputPlaceOfResidence"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputGroomsAge" className="form-label">Age </label>
                    <input value = {groomsAge} onChange={(e) => setGroomsAge(e.target.value)} type="text" className="newStyle" id="inputAge"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address </label>
                    <input value = {groomsParentAddress} onChange={(e) => setGroomsParentAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputReligion" className="form-label">Religion </label>
                    <input value = {groomsReligion} onChange={(e) => setgroomsReligion(e.target.value)} type="text" className="newStyle" id="inputReligion"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputBridesFatherName" className="form-label">Bride's Father Name </label>
                    <input value = {bridesFatherName} onChange={(e) => setBridesFatherName(e.target.value)} type="text" className="newStyle" id="inputBridesFatherName"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidences" className="form-label">Place Of Residence </label>
                    <input value = {groomsPlaceOfResidence} onChange={(e) => setGroomsPlaceOfResidence(e.target.value)} type="text" className="newStyle" id="inputPlaceOfResidences"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputBridesMotherName" className="form-label">Bride's Mother Name </label>
                    <input value = {bridesMotherName} onChange={(e) => setBridesMotherName(e.target.value)} type="text" className="newStyle" id="inputBridesMotherName"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address </label>
                    <input value = {groomsAddress} onChange={(e) => setGroomsAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAge" className="form-label">Age </label>
                    <input value = {bridesFatherAge} onChange={(e) => setBridesFatherAge(e.target.value)} type="text" className="newStyle" id="inputAge"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputGroomDesignation" className="form-label">Groom Designation </label>
                    {/* <select id="inputGroomDesignation" className="htmlform-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select> */}
                    <input value = {groomDesignation} onChange={(e) => setGroomDesignation(e.target.value)} type="text" className="newStyle" id="inputGroomDesignation"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidence" className="form-label">Place Of Residence </label>
                    <input value = {bridesParentPlaceOfResidence} onChange={(e) => setBridesParentPlaceOfResidence(e.target.value)} type="text" className="newStyle" id="inputPlaceOfResidence"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputFullNameOfBride" className="form-label">Full Name Of Bride </label>
                    <input value = {fullNameOfBride} onChange={(e) => setFullNameOfBride(e.target.value)} type="text" className="newStyle" id="inputFullNameOfGroom"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address </label>
                    <input value = {bridesParentAddress} onChange={(e) => setBridesParentAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputAge" className="form-label">Age </label>
                    <input value = {bridesAge} onChange={(e) => setBridesAge(e.target.value)} type="text" className="newStyle" id="inputAge"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputNameOfBrahman" className="form-label">Full Name Of Brahman </label>
                    <input value = {nameOfBrahman} onChange={(e) => setNameOfBrahman(e.target.value)} type="text" className="newStyle" id="inputNameOfBrahman"/>
                </div>
            </div>
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputReligion" className="form-label">Religion </label>
                    <input value = {bridesReligion} onChange={(e) => setBridesReligion(e.target.value)} type="text" className="newStyle" id="inputReligion"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputFirstFullNameOfWitness" className="form-label">First Full Name Of Witness </label>
                    <input value = {firstFullNameOfWitness} onChange={(e) => setFirstFullNameOfWitness(e.target.value)} type="text" className="newStyle" id="inputFirstFullNameOfWitness"/>
                </div>
            </div>

            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidences" className="form-label">Place Of Residence </label>
                    <input value = {bridesPlaceOfResidence} onChange={(e) => setBridesPlaceOfResidence(e.target.value)} type="text" className="newStyle" id="inputPlaceOfResidences"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address </label>
                    <input value = {firstWitnessAddress} onChange={(e) => setFirstWitnessAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
            </div>
                
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address </label>
                    <input value = {bridesAddress} onChange={(e) => setBridesAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputSeconFullNameOfWitness" className="form-label">Second Full Name Of Witness </label>
                    <input value = {secondWitnessAddress} onChange={(e) => setSecondFullNameOfWitness(e.target.value)} type="text" className="newStyle" id="inputSecondFullNameOfWitness"/>
                </div>
            </div>
            
            <div className="div1">
                <div className="mb-3">
                    <label htmlFor="inputBrideDesignation" className="form-label">Bride Designation </label>
                    {/* <select id="inputBrideDesignation" className="htmlform-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select> */}
                    <input value = {bridesDesignation} onChange={(e) => setBridesDesignation(e.target.value)} type="text" className="newStyle" id="inputBrideDesignation"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address </label>
                    <input value = {secondWitnessAddress} onChange={(e) => setSecondWitnessAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                </div>
            </div>
                

                <div className="mb-3 btns"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="ADD" className="btn btn-outline-primary" onClick={addMarriageRegistration}>ADD </button> &nbsp;&nbsp;
                    {/* <button type="SAVE" classNameName="btn btn-primary">SAVE </button> &nbsp;&nbsp; */}
                    <button type="MODIFY" className="btn btn-outline-success" onClick={modifyData}>MODIFY </button> &nbsp;&nbsp;
                    <button type="DELETE" className="btn btn-outline-danger"onClick={deleteData}>DELETE </button> &nbsp;&nbsp;
                    <Link to="/Navbar"><button type="CANCEL" className="btn btn-warning" >CANCEL </button></Link> &nbsp;&nbsp;
                    <Link to="/login"><button type="EXIT" className="btn btn-outline-dark">LOGOUT</button></Link>
                    </div>
            </div>

             
           
            </form>
            <div className="tableData">
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
                  <td>{val.registrationNo}<br/>{val.marriageDate}</td>
                  <td>{val.marriagePlace}<br/>{val.fullNameOfGroom}</td>
                  <td>{val.groomsAge}<br/>{val.groomsReligion}</td>
                  <td>{val.fullNameOfBride}<br/>{val.bridesAge}</td>
                  <td>{val.bridesReligion}<br/>{val.nameOfBrahman}</td>
                  <td>
                  <button onClick={()=>prePopulate(val.registrationNo)}>Update</button>
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
        </>
    )
}

export default MarriageRegistrationForm;
