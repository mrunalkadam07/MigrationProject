import React, {useState, useEffect} from "react";
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import "./tablestyle.css";
import {Link} from "react-router-dom";

const services = new DeathRegistrationService();

export const BirthRegistrationForm = (props) => {
    // const [billNo, setBillNo] = useState('');
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
        if(registrationNo === "" && registrationDate==="" && dateOfBirth==="" && sex==="" &&
         childName==="" && fathersName==="" && mothersName==="" && address==="" && weightOfChild==="" && 
         birthPlace==="" && senderPerson==="" && motherResidence==="" && city==="" && districtName==="" && state==="" && 
         religion==="" && fatherEducationalQualification==="" && motherEducationalQualification==="" && 
         fatherOccupation==="" &&  motherOccupation==="" && motherAgeMarriageTime==="" && motherAgeAtChildTime==="" && 
         totalLiveChildWithThisChild==="" && deliveryTime==="")
        {
            alert("Enter all the required input Fields")
            console.log("Input fields are Empty");
            return
        }
        console.log("Data : ",registrationNo,registrationDate,dateOfBirth,sex,childName,fathersName,mothersName,address,weightOfChild,
        birthPlace,senderPerson,motherResidence,city,districtName,state,religion,fatherEducationalQualification,
        motherEducationalQualification,fatherOccupation,motherOccupation,motherAgeMarriageTime,motherAgeAtChildTime,
        totalLiveChildWithThisChild,deliveryTime);
        const data = {
            'registrationNo' : registrationNo,
            'dateOfBirth' : dateOfBirth,
            'sex' : sex,
            'childName' : childName,
            'fathersName' : fathersName,
            'mothersName' : mothersName,
            'address' : address,
            'weightOfChild' : weightOfChild,
            'birthPlace' : birthPlace,
            'senderPerson' : senderPerson,
            'motherResidence' : motherResidence,
            'city' : city,
            'districtName' : districtName,
            'state' : state,
            'religion' : religion,
            'fatherEducationalQualification' : fatherEducationalQualification,
            'motherEducationalQualification' : motherEducationalQualification,
            'fatherOccupation' : fatherOccupation,
            'motherOccupation' : motherOccupation,
            'motherAgeMarriageTime' : motherAgeMarriageTime,
            'motherAgeAtChildTime' : motherAgeAtChildTime,
            'totalLiveChildWithThisChild' : totalLiveChildWithThisChild,
            'deliveryTime' : deliveryTime

        }
        services.BirthRegistrationForm(data).then((data)=>{
            console.log(data)
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
            'dateOfBirth' : dateOfBirth,
            'sex' : sex,
            'childName' : childName,
            'fathersName' : fathersName,
            'mothersName' : mothersName,
            'address' : address,
            'weightOfChild' : weightOfChild,
            'birthPlace' : birthPlace,
            'senderPerson' : senderPerson,
            'motherResidence' : motherResidence,
            'city' : city,
            'districtName' : districtName,
            'state' : state,
            'religion' : religion,
            'fatherEducationalQualification' : fatherEducationalQualification,
            'motherEducationalQualification' : motherEducationalQualification,
            'fatherOccupation' : fatherOccupation,
            'motherOccupation' : motherOccupation,
            'motherAgeMarriageTime' : motherAgeMarriageTime,
            'motherAgeAtChildTime' : motherAgeAtChildTime,
            'totalLiveChildWithThisChild' : totalLiveChildWithThisChild,
            'deliveryTime' : deliveryTime
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
        let url = "https://localhost:7277/BirthRegistration/" + registrationNo;
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
        setDateOfBirth(data[id-1].dateOfBirth)
        setSex(data[id-1].sex)
        setChildName(data[id-1].childName)
        setFathersName(data[id-1].fathersName)
        setMothersName(data[id-1].mothersName)
        setAddress(data[id-1].address)
        setWeightOfChild(data[id-1].weightOfChild)
        setBirthPlace(data[id-1].birthPlace)
        setSendorPerson(data[id-1].senderPerson)
        setMotherResidence(data[id-1].motherResidence)
        setCity(data[id-1].city)
        setDistrictName(data[id-1].districtName)
        setState(data[id-1].state)
        setReligion(data[id-1].religion)
        setFatherEducationalQualification(data[id-1].fatherEducationalQualification)
        setMotherEducationalQualification(data[id-1].motherEducationalQualification)
        setFatherOccupation(data[id-1].fatherOccupation)
        setMotherOccupation(data[id-1].motherOccupation)
        setMotherAgeMarriageTime(data[id-1].motherAgeMarriageTime)
        setMotherAgeAtChildTime(data[id-1].motherAgeAtChildTime)
        setTotalLiveChildWithThisChild(data[id-1].totalLiveChildWithThisChild)
        setDeliveryTime(data[id-1].deliveryTime)
  }

  useEffect(() => {
    fetchData();
  }, []);
        

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
                        <label htmlFor="inputCity" className="form-label">City/Village  </label>
                        <input value = {city} onChange={(e) => setCity(e.target.value)} type="text" className="newStyle" id="inputCity"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputRegistrationDate" className="form-label">Registration Date  </label>
                        <input value = {registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} type="Date" className="newStyle" id="inputRegistrationDate"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDistrict" className="form-label">District Name  </label>
                        <input value = {districtName} onChange={(e) => setDistrictName(e.target.value)} type="text" className="newStyle" id="inputDistrict"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputDateOfBirth" className="form-label">Date Of Birth  </label>
                        <input value = {dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type="text" className="newStyle" id="inputDateOfBirth"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputState" className="form-label">State  </label>
                        <input value = {state} onChange={(e) => setState(e.target.value)} type="text" className="newStyle" id="inputState"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputSex" className="form-label">Sex  </label>
                        {/* <select id="inputSex" className="form-select">
                        <option selected>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        </select> */}
                        <input value = {sex} onChange={(e) => setSex(e.target.value)} type="text" className="newStyle" id="inputSex"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputReligion" className="form-label">Religion  </label>
                        <input value = {religion} onChange={(e) => setReligion(e.target.value)} type="text" className="newStyle" id="inputReligion"/>
                    </div>
                </div>
                
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputChildName" className="form-label">Child Name  </label>
                        <input value = {childName} onChange={(e) => setChildName(e.target.value)} type="text" className="newStyle" id="inputChildName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputFatherEducationalQualification" className="form-label">Father's Educational Qualification  </label>
                        <input value = {fatherEducationalQualification} onChange={(e) => setFatherEducationalQualification(e.target.value)} type="text" className="newStyle" id="inputFatherEducationalQualification"/>
                    </div>
                </div>
                
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputFathersName" className="form-label">Father's Name  </label>
                        <input value = {fathersName} onChange={(e) => setFathersName(e.target.value)} type="text" className="newStyle" id="inputFathersName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputMotherEducationalQualification" className="form-label">Mother's Educational Qualification  </label>
                        <input value = {motherEducationalQualification} onChange={(e) => setMotherEducationalQualification(e.target.value)} type="text" className="newStyle" id="inputMotherEducationalQualification"/>
                    </div>
                </div>
                
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputMothersName" className="form-label">Mother's Name  </label>
                        <input value = {mothersName} onChange={(e) => setMothersName(e.target.value)} type="text" className="newStyle" id="inputMothersName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputFathersOccupation" className="form-label">Father's Occupation  </label>
                        <input value = {fatherOccupation} onChange={(e) => setFatherOccupation(e.target.value)} type="text" className="newStyle" id="inputFathersOccupation"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputAddress" className="form-label">Address  </label>
                        <input value = {address} onChange={(e) => setAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputMothersOccupation" className="form-label">Mother's Occupation  </label>
                        <input value = {motherOccupation} onChange={(e) => setMotherOccupation(e.target.value)} type="text" className="newStyle" id="inputMothersOccupation"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputWeightOfChild" className="form-label">Weight Of Child(Kg)  </label>
                        <input value = {weightOfChild} onChange={(e) => setWeightOfChild(e.target.value)} type="text" className="newStyle" id="inputWeightOfChild"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputMothersAge" className="form-label">Mother's Age at Marriage Time </label>
                        <input value = {motherAgeMarriageTime} onChange={(e) => setMotherAgeMarriageTime(e.target.value)} type="text" className="newStyle" id="inputMothersAge"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputBirthPlace" className="form-label">Birth Place  </label>
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
                        <label htmlFor="inputTotalLiveChildWithThisChild" className="form-label">Total Live Child with this Child  </label>
                        <input value = {totalLiveChildWithThisChild} onChange={(e) => setTotalLiveChildWithThisChild(e.target.value)} type="text" className="newStyle" id="inputTotalLiveChildWithThisChild"/>
                    </div>
                </div>

                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputMothersResidence" className="form-label">Mother's Residence  </label>
                        <input value = {motherResidence} onChange={(e) => setMotherResidence(e.target.value)} type="text" className="newStyle" id="inputMothersResidence"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDeliveryType" className="form-label">Delivery Type  </label>
                        <input value = {deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} type="text" className="newStyle" id="inputDeliveryType"/>
                    </div>
                </div>
                
                    <div className="mb-3 btns"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="ADD" className="btn btn-outline-primary" onClick={addBirthRegistration}>ADD </button> &nbsp;&nbsp;
                        {/* <button type="SAVE" classNameName="btn btn-primary">SAVE </button> &nbsp;&nbsp; */}
                        <button type="MODIFY" className="btn btn-outline-success" onClick={modifyData}>MODIFY </button> &nbsp;&nbsp;
                        <button type="DELETE" className="btn btn-outline-danger"onClick={deleteData}>DELETE </button> &nbsp;&nbsp;
                        <button type="CANCEL" className="btn btn-outline-warning">CANCEL </button> &nbsp;&nbsp;
                        {/* <button type="FIRST" classNameName="btn btn-primary">FIRST </button> &nbsp;&nbsp;
                        <button type="LAST" classNameName="btn btn-primary">LAST </button> &nbsp;&nbsp;
                        <button type="NEXT" classNameName="btn btn-primary">NEXT </button> &nbsp;&nbsp;
                        <button type="PREVIOUS" classNameName="btn btn-primary">PREVIOUS </button> &nbsp;&nbsp; */}
                        <button type="EXIT" className="btn btn-outline-dark">EXIT</button>
                    </div>

                </div>
            </form>
            
            <div className="tableData">
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
        </div>
        </>
    )
}

export default BirthRegistrationForm;