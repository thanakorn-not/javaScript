function fetchAndDisplayUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok" + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const userContainer = document.getElementById("users-container");
      userContainer.innerHTML = "";

      data.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email :</strong>${user.email}</p>
            <p><strong>Phone :</strong>${user.phone}</p>
            <p><strong>Website :</strong>${user.website}</p>
            <p><strong>Address :</strong>${user.address.city},<strong>Street:</strong>${user.address.street},<strong>Suite:</strong>${user.address.suite},<strong>Zipcode:</strong>${user.address.zipcode}</p>
        `;

        userContainer.appendChild(userDiv);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation", error);
    });
}

fetchAndDisplayUsers();
