import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import './Assessment.list.css';
//import AssessmentListServices from "../Service/AssessmentListService";

// import "bootstrap/dist/css/bootstrap.min.css";

const services = new DeathRegistrationService();

        export const AssessmentList = (props) => {
            const navigate = useNavigate();

            useEffect(() => {
                
                fetchData();
                
              }, []);
            // const [billNo, setBillNo] = useState('');
            const [formNo, setFormNo] = useState('');
            const [wardNo, setWardNo] = useState("");
            const [date, setDate] = useState("");
            const [oldAssessmentNo, setOldAssessmentNo] = useState("");
            const [ownersName, setOwnersName] = useState("");
            const [holdersName, setHoldersName] = useState("");
            const [propertyAddress, setPropertyAddress] = useState("");
            const [occupiedBy, setOccupiedBy] = useState("");
            const [useOfPropertyType, setUseOfPropertType] = useState("");
            const [locationCode, setLocationCode] = useState("");
            const [yearOfBuildup, setYearOfBuildup] = useState("");
            const [totalAreaOfBuildupSqMeter, setTotalAreaOfBuildupSqMeter] = useState("");
            const [openAreaWhereNoBuildupSqMeter, setOpenAreaWhereNoBuildupSqMeter] = useState("");
            const [openAreaPlotSqMeter, setOpenAreaPlotSqMeter] = useState("");
            const [assessedPropertyTax, setAssessedPropertyTax] = useState("");
            const [wardTotal, setWardTotal] = useState("");
        
            const addAssessmentList = (e) =>{
                e.preventDefault();
                if(wardNo==="" && date==="" && oldAssessmentNo==="" && ownersName==="" && holdersName==="" &&
                propertyAddress==="" && occupiedBy==="" && useOfPropertyType==="" && locationCode==="" && yearOfBuildup==="" &&
                totalAreaOfBuildupSqMeter==="" && openAreaWhereNoBuildupSqMeter==="" && openAreaPlotSqMeter==="" && 
                assessedPropertyTax==="" && wardTotal==="")
                {
                    alert("Enter all the required input Fields")
                    console.log("Input fields are Empty");
                    return
                }
                console.log("Data : ",formNo,wardNo,data,oldAssessmentNo,ownersName,holdersName,propertyAddress,occupiedBy,useOfPropertyType,
                locationCode,yearOfBuildup,totalAreaOfBuildupSqMeter,openAreaWhereNoBuildupSqMeter,openAreaPlotSqMeter,assessedPropertyTax,
                wardTotal);
                const data = {
                    'wardNo' : wardNo,
                    'date' : date,
                    'oldAssasmentNo' : oldAssessmentNo,
                    'ownersName' : ownersName,
                    'holdersName' : holdersName,
                    'propertyAddress' : propertyAddress,
                    'occupiedBy' : occupiedBy,
                    'useOfPropertyType' : useOfPropertyType,
                    'locationCode' : locationCode,
                    'yearOfBuildup' : yearOfBuildup,
                    'totalAreaOfBuildupSqMeter' : totalAreaOfBuildupSqMeter,
                    'openAreaWhereNotBuildupSqMeter' : openAreaWhereNoBuildupSqMeter,
                    'openAreasPlotSqMeter' : openAreaPlotSqMeter,
                    'assasedPropertyTax' : assessedPropertyTax,
                    'wardTotal' : wardTotal  

                }
                services.AssessmentList(data).then((data)=>{
                    console.log(data)
                }).catch((error)=>{
                    console.log(error)
                })
            }

                const modifyData = (e) => {
                    e.preventDefault();
                    let url = "https://localhost:7277/Assasmenttax/" + formNo;
                    console.log(url);
                    const data = {

                    'formNo' : formNo,
                    'wardNo' : wardNo,
                    'date' : date,
                    'oldAssasmentNo' : oldAssessmentNo,
                    'ownersName' : ownersName,
                    'holdersName' : holdersName,
                    'propertyAddress' : propertyAddress,
                    'occupiedBy' : occupiedBy,
                    'useOfPropertyType' : useOfPropertyType,
                    'locationCode' : locationCode,
                    'yearOfBuildup' : yearOfBuildup,
                    'totalAreaOfBuildupSqMeter' : totalAreaOfBuildupSqMeter,
                    'openAreaWhereNotBuildupSqMeter' : openAreaWhereNoBuildupSqMeter,
                    'openAreasPlotSqMeter' : openAreaPlotSqMeter,
                    'assasedPropertyTax' : assessedPropertyTax,
                    'wardTotal' : wardTotal }
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
                         alert("Data Updated SuccessFully")
                       // console.log(data); 
                      }) 
                      .catch((err) => { 
                        console.log(err.message); 
                      }); 
            
                }
            
                const deleteData = (e) => {
                    e.preventDefault();
                    let url = "https://localhost:7277/Assasmenttax/" + formNo;
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
            
              function prePopulate(id){
                    setFormNo(data[id-1].formNo)
                    setWardNo(data[id-1].wardNo)
                    setDate(data[id-1].date)
                    setOldAssessmentNo(data[id-1].oldAssasmentNo)
                    setOwnersName(data[id-1].ownersName)
                    setHoldersName(data[id-1].holdersName)
                    setPropertyAddress(data[id-1].propertyAddress)
                    setOccupiedBy(data[id-1].occupiedBy)
                    setUseOfPropertType(data[id-1].useOfPropertyType)
                    setLocationCode(data[id-1].locationCode)
                    setYearOfBuildup(data[id-1].yearOfBuildup)
                    setTotalAreaOfBuildupSqMeter(data[id-1].totalAreaOfBuildupSqMeter)
                    setOpenAreaWhereNoBuildupSqMeter(data[id-1].openAreaWhereNotBuildupSqMeter)
                    setOpenAreaPlotSqMeter(data[id-1].openAreasPlotSqMeter)
                    setAssessedPropertyTax(data[id-1].assasedPropertyTax)
                    setWardTotal(data[id-1].wardTotal)
              }
            
              
              const logout = () =>{
                localStorage.setItem("Token","");
                navigate("/login");
            }
        
            
    return(
        <>  
           <h1 align="center">Assessment List</h1>
            <form className="assess-form">
                <div className="leftdiv">
                    <div className="div1">
                        <div className="mb-3">
                            <label htmlFor="inputFormNo" className="input-text js-input">Form No.  </label>
                            <input value = {formNo} onChange={(e) => setFormNo(e.target.value)} type="text" className="newStyle" id="inputFormNo"/>
                        </div>                    
                        <div className="mb-3">
                            <label htmlFor="inputWardNo" className="form-label">Ward No.  </label>
                            <input value = {wardNo} onChange={(e) => setWardNo(e.target.value)} type="text" className="newStyle" id="inputWardNo"/>
                        </div>
                    </div>
                    
                    <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputDate" className="form-label">Date  </label>
                        <input value = {date} onChange={(e) => setDate(e.target.value)} type="Date" className="newStyle" id="inputDate"/>
                    </div>                    
                    <div className="mb-3">
                        <label htmlFor="inputOldAssessmentNo" className="form-label">Old Assessment No.  </label>
                        <input value = {oldAssessmentNo} onChange={(e) => setOldAssessmentNo(e.target.value)} type="text" className="newStyle" id="inputOldAssessmentNo"/>
                    </div>
                    </div>

                    <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputOwnersName" className="form-label">Owner's Name  </label>
                        <input value = {ownersName} onChange={(e) => setOwnersName(e.target.value)} type="text" className="newStyle" id="inputOwnersName"/>
                    
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="inputHoldersName" className="form-label">Holder's Name  </label>
                        <input value = {holdersName} onChange={(e) => setHoldersName(e.target.value)} type="text" className="newStyle" id="inputHoldersName"/>
                    </div>
                    </div>
                    <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputPropertyAddress" className="form-label">Property Address  </label>
                        <input value = {propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} type="text" className="newStyle" id="inputPropertyAddress"/>
                    </div>
                    
                    
                    <div className="mb-3">
                        <label htmlFor="inputOccupiedBy" className="form-label">Occupied By  </label>
                        <input value = {occupiedBy} onChange={(e) => setOccupiedBy(e.target.value)} type="text" className="newStyle" id="inputOccupiedBy"/>
                    </div>
                    </div>

                    <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputUseOfPropertyType" className="Form-label">Use of Property Type  </label>
                        {/* <select id="inputUseOfPropertyType" className="htmlForm-select">
                        <option selected>C
                        </div>hoose...</option>
                        <option>...</option>
                        </select> */}
                        
                        <input value = {useOfPropertyType} onChange={(e) => setUseOfPropertType(e.target.value)} type="text" className="newStyle" id="inputUseOfPropertyType"/>
                    </div>
                
                    
                    <div className="mb-3">
                        <label htmlFor="inputLocationCode" className="form-label">Location Code  </label>
                        <input value = {locationCode} onChange={(e) => setLocationCode(e.target.value)} type="text" className="newStyle" id="inputLocationCode"/>
                    </div>
                    </div>
                    
                    <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputYearOfBuildup" className="form-label">Year Of Buildup </label>
                        <input value = {yearOfBuildup} onChange={(e) => setYearOfBuildup(e.target.value)} type="number" placeholder="yyyy" min="1947" max="2023" className="newStyle" id="inputYear"/>
                    
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="inputTotalAreaOfBuildingSqMeter" className="form-label">Total Area Of Building Sq Meter  </label>
                        <input value = {totalAreaOfBuildupSqMeter} onChange={(e) => setTotalAreaOfBuildupSqMeter(e.target.value)} type="text" className="newStyle" id="inputTotalAreaOfBuildingSqMeter"/>
                    </div>
                    </div>
                    <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputOpenWhereNotBuildupSqMeter" className="form-label">Open Where Not Buildup Sq Meter  </label>
                        <input value = {openAreaWhereNoBuildupSqMeter} onChange={(e) => setOpenAreaWhereNoBuildupSqMeter(e.target.value)} type="text" className="newStyle" id="inputOpenWhereNotBuildupSqMeter"/>
                    </div>
                    
                    
                    <div className="mb-3">
                        <label htmlFor="inputOpenAreasPl0tSqMeter" className="form-label">Open Areas Plot Sq Meter  </label>
                        <input value = {openAreaPlotSqMeter} onChange={(e) => setOpenAreaPlotSqMeter(e.target.value)} type="text" className="newStyle" id="inputOpenAreasPlotSqMeter"/>
                    
                    </div>
                    </div>
                    <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputAssessedPropertTax" className="form-label">Input Assessed Propert Tax  </label>
                        <input value = {assessedPropertyTax} onChange={(e) => setAssessedPropertyTax(e.target.value)} type="text" className="newStyle" id="inputAssessedPropertTax"/>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="inputWardTotal" className="form-label">Ward Total  </label>
                        <input value = {wardTotal} onChange={(e) => setWardTotal(e.target.value)} type="text" className="newStyle" id="inputWardTotal"/>
                    </div>
                    </div>

                    <div className="mb-3 btns"><br/>
                        <button type="ADD" className="btn btn-outline-primary" onClick={addAssessmentList}>ADD </button> &nbsp;&nbsp;
                        {/* <button type="SAVE" classNameName="btn btn-primary">SAVE </button> &nbsp;&nbsp; */}
                        <button type="MODIFY" className="btn btn-outline-success" onClick={modifyData}>MODIFY </button> &nbsp;&nbsp;
                        <button type="DELETE" className="btn btn-outline-danger"onClick={deleteData}>DELETE </button> &nbsp;&nbsp;
                        <Link to="/Navbar"><button type="CANCEL" className="btn btn-outline-warning" >CANCEL </button></Link> &nbsp;&nbsp;
                        <button type="EXIT" className="btn btn-outline-dark" onClick={logout}>LOGOUT</button>
                    </div>

                </div>
            </form>
            <div className="tableData">
          <table>
            <thead>
            <tr>
              <th>Form No<br/>Ward No</th>
              <th>Date<br/>Old Assessment Date</th>
              <th>OwnersName<br/>Holders Name</th>
              <th>Property Address<br/>Occupied By</th>
              <th>Use Of Property Type<br/>Year of Buildup</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.formNo}<br/>{val.wardNo}</td>
                  <td>{val.date}<br/>{val.oldAssessmentNo}</td>
                  <td>{val.ownersName}<br/>{val.holdersName}</td>
                  <td>{val.propertyAddress}<br/>{val.occupiedBy}</td>
                  <td>{val.useOfPropertyType}<br/>{val.yearOfBuildup}</td>
                  <td>
                  <button className="btn btn-dark" onClick={()=>prePopulate(val.formNo)}>Update</button>
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

export default AssessmentList;