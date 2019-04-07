const http = new easyHTTP();

document.getElementById("button1").addEventListener('click', postUsers);

// Get Users
function postUsers() {
  http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => {
    console.log(data);
    let output = "";
    data.forEach(user => {
      output += `<p>Full Name: ${user.name}</p>
      <p>Username: ${user.username}</p>
      <p>Email: ${user.email}</p>
      <br>
      `
    });
    document.getElementById("output").innerHTML = output;
  })
  
  .catch(err => console.log(err));
}


// Eventlisteners

