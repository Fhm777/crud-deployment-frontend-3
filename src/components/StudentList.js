import Axios from "axios";
import { useEffect, useState } from "react";
import StudentListRow from "./StudentListRow";

function StudentList () {

    const [arr, setArr] = useState([]);

    useEffect (() => {
        Axios.get("https://crud-deployment-backend-3-wz50.onrender.com/studentRoute")
        .then((res) => {
            if (res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err) => alert(err))
    }, [])

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <StudentListRow key={ind} obj={val}></StudentListRow>
        })
    }

    return (
        <table style={{ margin: "0px auto", maxWidth: "60%" }} class="table table-striped table-bordered table-success">
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Roll Number</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}

export default StudentList;