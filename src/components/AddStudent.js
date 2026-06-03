import React from 'react';
import useState from 'react';
import axios from 'axios';


function AddStudent(){

    const[student, setStudent] = React.useState({
        id: "",
        name: "",
        class_number: "",
        father_name: "",
        domain: ""
    });

    async function handleSubmit(e){
        e.preventDefault();
        console.log(student);
        const response= await axios.post("http://localhost:8080/sms", student)
        if(response.data != null){
            alert("Student added successfully!");
        }else{
            alert("Error adding student!");
        }
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label class="form-label">Id</label>
    <input type="text" class="form-control" onChange={(e) => setStudent({...student, id: e.target.value})}/>
  </div>
  <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" class="form-control" onChange={(e) => setStudent({...student, name: e.target.value})}/>
  </div>
  <div class="mb-3">
    <label class="form-label">Class Number</label>
    <input type="text" class="form-control" onChange={(e) => setStudent({...student, class_number: e.target.value})}/>
  </div>
  <div class="mb-3">
    <label class="form-label">Father's Name</label>
    <input type="text" class="form-control" onChange={(e) => setStudent({...student, father_name: e.target.value})}/>
  </div>
  <div class="mb-3">
    <label class="form-label">Domain</label>
    <input type="text" class="form-control" onChange={(e) => setStudent({...student, domain: e.target.value})}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        
        </>
    );
}

export default AddStudent;