import { useState } from 'react';
import './App.css';
function App() {

  let [users, setUsers] = useState([
    { id: 1, name: "Gurvinder", age: 23 },
    { id: 2, name: "Ajay", age: 22 },
    { id: 3, name: "Anmol", age: 21 },
    { id: 4, name: "Naksh", age: 20 },
    { id: 5, name: "Ram", age: 24 },
  ])

  return (
    <div>
      <h1>User Info</h1>
      <table border={1} cellSpacing="0">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>

        {
          users.map(function (user, index) {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            )
          })
        }


      </table>
    </div>
  );
}

export default App;
