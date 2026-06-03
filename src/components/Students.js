import React, { useEffect } from 'react';
import axios from 'axios';
import {useState} from 'react';


function Students(){

      const[students, setStudents] = useState([]);
      const[form,setForm]=useState(false);

        useEffect(() => { fetchStudents(); }, []);

        async function fetchStudents(){
                const stu=await axios.get("http://localhost:8080/sms/getAll")
                setStudents(stu.data);
        }
    

        async function deleteStudent(id){
            const response=await axios.delete(`http://localhost:8080/sms/delete/${id}`)
            alert(response.data);
            fetchStudents();
        }
        const[selectStudent,  setSelectStudent] = useState({
            id: "",
            name: "",
            class_number: "",
            father_name: "",
            domain: ""
        });

        async function updateStudent(student){
            setSelectStudent({
                id: student.id,
                name: student.name,
                class_number: student.class_number,
                father_name: student.father_name,
                domain: student.domain
            });
            setForm(true);

        }

        const handleUpdateButton=async ()=>{
            const response=await axios.put(`http://localhost:8080/sms/updateStudent/${selectStudent.id}`, selectStudent);
            setForm(false);
            fetchStudents();
        }

        


    return (
      
        <>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Class Number</th>
      <th scope="col">Father's Name</th>
      <th scope="col">Domain</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student) => (
      <tr key={student.id}>
        <th scope="row">{student.id}</th>
        <td>{student.name}</td>
        <td>{student.class_number}</td>
        <td>{student.father_name}</td>
        <td>{student.domain}</td>
        <td><button class="btn btn-danger" onClick={()=>deleteStudent(student.id)}>Delete</button></td>
        <td><button class="btn btn-primary" onClick={()=>updateStudent(student)}>Update</button></td>
      </tr>
    ))}
  </tbody>
</table>


{
    form &&  <form onSubmit={handleUpdateButton}>
  <div class="mb-3">
    <label class="form-label">Id</label>
    <input type="text" class="form-control" value={selectStudent.id} onChange={(e) => setSelectStudent({...selectStudent, id: e.target.value})}/>
  </div>
  <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" class="form-control" value={selectStudent.name} onChange={(e) => setSelectStudent({...selectStudent, name: e.target.value})}/>
  </div>
  <div class="mb-3">
    <label class="form-label">Class Number</label>
    <input type="text" class="form-control" value={selectStudent.class_number} onChange={(e) => setSelectStudent({...selectStudent, class_number: e.target.value})}/>
  </div>
  <div class="mb-3">
    <label class="form-label">Father's Name</label>
    <input type="text" class="form-control" value={selectStudent.father_name} onChange={(e) => setSelectStudent({...selectStudent, father_name: e.target.value})}/>
  </div>
  <div class="mb-3">
    <label class="form-label">Domain</label>
    <input type="text" class="form-control" value={selectStudent.domain} onChange={(e) => setSelectStudent({...selectStudent, domain: e.target.value})}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
}

        </>
    );
}

export default Students;