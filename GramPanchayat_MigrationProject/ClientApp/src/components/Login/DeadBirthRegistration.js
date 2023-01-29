import React, {useState, useEffect} from "react";
import './Assessment.list.css';
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import { Link } from "react-router-dom";

const services = new DeathRegistrationService();

        export const DeadBirthRegistration = (props) => {
            // const [billNo, setBillNo] = useState('');
            const [registrationNo, setRegistrationNo] = useState('');
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
                if(registrationNo==="" && registrationDate==="" && fatherName==="" && motherName==="" && year==="" && city==="" &&
                taluka==="" && district==="" && deadBirthDate==="" && sex==="" && address==="" &&
                birthPlace==="" && detailSender==="" && nameOfRegistar==="")
                {
                    alert("Enter all the required input Fields")
                    console.log("Input fields are Empty");
                    return
                }
                console.log("Data : ",registrationNo,registrationDate,fatherName,motherName,year,city,taluka,district,
                deadBirthDate,sex,address,birthPlace,detailSender,nameOfRegistar);
                const data = {

                    'registrationNo' : registrationNo,
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
                services.DeadBirthRegistration(data).then((data)=>{
                    console.log(data)
                }).catch((error)=>{
                    console.log(error)
                })
            }
            // const modifyAssessmentList = (e) =>{
            //     e.preventDefault();
            //     if(formNo === "")
            //     {
            //         alert("Enter the bill No to update the details.")
            //         console.log("Input fields are Empty");
            //         return
            //     }
            //     console.log("Data : ",formNo,wardNo,data,oldAssessmentNo,ownersName,holdersName,propertyAddress,occupiedBy,useOfPropertyType,
            //     locationCode,yearOfBuildup,totalAreaOfBuildupSqMeter,openAreaWhereNoBuildupSqMeter,openAreaPlotSqMeter,assessedPropertyTax,
            //     wardTotal);
            //     const data = {
                    
            //         formNo : formNo,
            //         wardNo : wardNo,
            //         date : date,
            //         oldAssessmentNo : oldAssessmentNo,
            //         ownersName : ownersName,
            //         holdersName : holdersName,
            //         propertyAddress : propertyAddress,
            //         occupiedBy : occupiedBy,
            //         useOfPropertyType : useOfPropertyType,
            //         locationCode : locationCode,
            //         yearOfBuildup : yearOfBuildup,
            //         totalAreaOfBuildupSqMeter : totalAreaOfBuildupSqMeter,
            //         openAreaWhereNoBuildupSqMeter : openAreaWhereNoBuildupSqMeter,
            //         openAreaPlotSqMeter : openAreaPlotSqMeter,
            //         assessedPropertyTax : assessedPropertyTax,
            //         wardTotal : wardTotal
            //     }
            //     services.AssessmentList(data).then((data)=>{
            //         console.log(data)
            //     }).catch((error)=>{
            //         console.log(error)
            //     })

                const modifyData = (e) => {
                    e.preventDefault();
                    let url = "https://localhost:7277/DeadBirthReg/" + registrationNo;
                    console.log(url);
                    const data = {

                        'registrationNo' : registrationNo,
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
                    let url = "https://localhost:7277/DeadBirthReg/" + registrationNo;
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
                    setRegistrationNo(data[id-1].formNo)
                    setRegistrationDate(data[id-1].wardNo)
                    setFatherName(data[id-1].date)
                    setMotherName(data[id-1].oldAssessmentNo)
                    setYear(data[id-1].ownersName)
                    setCity(data[id-1].holdersName)
                    setTaluka(data[id-1].propertyAddress)
                    setDistrict(data[id-1].occupiedBy)
                    setDeadBirthDate(data[id-1].useOfPropertyType)
                    setSex(data[id-1].locationCode)
                    setAddress(data[id-1].yearOfBuildup)
                    setBirthPlace(data[id-1].totalAreaOfBuildupSqMeter)
                    setDetailSender(data[id-1].openAreaWhereNoBuildupSqMeter)
                    setNameOfRegistar(data[id-1].openAreaPlotSqMeter)
              }
            
              useEffect(() => {
                fetchData();
              }, []);

            
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
                            <label htmlFor="inputRegistrationDate" className="form-label">Registration Date  </label>
                            <input value = {registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} type="Date" className="newStyle" id="inputRegistrationDate"/>
                        </div>
                    </div>
                    
                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputFatherName" className="form-label">Father's Name  </label>
                            <input value = {fatherName} onChange={(e) => setFatherName(e.target.value)} type="text" className="newStyle" id="inputFatherName"/>
                        </div>                    
                        <div className="mb-3">
                            <label htmlFor="inputMotherName" className="form-label">Mother's Name  </label>
                            <input value = {motherName} onChange={(e) => setMotherName(e.target.value)} type="text" className="newStyle" id="inputMotherName"/>
                        </div>
                    </div>

                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputYear" className="form-label">Year  </label>
                            <input value = {year} onChange={(e) => setYear(e.target.value)} type="number" placeholder="yyyy" min="1947" max="2023" className="newStyle" id="inputYear"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputCity" className="form-label">City  </label>
                            <input value = {city} onChange={(e) => setCity(e.target.value)} type="text" className="newStyle" id="inputCity"/>
                        </div>
                    </div>

                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputTaluka" className="form-label">Taluka  </label>
                            <input value = {taluka} onChange={(e) => setTaluka(e.target.value)} type="text" className="newStyle" id="inputTaluka"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDistrict" className="form-label">Dist  </label>
                            <input value = {district} onChange={(e) => setDistrict(e.target.value)} type="text" className="newStyle" id="inputDistrict"/>
                        </div>     
                    </div>

                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputDeadBirthDate" className="form-label">Dead Birth Date  </label>
                            <input value = {deadBirthDate} onChange={(e) => setDeadBirthDate(e.target.value)} type="Date" className="newStyle" id="inputDeadBirthDate"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputSex" className="form-label">Gender </label>
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
                            <label htmlFor="inputAddress" className="form-label">Address  </label>
                            <input value = {address} onChange={(e) => setAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputBirthPlace" className="form-label">Birth Place </label>
                            <input value = {birthPlace} onChange={(e) => setBirthPlace(e.target.value)} type="text" className="newStyle" id="inputBirthPlace"/>
                        </div>
                    </div>
                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputDetailSender" className="form-label">Name and Address of Detail Sender  </label>
                            <input value = {detailSender} onChange={(e) => setDetailSender(e.target.value)} type="text" className="newStyle" id="inputDetailSender"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputNameOfRegistar" className="form-label">Name of Registar  </label>
                            <input value = {nameOfRegistar} onChange={(e) => setNameOfRegistar(e.target.value)} type="text" className="newStyle" id="inputNameOfRegistar"/>
                        </div>
                    </div>

                    <div className="mb-3 btns">
                        <button type="ADD" className="btn btn-primary" onClick={addDeadBirthRegistration}>ADD </button> &nbsp;&nbsp;
                        {/* <button type="SAVE" classNameName="btn btn-primary">SAVE </button> &nbsp;&nbsp; */}
                        <button type="MODIFY" className="btn btn-success" onClick={modifyData}>MODIFY </button> &nbsp;&nbsp;
                        <button type="DELETE" className="btn btn-danger"onClick={deleteData}>DELETE </button> &nbsp;&nbsp;
                        <Link to="/Navbar"><button type="CANCEL" className="btn btn-warning" >CANCEL </button></Link> &nbsp;&nbsp;
                        <Link to="/login"><button type="EXIT" className="btn btn-dark">EXIT</button></Link>
                    </div>

                </div>
            </form>
            <div className="tableData">
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

export default DeadBirthRegistration;