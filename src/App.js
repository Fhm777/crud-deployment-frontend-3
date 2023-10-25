import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CreateStudent from './components/CreateStudent'
import StudentList from './components/StudentList'
import EditStudent from './components/EditStudent';
import Nav from './components/Nav'

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav></Nav>
        <h1 class="text-center fw-bold">All the Student Details</h1>
        <Routes>
          <Route path="" element={<CreateStudent></CreateStudent>}></Route>
          <Route path="/create-student" element={<CreateStudent></CreateStudent>}></Route>
          <Route path="/student-list" element={<StudentList></StudentList>}></Route>
          <Route path="/edit-student/:id" element={<EditStudent></EditStudent>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
