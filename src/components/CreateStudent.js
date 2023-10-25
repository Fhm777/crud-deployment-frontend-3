import StudentForm from './StudentForm';
import { useState } from "react";
import Axios from 'axios'

function CreateStudent () {
    const [arr, setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = {name: arr[0], email: arr[1], rollno: arr[2]};
        Axios.post("https://crud-deployment-backend-3-wz50.onrender.com/studentRoute/create-student",data)
        .then ((res) => {
            if (res.status === 200)
                alert("Record added successfully");
            else {
                alert("Unsuccessful");
                Promise.reject();
            }
        })
        .catch ((err) => alert(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}  nameValue="" emailValue="" rollNoValue="">Create Student</StudentForm>
        </form>
    )
}

export default CreateStudent;