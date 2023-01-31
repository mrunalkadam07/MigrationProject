import React, {useState, useEffect, useNavigate} from "react";
import PropertyTaxServices from "../../Services/PropertyTaxService";
import "./Assessment.list.css";
import DeathRegistrationService from "../../Services/DeathRegistrationService";
import "./tablestyle.css";
import {Link} from "react-router-dom";

const services = new DeathRegistrationService();

export const PropertyTaxPaidForm = (props) => {
    // const navigate = useNavigate();
    // const logout = () =>{
    //     localStorage.setItem("Token","");
    //     navigate("/login");
    // }
    const [billNo, setBillNo] = useState('');
    const [billDate, setBillDate] = useState('');
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
           // console.log(data); 
          }) 
          .catch((err) => { 
            console.log(err.message); 
          }); 

    }

    const deleteData = (e) => {
        e.preventDefault();
        let url = "https://localhost:7277/PropertyTax/" + billNo;
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

    return(
        <>
           <h1 align="center">Property Tax Paid Form</h1>
            <form className="form-property">
                <div className="leftdiv">
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputBillDate" className="form-label">Bill Date  </label>
                        <input value = {billDate} onChange={(e) => setBillDate(e.target.value)} type="Date" className="newStyle" id="inputBillDate" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputYear" className="form-label">Year  </label>
                        <input value = {year} onChange={(e) => setYear(e.target.value)} type="number" placeholder="yyyy" min="1947" max="2023" className="newStyle" id="inputYear"/>
                    </div>
                </div>
                <div className="div1">
                    {/* <div className="mb-3">
                        <label htmlFor="inputBillNo" className="form-label">Bill No.  </label>
                        <input value = {billNo} onChange={(e) => setBillNo(e.target.value)} type="text" className="newStyle" id="inputBillNo"/>
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="inputPropertNo" className="form-label">Property No.  </label>
                        <input value = {propertyNo} onChange={(e) => setPropertyNo(e.target.value)}  type="text" className="newStyle" id="inputPropertNo"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label"><br/>Name  </label>
                        <input value = {name} onChange={(e) => setName(e.target.value)} type="text" className="newStyle" id="inputName"/>
                    </div>
                </div>
                <div className="div1">
                    <div className="mb-3">
                        <label htmlFor="inputAddress" className="form-label">Address </label>
                        <input value = {address} onChange={(e) => setAddress(e.target.value)} type="text" className="newStyle" id="inputAddress"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputHomeTax" className="form-label">Home Tax  </label>
                        {/* <select id="inputHomeTax" className="form-selected">
                        <option defaultValue={"Select"}>Choose...</option>
                        </select> */}
                        <input value = {homeTax} onChange={(e) => setHomeTax(e.target.value)} type="text" className="newStyle" id="inputHomeTax"/>
                    </div>
                </div>
                <div className="div1">
                    
                    <div className="mb-3">
                        <label htmlFor="inputElectricityTax" className="form-label">Electricity Tax  </label>
                        {/* <select id="inputElectricityTax" className="form-selected">
                        <option defaultValue={"Select"}>Choose...</option>
                        </select> */}
                        <input value = {electricityTax} onChange={(e) => setElectricityTax(e.target.value)} type="text" className="newStyle" id="inputElectricityTax"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputSpecialWaterTax" className="form-label">Special Water Tax  </label>
                        {/* <select id="inputSpecialWaterTax" className="form-selected">
                        <option defaultValue={"Select"}>Choose...</option>
                        </select> */}
                        <input value = {specialWaterTax} onChange={(e) => setSpecialWaterTax(e.target.value)}type="text" className="newStyle" id="inputSpecialWaterTax"/>
                    </div>
                </div>
                <div className="div1">
                    
                    <div className="mb-3">
                        <label htmlFor="inputEducationalSess" className="form-label">Educational Sess  </label>
                        {/* <select id="inputEducationalSess" className="form-selected">
                        <option defaultValue={"Select"}>Choose...</option>
                        </select> */}
                        <input value = {educationalsess} onChange={(e) => setEducationalsess(e.target.value)} type="text" className="newStyle" id="inputEducationalSess"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPenaltyCharge" className="form-label">Penalty Charge  </label>
                        {/* <select id="inputPenaltyCharge" className="form-selected">
                        <option defaultValue={"Select"}>Choose...</option>
                        </select> */}
                        <input value = {penaltyCharge} onChange={(e) => setPenaltyCharge(e.target.value)} type="text" className="newStyle" id="inputPenaltyCharge"/>
                    </div> 
                </div>
                {/* <div className="div1"> */}
                    <div className="mb-3">
                        <label htmlFor="inputTotal" className="form-label">Total  </label>
                        <input value = {total} onChange={(e) => setTotal(e.target.value)} type="text" className="newStyle" id="inputTotal"/>
                    </div>
                {/* //</div> */}
                    <div className="mb-3 btns"><br/>
                    <button type="ADD" className="btn btn-outline-primary" onClick={addPropertyTax}>ADD </button> &nbsp;&nbsp;
                        {/* <button type="SAVE" classNameName="btn btn-primary">SAVE </button> &nbsp;&nbsp; */}
                        <button type="MODIFY" className="btn btn-outline-success" onClick={modifyData}>MODIFY </button> &nbsp;&nbsp;
                        <button type="DELETE" className="btn btn-outline-danger"onClick={deleteData}>DELETE </button> &nbsp;&nbsp;
                        <Link to="/Navbar"><button type="CANCEL" className="btn btn-outline-warning" >CANCEL </button></Link> &nbsp;&nbsp;
                        {/* <button type="FIRST" classNameName="btn btn-primary">FIRST </button> &nbsp;&nbsp;
                        <button type="LAST" classNameName="btn btn-primary">LAST </button> &nbsp;&nbsp;
                        <button type="NEXT" classNameName="btn btn-primary">NEXT </button> &nbsp;&nbsp;
                        <button type="PREVIOUS" classNameName="btn btn-primary">PREVIOUS </button> &nbsp;&nbsp; */}
                         <Link to="/login"><button type="EXIT" className="btn btn-outline-dark">LOGOUT</button></Link>
                        </div>
                </div>
                
            </form>
            <div className="tableData">
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
        </div>
        </>
    )
}
