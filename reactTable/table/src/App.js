import { useState } from 'react';
import './App.css';


function App() {

  const [ user, setUser] = useState({ name:'', surname: '', age: ''});
  const [ users, setUsers] = useState([]);

  const 

  return (
    <div className="App">
      <div>
      <label>Name</label>
      <input type={'text'}/>
      <label>Surname</label>
      <input type={'text'}/>
      <label>Age</label>
      <input type={'text'}/>
      </div>      
      <button>Add user</button>
      <div>
        <h1>Users</h1>
        <ul>
        {
          users.map( user => {<li>`${user.name}, ${user.surname}, ${user.age}`</li>})
        }
        </ul>
      </div>
    </div>
    
  );
}

export default App;
