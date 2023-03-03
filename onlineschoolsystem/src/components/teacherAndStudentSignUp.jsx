import {useEffect, useState} from "react";
import SignUp from "./SignUp";
function TeacherAndStudentSignUp(){
    const[teachersignup, setTeachersignup] = useState([])
    const[studentsignup, setStudentsignup] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/teachers")
        .then((response)=>response.json())
        .then((data)=>setTeachersignup(data))
    }, [])
    
    useEffect(()=>{
        fetch("http://localhost:9292/students")
        .then((response)=>response.json())
        .then((data)=>setStudentsignup(data))
    }, [])
    
    return(
        <div>
            <SignUp teachersignup={teachersignup} studentsignup={studentsignup}/>
        </div>
    )
} export default TeacherAndStudentSignUp