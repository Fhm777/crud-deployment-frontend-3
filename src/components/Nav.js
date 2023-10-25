import {Link} from "react-router-dom";

function Nav () {
    return (
        <nav class="navbar bg-warning">
            <Link class="navbar-brand mx-3">CRUD operations</Link>
            <div class="nav">
                <Link class="navbar-link mx-2" to="/create-student">Create Student</Link>
                <Link class="navbar-link mx-2" to="/student-list">Student List</Link>
            </div>
        </nav>
    )
}

export default Nav;