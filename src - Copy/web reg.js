let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('registerEmail').value;
    let contact = document.getElementById('contact').value;
    let password = document.getElementById('registerPassword').value;

    let user = { name, email, contact, password };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users)); // Save to localStorage

    updateTable();
    document.getElementById('registerSuccessMessage').style.display = 'block';
    setTimeout(() => document.getElementById('registerSuccessMessage').style.display = 'none', 3000);
    document.getElementById('registerForm').reset();
});

function updateTable() {
    let tableBody = document.getElementById('userList');
    tableBody.innerHTML = "";
    users.forEach((user, index) => {
        let row = `<tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.contact}</td>
                    <td><button onclick="deleteUser(${index})">❌ Delete</button></td>
                </tr>`;
        tableBody.innerHTML += row;
    });
}

// Load existing data on page load
document.addEventListener("DOMContentLoaded", updateTable);

function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users)); // Update localStorage
    updateTable();
}






