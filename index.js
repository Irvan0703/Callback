  function getData(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 200) {
        return cb(JSON.parse(xhr.responseText));
      }
    };
    xhr.open("GET", url);
    xhr.send();
  }
  
  const data = getData("https://jsonplaceholder.typicode.com/users", function(data){
  const myArray = data;
  let head = "<head><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Company</th></tr></head>"
  let open = "<body>";
  let close = "<body>"
  for (let i = 0; i < myArray.length; i++){
      open+=`
      <tr>
        <td>${myArray[i].id}</td>
        <td>${myArray[i].name}</td>
        <td>${myArray[i].username}</td>
        <td>${myArray[i].email}</td>
        <td>${myArray[i].address.street}, ${myArray[i].address.suite}, ${myArray[i].address.city}</td>
        <td>${myArray[i].company.name}</td>
      </tr>`
  }
  let print = `<table class='table table-hover'> ${head} ${open} ${close} </table>`;

  document.getElementById("tabel").innerHTML=print;
 });
  
