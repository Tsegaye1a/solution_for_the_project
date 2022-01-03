import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      
      try {
        const response = await fetch('https://api.openbrewerydb.org/breweries');
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <div className="App">
      <h1>Search</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      <div className="cards-container">

      {users.map((user, index) => (
        <Card key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
