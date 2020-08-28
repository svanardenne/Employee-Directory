/* ============================================= */
/*             Random User API Fetch             */
/* ============================================= */

// global variables \\
let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

// Global Functions \\

// Use fetched API data to create HTML to insert
function displayEmployees(employeeData) {
    employees = employeeData;
    let employeeHTML = '';
    employees.forEach((employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;
        employeeHTML += `
            <div class="card" data-index="${index}">
                <img class="avatar" src="${picture.large}" />
                <div class="text-container">
                    <h2 class="name">${name.first} ${name.last}</h2>
                    <p class="email">${email}</p>
                    <p class="address">${city}</p>
                </div>
            </div>
        `
    });
    gridContainer.innerHTML = employeeHTML;
}

// Displays the modal window with relevant information pulled
// from employees array
function displayModal(index) {
    let name = employees[index].name;
    let dob = employees[index].dob;
    let phone = employees[index].phone;
    let email = employees[index].email;
    let city = employees[index].location.city;
    let street = employees[index].location.street;
    let state = employees[index].location.state;
    let postcode = employees[index].location.postcode;
    let picture = employees[index].picture;

    let date = new Date(dob.date);

    const modalHTML = `
        <img class="avatar" src="${picture.large}" />
        <div class="text-container">
            <h2 class="modalName">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="address">${city}</p>
            <hr />
            <p>${phone}</p>
            <p class="address">${street}, ${state} ${postcode}</p>
            <p>Birthday:
${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
        </div>
    `;

    overlay.classList.remove('hidden');
    modalContainer.innerHTML = modalHTML;
}



// fetch data from API \\
fetch(urlAPI)
    .then(res => res.json())
    .then(res => res.results)
    .then(res => displayEmployees(res))
    .catch(err => console.log(err));


// Event Listeners \\

// Check to see if the target was not simply the grid container
// and if so, target the closest .card to element clicked, get
// the data-index attribute from it, and call the displayModal function
gridContainer.addEventListener('click', e => {
    if (e.target !== gridContainer) {
    const card = e.target.closest(".card");
    const index = card.getAttribute('data-index');
    displayModal(index);
    }
});

// Use the 'X' button to remove the overlay
modalClose.addEventListener('click', () => {
    overlay.classList.add("hidden");
});