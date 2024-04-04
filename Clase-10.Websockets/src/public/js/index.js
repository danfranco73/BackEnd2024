const socket = io(); // This is the line that connects the client with the server

// This is the event listener that listens for the "users" event
socket.on("users", (data) => {
  console.log(data);
  // This is the line that creates the table with the data that comes from the server
  createTable(data);
});

// This is the function that creates the table with the data that comes from the server
function createTable(data) {
  let table = document.getElementById("table");
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  data.forEach((user) => {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let key in user) {
      let td = document.createElement("td");
      td.innerHTML = user[key];
      tr.appendChild(td);
    }
  });
}
