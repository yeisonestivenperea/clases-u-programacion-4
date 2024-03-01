let persons = [];

document.getElementById("add").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;

  objPerson = { name: name, lastName: lastName, age: age };
  persons.push(objPerson);
  console.log(persons);

  var tr = document.getElementById("data");

  tr.innerHTML = "";

  persons.forEach((person) => {
    let datos = `<tr>
  <td>${person.name}</td>
  <td>${person.lastName}</td>
  <td>${person.age}</td>
  </tr>`;

    tr.innerHTML += datos;
  });
});
