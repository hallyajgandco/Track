import React from 'react';
import ReactDOM from'react-dom';
import AdresseTable from './api/fetch';

async function search() {
    // Get the search term
    const searchTerm = document.getElementById('search').value;
  
    // Fetch the data
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
  
    // Filter the users
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Display the results
    const results = document.getElementById('results');
    results.innerHTML = '';
    for (const user of filteredUsers) {
      const div = document.createElement('div');
      div.textContent = user.name;
      results.appendChild(div);
    }
  }
  


const Main = () => (
<div >


<div className='search rounded-full'>





<AdresseTable/>
<div id="results"></div>
</div>


</div>
);

export default Main;