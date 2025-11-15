// Vehicle Data
const vehicles = [
    { id: 1, name: "Honda Civic", type: "Car", price: 40, img:"./hondacivic.jpg" },
    { id: 2, name: "Toyota Fortuner", type: "Car", price: 70, img: "./toyota.jpg" },
    { id: 3, name: "Royal Enfield", type: "Bike", price: 25, img: "./royal.jpg" },
    { id: 4, name: "Yamaha FZ", type: "Bike", price: 20, img: "./rx.jpg" },
    { id: 5, name: "Honda Activa", type: "Scooter", price: 15, img: "./scooyt.jpg" },
    { id: 6, name: "TATA Truck", type: "Truck", price: 90, img: "./tata.jpg" }
];

let selectedVehicle = null;

// Load all vehicles initially
window.onload = () => displayVehicles(vehicles);

// Display vehicle cards
function displayVehicles(list) {
    const container = document.getElementById("vehicle-list");
    container.innerHTML = "";

    list.forEach(vehicle => {
        container.innerHTML += `
            <div class="vehicle-card">
                <img src="${vehicle.img}">
                <h3>${vehicle.name}</h3>
                <p>Type: ${vehicle.type}</p>
                <p>Price: $${vehicle.price}/day</p>
                <button onclick="openRentModal(${vehicle.id})">Rent Now</button>
            </div>
        `;
    });
}

// Filter vehicles by category
function filterVehicles(type) {
    const filtered = vehicles.filter(v => v.type === type);
    displayVehicles(filtered);
}

// Show rent modal
function openRentModal(id) {
    selectedVehicle = vehicles.find(v => v.id === id);

    document.getElementById("rentVehicleName").innerText =
        `Vehicle: ${selectedVehicle.name} ($${selectedVehicle.price}/day)`;

    document.getElementById("rentModal").style.display = "block";
}

// Close rent modal
function closeRentModal() {
    document.getElementById("rentModal").style.display = "none";
}

// Confirm rental
function confirmRent() {
    const name = document.getElementById("userName").value;
    const days = document.getElementById("rentalDays").value;

    if (!name || days <= 0) {
        alert("Please enter valid details!");
        return;
    }

    const total = selectedVehicle.price * days;
    alert(`Rental Confirmed!\n\nName: ${name}\nVehicle: ${selectedVehicle.name}\nDays: ${days}\nTotal: $${total}`);

    closeRentModal();
}

// Scroll to categories
function scrollToCategories() {
    document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
}
