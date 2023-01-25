import React, {useState, useEffect} from "react";
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import './tablestyle.css';
import {Link} from "react-router-dom";
// import { useNavigate } from "react-router-dom";

        const services = new DeathRegistrationService();

        export const MarriageRegistrationForm = (props) => {
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
                if(registrationNo === "" && marriageDate==="" && marriagePlace==="" && fullNameOfGroom==="" &&
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
                    'registrationNo' : registrationNo,
                    'marriageDate' : marriageDate,
                    'marriagePlace' : marriagePlace,
                    'fullNameOfGroom' : fullNameOfGroom,
                    'groomsAge' : groomsAge,
                    'groomsReligion' : groomsReligion,
                    'groomsPlaceOfResidence' : groomsPlaceOfResidence,
                    'groomsAddress' : groomsAddress,
                    'groomDesignation' : groomDesignation,
                    'fullNameOfBride' : fullNameOfBride,
                    'bridesAge' : bridesAge,
                    'bridesReligion' : bridesReligion,
                    'bridesPlaceOfResidence' : bridesPlaceOfResidence,
                    'bridesAddress' : bridesAddress,
                    'bridesDesignation' : bridesDesignation,
                    'groomsFatherName' : groomsFatherName,
                    'groomsMotherName' : groomsMotherName,
                    'groomsFatherAge' : groomsFatherAge,
                    'groomsParentAddress' : groomsParentAddress,
                    'groomsParentPlaceOfResidence' : groomsParentPlaceOfResidence,
                    'bridesFatherName' : bridesFatherName,
                    'bridesMotherName' : bridesMotherName,
                    'bridesFatherAge' : bridesFatherAge,
                    'bridesParentAddress' : bridesParentAddress,
                    'bridesParentPlaceOfResidence' : bridesParentPlaceOfResidence,
                    'nameOfBrahman' : nameOfBrahman,
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
                    'marriageDate' : marriageDate,
                    'marriagePlace' : marriagePlace,
                    'fullNameOfGroom' : fullNameOfGroom,
                    'groomsAge' : groomsAge,
                    'groomsReligion' : groomsReligion,
                    'groomsPlaceOfResidence' : groomsPlaceOfResidence,
                    'groomsAddress' : groomsAddress,
                    'groomDesignation' : groomDesignation,
                    'fullNameOfBride' : fullNameOfBride,
                    'bridesAge' : bridesAge,
                    'bridesReligion' : bridesReligion,
                    'bridesPlaceOfResidence' : bridesPlaceOfResidence,
                    'bridesAddress' : bridesAddress,
                    'bridesDesignation' : bridesDesignation,
                    'groomsFatherName' : groomsFatherName,
                    'groomsMotherName' : groomsMotherName,
                    'groomsFatherAge' : groomsFatherAge,
                    'groomsParentAddress' : groomsParentAddress,
                    'groomsParentPlaceOfResidence' : groomsParentPlaceOfResidence,
                    'bridesFatherName' : bridesFatherName,
                    'bridesMotherName' : bridesMotherName,
                    'bridesFatherAge' : bridesFatherAge,
                    'bridesParentAddress' : bridesParentAddress,
                    'bridesParentPlaceOfResidence' : bridesParentPlaceOfResidence,
                    'nameOfBrahman' : nameOfBrahman,
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
                    body: JSON.stringify({data})
                    
                    
                }).then(response => response.json())
                .then((result) => { 
                    console.log(result); 
                     
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
                setMarriageDate(data[id-1].marriageDate)
                setMarriagePlace(data[id-1].marriagePlace)
                setFullNameOfGroom(data[id-1].fullNameOfGroom)
                setGroomsAge(data[id-1].groomsAge)
                setgroomsReligion(data[id-1].groomsReligion)
                setGroomsPlaceOfResidence(data[id-1].groomsPlaceOfResidence)
                setGroomsAddress(data[id-1].groomsAddress)
                setGroomDesignation(data[id-1].groomDesignation)
                setFullNameOfBride(data[id-1].fullNameOfBride)
                setBridesAge(data[id-1].bridesAge)
                setBridesReligion(data[id-1].bridesReligion)
                setBridesPlaceOfResidence(data[id-1].bridesPlaceOfResidence)
                setBridesAddress(data[id-1].bridesAddress)
                setBridesDesignation(data[id-1].bridesDesignation)
                setGroomsFatherName(data[id-1].groomsFatherName)
                setGroomsMotherName(data[id-1].groomsMotherName)
                setGroomsFatherAge(data[id-1].groomsFatherAge)
                setGroomsParentAddress(data[id-1].groomsParentAddress)
                setGroomsParentPlaceOfResidence(data[id-1].groomsParentPlaceOfResidence)
                setBridesFatherName(data[id-1].bridesFatherName)
                setBridesMotherName(data[id-1].bridesMotherName)
                setBridesFatherAge(data[id-1].bridesFatherAge)
                setBridesParentAddress(data[id-1].bridesParentAddress)
                setBridesPlaceOfResidence(data[id-1].bridesPlaceOfResidence)
                setNameOfBrahman(data[id-1].nameOfBrahman)
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
            <h1 align="center">Marriage Registration Form</h1>
            <form className="form marriage">
            <div className="leftdiv">
                <div className="mb-3">
                    <label htmlFor="inputRegistrationNo" className="form-label">Registration No </label>
                    <input value = {registrationNo} onChange={(e) => setRegistrationNo(e.target.value)} type="text" className="htmlform-control" id="inputRegistrationNo"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputMarriageDate" className="form-label">Marriage Date</label>
                    <input value = {marriageDate} onChange={(e) => setMarriageDate(e.target.value)} type="Date" className="htmlform-control" id="inputMarriageDate" /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="inputMarriagePlace" className="form-label">Marriage Place</label>
                    <input value = {marriagePlace} onChange={(e) => setMarriagePlace(e.target.value)} type="text" className="htmlform-control" id="inputMarriagePlace" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputFullNameOfGroom" className="form-label">Full Name Of Groom</label>
                    <input value = {fullNameOfGroom} onChange={(e) => setFullNameOfGroom(e.target.value)} type="text" className="htmlform-control" id="inputFullNameOfGroom"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGroomsAge" className="form-label">Age</label>
                    <input value = {groomsAge} onChange={(e) => setGroomsAge(e.target.value)} type="text" className="htmlform-control" id="inputAge"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputReligion" className="form-label">Religion</label>
                    <input value = {groomsReligion} onChange={(e) => setgroomsReligion(e.target.value)} type="text" className="htmlform-control" id="inputReligion"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidences" className="form-label">Place Of Residence</label>
                    <input value = {groomsPlaceOfResidence} onChange={(e) => setGroomsPlaceOfResidence(e.target.value)} type="text" className="htmlform-control" id="inputPlaceOfResidences"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input value = {groomsAddress} onChange={(e) => setGroomsAddress(e.target.value)} type="text" className="htmlform-control" id="inputAddress"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGroomDesignation" className="form-label">Groom Designation</label>
                    {/* <select id="inputGroomDesignation" classname="htmlform-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select> */}
                    <input value = {groomDesignation} onChange={(e) => setGroomDesignation(e.target.value)} type="text" className="htmlform-control" id="inputGroomDesignation"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="inputFullNameOfBride" className="form-label">Full Name Of Bride</label>
                    <input value = {fullNameOfBride} onChange={(e) => setFullNameOfBride(e.target.value)} type="text" className="htmlform-control" id="inputFullNameOfGroom"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAge" className="form-label">Age</label>
                    <input value = {bridesAge} onChange={(e) => setBridesAge(e.target.value)} type="text" className="htmlform-control" id="inputAge"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputReligion" className="form-label">Religion</label>
                    <input value = {bridesReligion} onChange={(e) => setBridesReligion(e.target.value)} type="text" className="htmlform-control" id="inputReligion"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidences" className="form-label">Place Of Residence</label>
                    <input value = {bridesPlaceOfResidence} onChange={(e) => setBridesPlaceOfResidence(e.target.value)} type="text" className="htmlform-control" id="inputPlaceOfResidences"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input value = {bridesAddress} onChange={(e) => setBridesAddress(e.target.value)} type="text" className="htmlform-control" id="inputAddress"/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="inputBrideDesignation" className="form-label">Bride Designation</label>
                    {/* <select id="inputBrideDesignation" classname="htmlform-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select> */}
                    <input value = {bridesDesignation} onChange={(e) => setBridesDesignation(e.target.value)} type="text" className="htmlform-control" id="inputBrideDesignation"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGroomsFatherName" className="form-label">Groom's Father Name</label>
                    <input value = {groomsFatherName} onChange={(e) => setGroomsFatherName(e.target.value)} type="text" className="htmlform-control" id="inputGroomsFatherrName"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGroomsMotherName" className="form-label">Groom's Mother Name</label>
                    <input value = {groomsMotherName} onChange={(e) => setGroomsMotherName(e.target.value)} type="text" className="htmlform-control" id="inputGroomsMotherName"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAge" className="form-label">Age</label>
                    <input value = {groomsFatherAge} onChange={(e) => setGroomsFatherAge(e.target.value)} type="text" className="htmlform-control" id="inputAge"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidence" className="form-label">Place Of Residence</label>
                    <input value = {groomsParentPlaceOfResidence} onChange={(e) => setGroomsParentPlaceOfResidence(e.target.value)} type="text" className="htmlform-control" id="inputPlaceOfResidence"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input value = {groomsParentAddress} onChange={(e) => setGroomsParentAddress(e.target.value)} type="text" className="htmlform-control" id="inputAddress"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="inputBridesFatherName" className="form-label">Bride's Father Name</label>
                    <input value = {bridesFatherName} onChange={(e) => setBridesFatherName(e.target.value)} type="text" className="htmlform-control" id="inputBridesFatherName"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputBridesMotherName" className="form-label">Bride's Mother Name</label>
                    <input value = {bridesMotherName} onChange={(e) => setBridesMotherName(e.target.value)} type="text" className="htmlform-control" id="inputBridesMotherName"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAge" className="form-label">Age</label>
                    <input value = {bridesFatherAge} onChange={(e) => setBridesFatherAge(e.target.value)} type="text" className="htmlform-control" id="inputAge"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPlaceOfResidence" className="form-label">Place Of Residence</label>
                    <input value = {bridesParentPlaceOfResidence} onChange={(e) => setBridesParentPlaceOfResidence(e.target.value)} type="text" className="htmlform-control" id="inputPlaceOfResidence"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input value = {bridesParentAddress} onChange={(e) => setBridesParentAddress(e.target.value)} type="text" className="htmlform-control" id="inputAddress"/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="inputNameOfBrahman" className="form-label">Full Name Of Brahman</label>
                    <input value = {nameOfBrahman} onChange={(e) => setNameOfBrahman(e.target.value)} type="text" className="htmlform-control" id="inputNameOfBrahman"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputFirstFullNameOfWitness" className="form-label">First Full Name Of Witness</label>
                    <input value = {firstFullNameOfWitness} onChange={(e) => setFirstFullNameOfWitness(e.target.value)} type="text" className="htmlform-control" id="inputFirstFullNameOfWitness"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input value = {firstWitnessAddress} onChange={(e) => setFirstWitnessAddress(e.target.value)} type="text" className="htmlform-control" id="inputAddress"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputSeconFullNameOfWitness" className="form-label">Second Full Name Of Witness</label>
                    <input value = {secondWitnessAddress} onChange={(e) => setSecondFullNameOfWitness(e.target.value)} type="text" className="htmlform-control" id="inputSecondFullNameOfWitness"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input value = {secondWitnessAddress} onChange={(e) => setSecondWitnessAddress(e.target.value)} type="text" className="htmlform-control" id="inputAddress"/>
                </div>
                <div className="mb-3"><br />
                    <button type="ADD" className="btn btn-outline-primary" >ADD </button> &nbsp;&nbsp;
                        {/* <button type="SAVE" classNameName="btn btn-primary">SAVE </button> &nbsp;&nbsp; */}
                        <button type="MODIFY" className="btn btn-outline-success" onClick={modifyData}>MODIFY </button> &nbsp;&nbsp;
                        <button type="DELETE" className="btn btn-outline-danger"onClick={deleteData}>DELETE </button> &nbsp;&nbsp;
                        <Link to="/Navbar"><button type="CANCEL" className="btn btn-outline-warning" >CANCEL </button></Link> &nbsp;&nbsp;
                        {/* <button type="FIRST" classNameName="btn btn-primary">FIRST </button> &nbsp;&nbsp;
                        <button type="LAST" classNameName="btn btn-primary">LAST </button> &nbsp;&nbsp;
                        <button type="NEXT" classNameName="btn btn-primary">NEXT </button> &nbsp;&nbsp;
                        <button type="PREVIOUS" classNameName="btn btn-primary">PREVIOUS </button> &nbsp;&nbsp; */}
                        <Link to="/login"><button type="EXIT" className="btn btn-outline-dark">EXIT</button></Link>
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
