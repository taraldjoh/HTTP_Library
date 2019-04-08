const http = new easyHTTP();

document.getElementById("showUser").addEventListener('click', postUsers);
document.getElementById("remUser").addEventListener('click', remUsers);

// Get Users
function postUsers() {
  http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => {
    let output = "";
    data.forEach(user => {
      output += `
      <div class="output-text">
        <p><b>Full Name:</b> ${user.name}</p>
        <p><b>Username:</b> ${user.username}</p>
        <p><b>Email:</b> ${user.email}</p>
      </div>
      
      `
    });
    document.getElementById("output").innerHTML = output;
  })
  
  .catch(err => console.log(err));
}

// Remove users
function remUsers() {
  document.getElementById("output").innerHTML = '';
}


// Eventlisteners

