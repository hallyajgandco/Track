import React from 'react';


const Search = () => (
<div >

{async function search() {
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
}

</div>
);

export default Search;