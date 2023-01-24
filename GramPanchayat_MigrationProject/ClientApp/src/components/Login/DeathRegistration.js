import React, { useState, useEffect } from 'react';
import './DeadBirthRegistrationForm.css';
import DeathRegistrationService from "../../Services/DeathRegistrationService";

const services = new DeathRegistrationService();

export const DeathRegistrationForm = (props) => {

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
        if(year==="" && name==="" && addressOfDeadPerson==="" &&
         addressOfSenderPerson==="" && relative==="" && registrationDate==="" && place==="" && age==="" &&
         city==="" && taluka==="" && district===""&& registrar==="" && deathDate==="" && sex==="")
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
                'Content-Type' : 'application/json'
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
        let url = "https://localhost:7277/DeathRegistration/" + registration_no;
        console.log(url);
        fetch(url , {
            method : 'DELETE',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
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
    fetch(`https://localhost:7277/DeathRegistration`)
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
    return (
        <>
            <h1 align="center">Death Registration Form</h1>
            <form className="row g-3">
                <div className="leftdiv">
                <div className="col-md-6">
                        <label htmlFor="inputRegistrationNo" className="form-label">Registration No. :-&#62; </label>
                        <input value = {registration_no} onChange={(e) => setRegistrationNo(e.target.value)} type="text" className="form-control" id="inputRegistrationNo" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputTaluka" className="form-label">Taluka :-&#62;</label>
                        <input value = {taluka} onChange={(e) => setTaluka(e.target.value)} type="text" className="form-control" id="inputTaluka" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputDistrict" className="form-label">District :-&#62;</label>
                        <input value = {district} onChange={(e) => setDistrict(e.target.value)} type="text" className="form-control" id="inputDistrict" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputYear" className="form-label">Year :-&#62;</label>
                        <input value = {year} onChange={(e) => setYear(e.target.value)} type="number" placeholder="yyyy" min="1947" max="2023" className="form-control" id="inputYear" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputCityorVillage" className="form-label">City/Village :-&#62;</label>
                        <input value = {city} onChange={(e) => setCity(e.target.value)} type="text" className="form-control" id="inputCityorVillage" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputRegistrationDtae" className="form-label">Registration Date :-&#62;</label>
                        <input value = {registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} type="date" className="form-control" id="inputRegistrationDate" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputDeathDate" className="form-label">Date of Death :-&#62;</label>
                        <input value = {deathDate} onChange={(e) => setDeathDate(e.target.value)} type="date" className="form-control" id="inputDeathDate" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputNameofDeadPerson" className="form-label">Name of Dead Person :-&#62;</label>
                        <input value = {name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="inputNameofDeadPerson" />
                    </div>
                    <div className="col-12">
                            <label htmlFor="inputSex" className="form-label">Sex :-&#62;</label>
                            <select id="inputSex" className="form-select">
                                <option defaultValue="select">Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <input value = {sex} onChange={(e) => setSex(e.target.value)} type="text" className="form-control" id="inputSex" />
                        </div>
                    {/* </div> */}
                    <div className="col-12">
                        <label htmlFor="inputAge" className="form-label">Age of Dead Person :-&#62;</label>
                        <input value = {age} onChange={(e) => setAge(e.target.value)} type="number" className="form-control" id="inputAge" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputPlace" className="form-label">Place of Death :-&#62;</label>
                        <input value = {place} onChange={(e) => setPlace(e.target.value)} type="text" className="form-control" id="inputPlace" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputRelative" className="form-label">Mother/Father/Husband Name :-&#62;</label>
                        <input value = {relative} onChange={(e) => setRelative(e.target.value)} type="text" className="form-control" id="inputRelative" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Permanent Address of Dead Person :-&#62;</label>
                        <input value = {addressOfDeadPerson} onChange={(e) => setAddressOfDeadPerson(e.target.value)} type="text" className="form-control" id="inputAddress" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputNameOfSenderPerson" className="form-label">Name and Address of Sender Person:-&#62;</label>
                        <input value = {addressOfSenderPerson} onChange={(e) => setAddressOfSenderPerson(e.target.value)} type="text" className="form-control" id="inputNameOfSenderPerson" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputRegistrar" className="form-label">Name of Registrar :-&#62;</label>
                        <input value = {registrar} onChange={(e) => setRegistrar(e.target.value)} type="text" className="form-control" id="inputRegistrar" />
                    </div>
                    
                    <div className="col-12"><br />
                        <button type="ADD" className="btn btn-primary" onClick={addData}>ADD </button> &nbsp;&nbsp;
                        <button type="SAVE" className="btn btn-primary">SAVE </button> &nbsp;&nbsp;
                        <button type="MODIFY" className="btn btn-primary" onClick={modifyData}>MODIFY</button> &nbsp;&nbsp;
                        <button type="DELETE" className="btn btn-primary" onClick={deleteData}>DELETE </button> &nbsp;&nbsp;
                        <button type="CANCEL" className="btn btn-primary">CANCEL </button> &nbsp;&nbsp;
                        <button type="FIRST" className="btn btn-primary">FIRST </button> &nbsp;&nbsp;
                        <button type="LAST" className="btn btn-primary">LAST </button> &nbsp;&nbsp;
                        <button type="NEXT" className="btn btn-primary">NEXT </button> &nbsp;&nbsp;
                        <button type="PREVIOUS" className="btn btn-primary">PREVIOUS </button> &nbsp;&nbsp;
                        <button type="EXIT" className="btn btn-primary">EXIT</button>
                    </div>
                    
                </div>

               
            </form>
            <div className="tableData">
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
        </div>
        </>
    )
}
