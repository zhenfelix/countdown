// This file contains the JavaScript code for the web application. 
// It handles the interactivity and functionality of the app.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Web application is running.');

    const addEventBtn = document.getElementById('add-event-btn');
    const eventNameInput = document.getElementById('event-name');
    const eventDateInput = document.getElementById('event-date');
    const countdownList = document.getElementById('countdown-list');

    let events = [];

    addEventBtn.addEventListener('click', () => {
        const eventName = eventNameInput.value;
        const eventDate = new Date(eventDateInput.value);
        const currentDate = new Date();

        if (eventName && eventDate) {
            const timeDiff = eventDate - currentDate;
            const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            events.push({ name: eventName, days: daysDiff });
            events.sort((a, b) => a.days - b.days);

            renderEvents();

            // Reset input fields to default values
            eventNameInput.value = '';
            eventDateInput.value = '';
        } else {
            alert('Please enter a valid event name and date.');
        }
    });

    function renderEvents() {
        countdownList.innerHTML = '';
        events.forEach(event => {
            const listItem = document.createElement('li');
            listItem.textContent = `Countdown to ${event.name}: ${event.days} days`;
            countdownList.appendChild(listItem);
        });
    }
});