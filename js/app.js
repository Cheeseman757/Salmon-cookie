'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    const cities = [];
    const tableBody = document.getElementById('table-body'); // Ensure you have this in your HTML
    const form = document.getElementById('new-city-form');

    class City {
        constructor(city_name, min_customer, max_customer, avg_cookies) {
            this.city_name = city_name;
            this.min_customer = min_customer;
            this.max_customer = max_customer;
            this.avg_cookies = avg_cookies;
            cities.push(this); // Add this city to the cities array
        }

        amountOfCustomers() {
            return Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
        }

        cookiesPurchased() {
            return Math.ceil(this.amountOfCustomers() * this.avg_cookies);
        }

        drawRow() {
            const row = document.createElement('tr');
            let total_cookies = 0;
            row.innerHTML = `<td>${this.city_name}</td>`;
            hours.forEach(() => {
                const cookies = this.cookiesPurchased();
                row.innerHTML += `<td>${cookies}</td>`;
                total_cookies += cookies;
            });
            row.innerHTML += `<td>${total_cookies}</td>`;
            tableBody.appendChild(row);
        }
    }

    function drawHeaderRow() {
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `<th>Locations</th>`;
        hours.forEach(hour => headerRow.innerHTML += `<th>${hour}</th>`);
        headerRow.innerHTML += `<th>Daily Location Total</th>`;
        tableBody.appendChild(headerRow);
    }

    function handleNewCitySubmission() {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const city_name = document.getElementById('location-name').value;
            const min_customer = parseInt(document.getElementById('min-customers').value, 10);
            const max_customer = parseInt(document.getElementById('max-customers').value, 10);
            const avg_cookies = parseFloat(document.getElementById('avg-cookies').value);

            const newCity = new City(city_name, min_customer, max_customer, avg_cookies);
            newCity.drawRow();

            event.target.reset(); // Clear the form for the next input
        });
    }

    drawHeaderRow(); // Initialize the table with header row
    handleNewCitySubmission(); // Setup form submission handler
});
