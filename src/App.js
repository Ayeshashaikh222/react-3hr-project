import React, {useState, Fragment} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  
     const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge, ucollege) => {
      setUsersList((prevUsersList) => {

        return [...prevUsersList, { name: uName, age: uAge, college: ucollege, id: Math.random().toString()}];
      });
    };
    

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
