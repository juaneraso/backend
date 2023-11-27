import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [students,setStudents] = useState([]);

  useEffect(()=>{
   
    fetch("http://localhost:3001/students")
    .then(response => response.json())
    .then(data =>setStudents(data));

  },[])
   
  console.log(students);

  return (
    <div>
     <h1>Lista Estudiantes</h1>

     {
      students.length && students.map((student)=>{

        return  (
          <div key={student.id}>
           <h2>{student.id}</h2>
           <p>{student.name}</p>
          </div>

        ) 
      })


     }

    </div>
  )
}

export default App
