import Axios from "axios";
import { Link } from "react-router-dom";

function StudentListRow (props) {

    const {_id, name, email, rollno} = props.obj;

    const handleDelClick = () => {
        Axios.delete("https://crud-deployment-backend-3-wz50.onrender.com/studentRoute/delete-student/" + _id)
        .then ((res) => {
            if (res.status === 200) {
                alert("Record deleted successfully");
                window.location.reload();
            }
            else {
                alert("Unsuccessful");
                Promise.reject();
            }
        })
        .catch((err) => alert(err))
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <button class="btn btn-success">
                    <Link class="text-decoration-none text-light" to={"/edit-student/" + _id}>Edit</Link>
                </button>
                <button onClick={handleDelClick} class="btn btn-danger mx-3">Delete</button>
            </td>
        </tr>
    )
}

export default StudentListRow;