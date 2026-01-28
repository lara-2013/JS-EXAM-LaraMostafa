// & GLOBAL





// ! SIDEBAR
function sideBar() {

    // & select the sections
    const holidaySec = document.querySelector(`#holidays-view`);
    const dashSec = document.querySelector(`#dashboard-view`);
    const eventSec = document.querySelector(`#events-view`);
    const weatherSec = document.querySelector(`#weather-view`);
    const longWeekendSec = document.querySelector(`#long-weekends-view`)
    const CurrencySec = document.querySelector(`#currency-view`)
    const Sunsec = document.querySelector(`#sun-times-view`)
    const myPlansSec = document.querySelector(`#my-plans-view`)

    // & select the btns
    let dash = document.querySelector(`#dash`)
    let holiday = document.querySelector('#holiday');
    let events = document.querySelector(`#events`);
    let weather = document.querySelector(`#weather`);
    let longWeekends = document.querySelector(`#longWeekends`);
    let currency = document.querySelector('#currency');
    let sunTimes = document.querySelector('#sunTimes');
    let myPlans = document.querySelector('#myPlans');

    // ! GOAL: add an eventListener to each BTN and remove and add the class `active` !


    holiday.addEventListener(`click`, function () {
        dashSec.classList.remove(`active`);
        eventSec.classList.remove(`active`);
        weatherSec.classList.remove(`active`);
        CurrencySec.classList.remove(`active`);
        Sunsec.classList.remove(`active`);
        myPlansSec.classList.remove(`active`);
        longWeekendSec.classList.remove(`active`);
        holidaySec.classList.add(`active`);
        dash.classList.remove(`active`);
        events.classList.remove(`active`);
        weather.classList.remove(`active`);
        currency.classList.remove(`active`);
        sunTimes.classList.remove(`active`);
        longWeekends.classList.remove(`active`);
        myPlans.classList.remove(`active`);
        holiday.classList.add(`active`);
    });

    events.addEventListener(`click`, function () {
        dashSec.classList.remove(`active`);
        holidaySec.classList.remove(`active`);
        weatherSec.classList.remove(`active`);
        CurrencySec.classList.remove(`active`);
        Sunsec.classList.remove(`active`);
        longWeekendSec.classList.remove(`active`);
        myPlansSec.classList.remove(`active`);
        eventSec.classList.add(`active`);
        dash.classList.remove(`active`);
        holiday.classList.remove(`active`);
        weather.classList.remove(`active`);
        currency.classList.remove(`active`);
        sunTimes.classList.remove(`active`);
        longWeekends.classList.remove(`active`);
        myPlans.classList.remove(`active`);
        events.classList.add(`active`);
    });

    weather.addEventListener(`click`, function () {
        dashSec.classList.remove(`active`);
        holidaySec.classList.remove(`active`);
        eventSec.classList.remove(`active`);
        CurrencySec.classList.remove(`active`);
        Sunsec.classList.remove(`active`);
        longWeekendSec.classList.remove(`active`);
        myPlansSec.classList.remove(`active`);
        weatherSec.classList.add(`active`);
        dash.classList.remove(`active`);
        holiday.classList.remove(`active`);
        events.classList.remove(`active`);
        currency.classList.remove(`active`);
        sunTimes.classList.remove(`active`);
        longWeekends.classList.remove(`active`);
        myPlans.classList.remove(`active`);
        weather.classList.add(`active`);
    });

    longWeekends.addEventListener(`click`, function () {
        dashSec.classList.remove(`active`);
        holidaySec.classList.remove(`active`);
        eventSec.classList.remove(`active`);
        CurrencySec.classList.remove(`active`);
        Sunsec.classList.remove(`active`);
        myPlansSec.classList.remove(`active`);
        weatherSec.classList.remove(`active`);
        longWeekendSec.classList.add(`active`);
        holiday.classList.remove(`active`);
        dash.classList.remove(`active`);
        weather.classList.remove(`active`);
        events.classList.remove(`active`);
        currency.classList.remove(`active`);
        sunTimes.classList.remove(`active`);
        myPlans.classList.remove(`active`);
        longWeekends.classList.add(`active`);
    });

    dash.addEventListener(`click`, function () {
        holidaySec.classList.remove(`active`);
        eventSec.classList.remove(`active`);
        longWeekendSec.classList.remove(`active`);
        CurrencySec.classList.remove(`active`);
        Sunsec.classList.remove(`active`);
        myPlansSec.classList.remove(`active`);
        weatherSec.classList.remove(`active`);
        dashSec.classList.add(`active`);
        holiday.classList.remove(`active`);
        events.classList.remove(`active`);
        longWeekends.classList.remove(`active`);
        currency.classList.remove(`active`);
        weather.classList.remove(`active`);
        sunTimes.classList.remove(`active`);
        myPlans.classList.remove(`active`);
        dash.classList.add(`active`);
    });

    currency.addEventListener(`click`, function () {
        holidaySec.classList.remove(`active`);
        dashSec.classList.remove(`active`);
        eventSec.classList.remove(`active`);
        longWeekendSec.classList.remove(`active`);
        CurrencySec.classList.add(`active`);
        Sunsec.classList.remove(`active`);
        weatherSec.classList.remove(`active`);
        myPlansSec.classList.remove(`active`);
        holiday.classList.remove(`active`);
        dash.classList.remove(`active`);
        events.classList.remove(`active`);
        longWeekends.classList.remove(`active`);
        weather.classList.remove(`active`);
        currency.classList.add(`active`);
        sunTimes.classList.remove(`active`);
        myPlans.classList.remove(`active`);
    });

    sunTimes.addEventListener(`click`, function () {
        holidaySec.classList.remove(`active`);
        dashSec.classList.remove(`active`);
        eventSec.classList.remove(`active`);
        longWeekendSec.classList.remove(`active`);
        CurrencySec.classList.remove(`active`);
        weatherSec.classList.remove(`active`);
        Sunsec.classList.add(`active`);
        myPlansSec.classList.remove(`active`);
        holiday.classList.remove(`active`);
        dash.classList.remove(`active`);
        events.classList.remove(`active`);
        longWeekends.classList.remove(`active`);
        weather.classList.remove(`active`);
        currency.classList.remove(`active`);
        sunTimes.classList.add(`active`);
        myPlans.classList.remove(`active`);
    });

    myPlans.addEventListener(`click`, function () {
        holidaySec.classList.remove(`active`);
        dashSec.classList.remove(`active`);
        eventSec.classList.remove(`active`);
        longWeekendSec.classList.remove(`active`);
        CurrencySec.classList.remove(`active`);
        Sunsec.classList.remove(`active`);
        weatherSec.classList.remove(`active`);
        myPlansSec.classList.add(`active`);
        holiday.classList.remove(`active`);
        dash.classList.remove(`active`);
        events.classList.remove(`active`);
        weather.classList.remove(`active`);
        longWeekends.classList.remove(`active`);
        currency.classList.remove(`active`);
        sunTimes.classList.remove(`active`);
        myPlans.classList.add(`active`);
    });
};

// ^ invoke the sideBar function
sideBar()


// ! LIVE CLOCK
function startLiveClock() {
    // & Select your HTML elements
    const headerTime = document.getElementById('current-datetime');
    const countryTime = document.getElementById('country-local-time');

    //  ! GOAL: update the date and time
    function update() {
        const now = new Date();

        // * create the Data Arrays
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // & Format Components
        const day = days[now.getDay()];
        const month = months[now.getMonth()];
        const date = now.getDate();

        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0'); // ~ HINT: make the bottom clock in the same function
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // & Convert to 12-hour format
        hours = hours % 12 || 12;

        // ~ Create strings
        // & NOTE: Top Header format: "Sun, Jan 25, 11:34 PM"
        headerTime.textContent = `${day}, ${month} ${date}, ${hours}:${minutes} ${ampm}`;

        // * Bottom Country format (includes seconds): "11:34:45 PM"
        if (countryTime) {
            countryTime.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
        }
    }

    // * Run immediately, then every second
    update();
    setInterval(update, 1000);
}

// ^ Invoke or call the startLiveClock function
startLiveClock();



// ! ADD HEARTS
function addHearts() {
    // & Select HTML elements
    const myPlansContainer = document.querySelector(`#plans-content`);
    const emptyState = document.querySelector(`.empty-state`);
    const badge = document.querySelector(`#plans-count`);
    const dashboardStat = document.querySelector(`#stat-saved`);

    // 1. Bottom-right Toast Configuration
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });


    document.addEventListener('click', function (e) {
        // Find the button (even if they click the heart icon inside it)
        const btn = e.target.closest('.holiday-action-btn');
        if (!btn) return;

        const parentCard = btn.closest('.holiday-card');
        const name = parentCard.querySelector('h3').textContent;
        const day = parentCard.querySelector('.day').textContent;
        const month = parentCard.querySelector('.month').textContent;
        const desc = parentCard.querySelector('.holiday-name').textContent;

        // 2. DUPLICATE CHECK
        const existingPlans = Array.from(document.querySelectorAll('.plan-name'));
        const isAlreadyAdded = existingPlans.some(p => p.textContent === name);

        if (isAlreadyAdded) {
            Toast.fire({
                icon: 'info',
                title: 'Already in your plans!'
            });
            return;
        }

        // 3. ADDING THE PLAN
        if (emptyState) emptyState.classList.add('hidden');

        // Toggle Heart Icon to Solid
        const heartIcon = btn.querySelector('i');
        heartIcon.classList.replace('fa-regular', 'fa-solid');

        const newCard = document.createElement('div');
        newCard.className = 'saved-plan-card';
        newCard.innerHTML = `
            <div class="category-badge">HOLIDAY</div>
            <div class="card-body">
                <h3 class="plan-name">${name}</h3>
                <div class="plan-info">
                    <div class="info-item"><i class="fa-regular fa-calendar"></i><span>${month} ${day}, 2026</span></div>
                    <div class="info-item"><i class="fa-solid fa-circle-info"></i><span>${desc}</span></div>
                </div>
                <button class="remove-plan-btn"><i class="fa-solid fa-trash"></i> Remove</button>
            </div>
        `;

        // 4. REMOVAL LOGIC WITH CONFIRMATION
        newCard.querySelector('.remove-plan-btn').onclick = function () {
            Swal.fire({
                title: 'Remove Plan?',
                text: ` Are you sure you want to remove this plan?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ef4444',
                cancelButtonColor: '#6b7280',
                confirmButtonText: 'Yes, remove it!',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    newCard.remove();
                    // Reset the heart icon on the original card
                    heartIcon.classList.replace('fa-solid', 'fa-regular');
                    updateUI();

                    Toast.fire({
                        icon: 'error',
                        title: 'Plan removed'
                    });
                }
            });
        };

        myPlansContainer.appendChild(newCard);
        updateUI();

        // Success Notification
        Toast.fire({
            icon: 'success',
            title: 'Added to your plans!'
        });
    });

    // 5. UI SYNCING (Badge, Dashboard, Empty State)
    function updateUI() {
        const count = document.querySelectorAll('.saved-plan-card').length;

        // Sidebar Badge
        if (badge) {
            badge.textContent = count;
            if (count > 0) {
                badge.classList.remove('hidden');
                badge.style.display = 'flex';
            } else {
                badge.classList.add('hidden');
                badge.style.display = 'none';
            }
        }

        // Dashboard Stat Number
        if (dashboardStat) {
            dashboardStat.textContent = count;
        }

        // Empty State Message
        if (count === 0 && emptyState) {
            emptyState.classList.remove('hidden');
        } else if (emptyState) {
            emptyState.classList.add('hidden');
        }
    }
}

// ^ Initialize the function
addHearts();



// ! SAVED PLANS SYSTEM (Holidays, Events, Long Weekends) with LocalStorage
function initSavedPlans() {
    const myPlansContainer = document.querySelector(`#plans-content`);
    const emptyState = document.querySelector(`.empty-state`);
    const badge = document.querySelector(`#plans-count`);
    const dashboardStat = document.querySelector(`#stat-saved`);

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });

    // --- INITIAL LOAD FROM LOCAL STORAGE ---
    function loadFromStorage() {
        const savedData = JSON.parse(localStorage.getItem('user_plans')) || [];
        savedData.forEach(plan => {
            createSavedCardUI(plan, false); // false = don't show toast on initial load
        });
        updateUI();
        syncHeartIcons();
    }

    // --- SAVE TO LOCAL STORAGE ---
    function saveToStorage(plan) {
        const savedData = JSON.parse(localStorage.getItem('user_plans')) || [];
        savedData.push(plan);
        localStorage.setItem('user_plans', JSON.stringify(savedData));
    }

    // --- REMOVE FROM LOCAL STORAGE ---
    function removeFromStorage(planName) {
        let savedData = JSON.parse(localStorage.getItem('user_plans')) || [];
        savedData = savedData.filter(p => p.name !== planName);
        localStorage.setItem('user_plans', JSON.stringify(savedData));
        syncHeartIcons();
    }

    // --- SYNC HEART ICONS (Ensures icons stay solid if plan exists) ---
    function syncHeartIcons() {
        const savedData = JSON.parse(localStorage.getItem('user_plans')) || [];
        const names = savedData.map(p => p.name);

        document.querySelectorAll('.holiday-action-btn i, .event-card-save i, .weekend-action-btn i').forEach(icon => {
            const card = icon.closest('.holiday-card, .event-card, .weekend-card, .lw-card');
            if (!card) return;

            const cardTitle = card.querySelector('h3').textContent;
            if (names.includes(cardTitle)) {
                icon.classList.replace('fa-regular', 'fa-solid');
            } else {
                icon.classList.replace('fa-solid', 'fa-regular');
            }
        });
    }

    // --- CREATE THE SAVED CARD UI ---
    function createSavedCardUI(plan, showFeedback = true) {
        const newCard = document.createElement('div');
        newCard.className = 'saved-plan-card';
        newCard.setAttribute('data-name', plan.name);
        newCard.innerHTML = `
            <div class="category-badge">${plan.category}</div>
            <div class="card-body">
                <h3 class="plan-name">${plan.name}</h3>
                <div class="plan-info">
                    <div class="info-item"><i class="fa-regular fa-calendar"></i><span>${plan.dateInfo}</span></div>
                    <div class="info-item"><i class="fa-solid fa-circle-info"></i><span>${plan.description}</span></div>
                </div>
                <button class="remove-plan-btn"><i class="fa-solid fa-trash"></i> Remove</button>
            </div>
        `;

        // Removal Logic
        newCard.querySelector('.remove-plan-btn').onclick = function () {
            Swal.fire({
                title: 'Remove Plan?',
                text: `Are you sure you want to remove this ${plan.category.toLowerCase()}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ef4444',
                confirmButtonText: 'Yes, remove it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    newCard.remove();
                    removeFromStorage(plan.name);
                    updateUI();
                    if (showFeedback) Toast.fire({ icon: 'error', title: 'Plan removed' });
                }
            });
        };

        myPlansContainer.appendChild(newCard);
    }

    // --- CLICK LISTENER ---
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.holiday-action-btn, .event-card-save, .weekend-action-btn, .lw-card .holiday-action-btn');
        if (!btn) return;

        let parentCard, name, dateInfo, description, category;

        // Support for your specific card classes
        if (btn.closest('.holiday-card')) {
            parentCard = btn.closest('.holiday-card');
            category = 'HOLIDAY';
            name = parentCard.querySelector('h3').textContent;
            dateInfo = `${parentCard.querySelector('.month').textContent} ${parentCard.querySelector('.day').textContent}, 2026`;
            description = parentCard.querySelector('.holiday-name').textContent;
        }
        else if (btn.closest('.event-card')) {
            parentCard = btn.closest('.event-card');
            category = 'EVENT';
            name = parentCard.querySelector('h3').textContent;
            dateInfo = parentCard.querySelector('.event-card-info div').textContent.trim();
            description = "Event in Cairo";
        }
        else if (btn.closest('.lw-card')) { // Long Weekend support
            parentCard = btn.closest('.lw-card');
            category = 'LONG WEEKEND';
            name = parentCard.querySelector('h3').textContent;
            dateInfo = parentCard.querySelector('.lw-dates').textContent.trim();
            description = parentCard.querySelector('.lw-badge').textContent.trim();
        }

        // Duplicate Check
        const savedData = JSON.parse(localStorage.getItem('user_plans')) || [];
        if (savedData.some(p => p.name === name)) {
            Toast.fire({ icon: 'info', title: 'Already in your plans!' });
            return;
        }

        // Action
        const planObj = { name, dateInfo, description, category };
        saveToStorage(planObj);
        createSavedCardUI(planObj);
        updateUI();
        syncHeartIcons();
        Toast.fire({ icon: 'success', title: 'Added to your plans!' });
    });

    function updateUI() {
        const count = document.querySelectorAll('.saved-plan-card').length;
        if (badge) {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
        if (dashboardStat) dashboardStat.textContent = count;
        if (emptyState) {
            count === 0 ? emptyState.classList.remove('hidden') : emptyState.classList.add('hidden');
        }
    }

    // Run on startup
    loadFromStorage();
}

// ^ Invoke the function
initSavedPlans();



// ! START EXPLORING BTN (in my plans)
function startExploring() {
    // & select HTML elements
    const btn = document.querySelector(`#start-exploring-btn`)
    const dashBoard = document.querySelector(`#dashboard-view`)
    const myPlans = document.querySelector(`#my-plans-view`)
    const dashBtn = document.querySelector(`#dash`)
    const plansBtn = document.querySelector(`#myPlans`)

    // ! GOAL: when I click on the btn, it takes me to the dashboard

    btn.addEventListener(`click`, function () {
        dashBoard.classList.add(`active`)
        myPlans.classList.remove(`active`)
        dashBtn.classList.add(`active`)
        plansBtn.classList.remove(`active`)
    })
}

// ^ invoke the startExploring function
startExploring()


// ! CHANGE THE HOLIDAY AND EVENTS AND LW BASED ON THE COUNTRY

import { fetchCountryDetails, fetchHolidays, fetchEvents, fetchLongWeekends } from './api.js';

async function updateDashboard(countryCode, cityName) {
    const year = document.getElementById('global-year').value || 2026;
    console.log(`Updating dashboard for ${cityName}, ${countryCode}...`);

    try {
        const [countryData, holidays, events, weekends] = await Promise.all([
            fetchCountryDetails(countryCode),
            fetchHolidays(year, countryCode),
            fetchEvents(cityName, countryCode),
            fetchLongWeekends(year, countryCode)
        ]);

        if (countryData) renderMainStats(countryData, cityName);
        if (holidays) renderHolidaysList(holidays);
        if (events) renderEvents(events);
        if (weekends) renderWeekends(weekends);

    } catch (error) {
        console.error("Dashboard failed to update:", error);
    }
}

// --- Renderers: Matching your HTML IDs ---

function renderMainStats(data, cityName) {
    // Top Display
    document.getElementById('selected-country-name').textContent = data.name.common;
    document.getElementById('selected-city-name').textContent = `• ${cityName}`;
    document.getElementById('selected-country-flag').src = data.flags.png;

    // Info Section
    const infoSection = document.getElementById('dashboard-country-info');
    if (infoSection) {
        infoSection.querySelector('h3').textContent = data.name.common;
        infoSection.querySelector('.official-name').textContent = data.name.official;
        infoSection.querySelector('.dashboard-country-flag').src = data.flags.png;

        // Update the Grid Values
        const details = infoSection.querySelectorAll('.dashboard-country-detail');
        details.forEach(detail => {
            const label = detail.querySelector('.label').textContent;
            if (label === 'Capital') detail.querySelector('.value').textContent = data.capital?.[0] || 'N/A';
            if (label === 'Population') detail.querySelector('.value').textContent = data.population.toLocaleString();
            if (label === 'Area') detail.querySelector('.value').textContent = `${data.area.toLocaleString()} km²`;
        });
    }
}

function renderHolidaysList(holidays) {
    const container = document.getElementById('holidays-content');
    if (!container) return;

    if (!holidays || holidays.length === 0) {
        container.innerHTML = `<p class="no-data">No upcoming holidays found for this city.</p>`;
        return;
    }

    container.innerHTML = holidays.map(h => {
        const date = new Date(h.date);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const dayName = date.toLocaleString('default', { weekday: 'long' });

        return `
            <div class="holiday-card">
                <div class="holiday-card-header">
                    <div class="holiday-date-box"><span class="day">${day}</span><span class="month">${month}</span></div>
                    <button class="holiday-action-btn"><i class="fa-regular fa-heart"></i></button>
                </div>
                <h3>${h.name}</h3>
                <p class="holiday-name">${h.localName || h.name}</p>
                <div class="holiday-card-footer">
                    <span class="holiday-day-badge"><i class="fa-regular fa-calendar"></i> ${dayName}</span>
                    <span class="holiday-type-badge">Public</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderEvents(events) {
    const container = document.getElementById('events-content');
    if (!container) return;

    if (!events || events.length === 0) {
        container.innerHTML = `<p class="no-data">No upcoming events found for this city.</p>`;
        return;
    }

    container.innerHTML = events.map(e => `
        <div class="event-card">
            <div class="event-card-image">
                <img src="${e.images?.[0]?.url || 'https://via.placeholder.com/400x200'}" alt="${e.name}">
                <span class="event-card-category">${e.classifications?.[0]?.segment?.name || 'Event'}</span>
            </div>
            <div class="event-card-body">
                <h3>${e.name || 'Untitled Event'}</h3>
                <div class="event-card-info">
                    <div><i class="fa-regular fa-calendar"></i> ${e.dates?.start?.localDate || 'Date TBD'}</div>
                    <div><i class="fa-solid fa-location-dot"></i> ${e._embedded?.venues?.[0]?.name || 'Venue TBD'}</div>
                </div>
                <div class="event-card-footer">
                    <a href="${e.url}" target="_blank" class="btn-buy-ticket"><i class="fa-solid fa-ticket"></i> Tickets</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderWeekends(weekends) {
    const container = document.querySelector(`#lw-content`);

    if (!container) return;

    if (!weekends || weekends.length === 0) {
        container.innerHTML = `<p class="no-data">No upcoming Weekends found for this city.</p>`;
        return;
    }

    container.innerHTML = weekends.map(w => `
                        <div class="lw-card">
                            <div class="lw-card-header">
                                <span class="lw-badge"><i class="fa-solid fa-calendar-days"></i> ${w.dayCount} Days</span>
                                <button class="holiday-action-btn"><i class="fa-regular fa-heart"></i></button>
                            </div>
                            <h3>Long Weekend #1</h3>
                            <div class="lw-dates"><i class="fa-regular fa-calendar"></i> ${w.startDate} - ${w.endDate}</div>
                            <div class="lw-info-box ${w.needBridgeDay ? "warning" : "success    "}"><i class="fa-solid ${w.needBridgeDay ? "fa-circle-info" : "fa-circle-check"}"></i> ${w.needBridgeDay ? "Requires a bridge day off" : "No extra days off needed!"}</div>
                            <div class="lw-days-visual">
                                <div class="lw-day"><span class="name">Thu</span><span class="num">1</span></div>
                                <div class="lw-day weekend"><span class="name">Fri</span><span class="num">2</span>
                                </div>
                                <div class="lw-day weekend"><span class="name">Sat</span><span class="num">3</span>
                                </div>
                                <div class="lw-day weekend"><span class="name">Sun</span><span class="num">4</span>
                                </div>
                            </div>
                        </div>`).join(``);

}

// --- Trigger: Initializing the App ---
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('global-search-btn');
    const countrySelect = document.getElementById('global-country');
    const citySelect = document.getElementById('global-city');

    searchBtn.addEventListener('click', () => {
        const country = countrySelect.value;
        const city = citySelect.value;

        if (!country) {
            Swal.fire('Error', 'Please select a country!', 'error');
            return;
        }

        updateDashboard(country, city);
    });
});


// ! ORGANIZING TABS IN MY PLANS
function initPlanFilters() {
    const filterButtons = document.querySelectorAll('.plan-filter');
    const plansContainer = document.getElementById('plans-content');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Update active button UI
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter'); // all, holiday, event, longweekend
            const cards = plansContainer.querySelectorAll('.saved-plan-card');

            cards.forEach(card => {
                // We check the text inside your .category-badge (e.g., "HOLIDAY")
                const cardCategory = card.querySelector('.category-badge').textContent.toLowerCase().replace(" ", "");

                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                } else if (cardCategory === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ~ 3. Function to update those (0) numbers in the filter bar
function updateFilterCounts() {
    const allCards = document.querySelectorAll('.saved-plan-card');
    let holidayCount = 0;
    let eventCount = 0;
    let lwCount = 0;

    allCards.forEach(card => {
        const cat = card.querySelector('.category-badge').textContent.toUpperCase();
        if (cat === 'HOLIDAY') holidayCount++;
        if (cat === 'EVENT') eventCount++;
        if (cat === 'LONG WEEKEND') lwCount++;
    });

    document.getElementById('filter-all-count').textContent = allCards.length;
    document.getElementById('filter-holiday-count').textContent = holidayCount;
    document.getElementById('filter-event-count').textContent = eventCount;
    document.getElementById('filter-lw-count').textContent = lwCount;
}
// ^ Call this inside your updateUI() function so it refreshes when you add/remove plans
initPlanFilters();
updateFilterCounts()




// ! WEATHER
import { fetchWeather } from "./api.js";

const searchBtn = document.getElementById('global-search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', async () => {
        const citySelect = document.getElementById('global-city');
        const cityName = citySelect ? citySelect.value : '';
        if (!cityName || cityName.includes("Select")) return;

        try {
            // Get Coords
            const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
            const geoData = await geoRes.json();
            const { latitude, longitude } = geoData.results[0];

            // Get Data
            const weatherData = await fetchWeather(latitude, longitude);

            // --- 1. HERO UPDATE ---
            const temp = Math.round(weatherData.current.temperature_2m);
            const code = weatherData.current.weather_code;
            let theme = 'weather-sunny';
            let icon = 'fa-sun';

            if (code >= 51) { theme = 'weather-rainy'; icon = 'fa-cloud-showers-heavy'; }
            else if (code >= 1) { theme = 'weather-cloudy'; icon = 'fa-cloud-sun'; }
            if (temp >= 30) theme = 'weather-hot';
            else if (temp <= 12) theme = 'weather-cold';

            const hero = document.querySelector('.weather-hero-card');
            if (hero) hero.className = `weather-hero-card ${theme}`;
            document.querySelector('.weather-hero-icon i').className = `fa-solid ${icon}`;
            document.querySelector('.temp-value').textContent = temp;
            document.querySelector('.weather-location span').textContent = cityName;

            // Fix Hero Date (Today's Date in that city)
            const heroDate = new Date(weatherData.current.time);
            document.querySelector('.weather-time').textContent = heroDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

            // --- 2. GRID UPDATE (Humidity, Wind, UV, Rain %) ---
            const detailValues = document.querySelectorAll('.detail-value');
            detailValues[0].textContent = `${weatherData.current.relative_humidity_2m}%`;
            detailValues[1].textContent = `${Math.round(weatherData.current.wind_speed_10m)} km/h`;
            detailValues[2].textContent = Math.round(weatherData.daily.uv_index_max[0]);
            detailValues[3].textContent = `${weatherData.daily.precipitation_probability_max[0]}%`;

            // --- 3. HOURLY FORECAST SYNC ---
            const hourlyItems = document.querySelectorAll('.hourly-item');
            hourlyItems.forEach((item, i) => {
                const hTime = new Date(weatherData.hourly.time[i]);
                const hTemp = Math.round(weatherData.hourly.temperature_2m[i]);
                const hCode = weatherData.hourly.weather_code[i];

                item.querySelector('.hourly-temp').textContent = `${hTemp}°`;
                item.querySelector('.hourly-icon i').className = `fa-solid ${getIcon(hCode)}`;

                // Fix the Time Labels (Now, 2 PM, etc.)
                const timeLabel = item.querySelector('.hourly-time');
                if (i === 0) {
                    timeLabel.textContent = "Now";
                } else {
                    timeLabel.textContent = hTime.toLocaleString('en-US', { hour: 'numeric', hour12: true });
                }
            });

            // --- 4. 7-DAY FORECAST SYNC ---
            const forecastDays = document.querySelectorAll('.forecast-day');
            forecastDays.forEach((dayEl, i) => {
                const dDate = new Date(weatherData.daily.time[i]);
                const dMax = Math.round(weatherData.daily.temperature_2m_max[i]);
                const dMin = Math.round(weatherData.daily.temperature_2m_min[i]);
                const dProb = weatherData.daily.precipitation_probability_max[i];

                // Fix Day (Sun) and Date (29 Jan)
                dayEl.querySelector('.day-label').textContent = i === 0 ? "Today" : dDate.toLocaleDateString('en-US', { weekday: 'short' });
                dayEl.querySelector('.day-date').textContent = dDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

                dayEl.querySelector('.temp-max').textContent = `${dMax}°`;
                dayEl.querySelector('.temp-min').textContent = `${dMin}°`;
                dayEl.querySelector('.forecast-icon i').className = `fa-solid ${getIcon(weatherData.daily.weather_code[i])}`;

                // Update internal rain droplets
                const precip = dayEl.querySelector('.forecast-precip');
                precip.innerHTML = dProb > 0 ? `<i class="fa-solid fa-droplet"></i><span>${dProb}%</span>` : '';
            });

        } catch (err) { console.error("Master Update Failed:", err); }
    });
}

function getIcon(code) {
    if (code >= 51) return 'fa-cloud-showers-heavy';
    if (code >= 1 && code <= 3) return 'fa-cloud-sun';
    if (code >= 45 && code <= 48) return 'fa-smog';
    return 'fa-sun';
}



// ! CLEAR ALL IN MY PLANS
const clearAllBtn = document.getElementById('clear-all-plans-btn');

if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to delete all your saved plans?")) {

            // 1. Wipe the specific key found in your code
            localStorage.removeItem('user_plans');

            // 2. Reset the Count Badges to 0
            document.getElementById('filter-all-count').textContent = '0';
            document.getElementById('filter-holiday-count').textContent = '0';
            document.getElementById('filter-event-count').textContent = '0';
            document.getElementById('filter-lw-count').textContent = '0';

            // 3. Update the UI to show the Empty State
            const plansGrid = document.getElementById('plans-content');
            if (plansGrid) {
                plansGrid.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon"><i class="fa-solid fa-heart-crack"></i></div>
                        <h3>No Saved Plans Yet</h3>
                        <p>Start exploring and save holidays, events, or long weekends you like!</p>
                        <button class="btn-primary" id="start-exploring-btn">
                            <i class="fa-solid fa-compass"></i> Start Exploring
                        </button>
                    </div>`;
            }

            console.log("LocalStorage 'user_plans' has been cleared.");
        }
    });
}


// ! SIDEBAR CLICK FOR MOBILE

function mobileAside() {
    const btn = document.querySelector('#mobile-menu-btn');
    const sideBar = document.querySelector('#sidebar'); // Use the ID for accuracy

    if (btn && sideBar) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            sideBar.classList.toggle('mobile-open');
        });

        // Close it if the user clicks anywhere else on the screen
        document.addEventListener('click', (e) => {
            if (!sideBar.contains(e.target) && e.target !== btn) {
                sideBar.classList.remove('mobile-open');
            }
        });
    }
}
mobileAside();


// ! CURRENCY
import { fetchExchangeRates } from "./api.js";

class CurrencyConverter {
    constructor() {
        // 1. Initialize DOM Elements as class properties
        this.amountInput = document.getElementById('currency-amount');
        this.fromSelect = document.getElementById('currency-from');
        this.toSelect = document.getElementById('currency-to');
        this.convertBtn = document.getElementById('convert-btn');
        this.swapBtn = document.getElementById('swap-currencies-btn');

        // Result display elements
        this.resFromAmount = document.querySelector('.conversion-from .amount');
        this.resFromCode = document.querySelector('.conversion-from .currency-code');
        this.resToAmount = document.querySelector('.conversion-to .amount');
        this.resToCode = document.querySelector('.conversion-to .currency-code');
        this.rateInfoText = document.querySelector('.exchange-rate-info p');

        // 2. Start event listeners immediately
        this.bindEvents();
    }

    // Method to attach listeners
    bindEvents() {
        this.convertBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.convert();
        });

        this.swapBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.swap();
        });
    }

    // The Swap Logic (Method)
    swap() {
        const temp = this.fromSelect.value;
        this.fromSelect.value = this.toSelect.value;
        this.toSelect.value = temp;

        // Auto-convert after swap
        this.convert();
    }

    // The Conversion Logic (Method)
    async convert() {
        const amount = parseFloat(this.amountInput.value);
        const from = this.fromSelect.value;
        const to = this.toSelect.value;

        if (isNaN(amount)) return;

        try {
            const data = await fetchExchangeRates(from);

            if (data && data.result === "success") {
                const rate = data.conversion_rates[to];
                const total = amount * rate;

                this.updateUI(amount, from, total, to, rate);
            }
        } catch (error) {
            console.error("OOP Converter Error:", error.message);
        }
    }

    // Method specifically for UI updates
    updateUI(amount, from, total, to, rate) {
        this.resFromAmount.textContent = amount.toFixed(2);
        this.resFromCode.textContent = from;

        this.resToAmount.textContent = total.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        this.resToCode.textContent = to;

        this.rateInfoText.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
    }
}

// 3. Create the instance to start the app
new CurrencyConverter();





// ! SUNTIME
import { fetchSuntime } from "./api.js";

async function runSunUpdate() {
    // 1. Grab values directly from the dropdowns
    const countryDropdown = document.getElementById('global-country');
    const cityDropdown = document.getElementById('global-city');

    if (!countryDropdown || !cityDropdown) {
        console.error("Dropdowns not found!");
        return;
    }

    const countryCode = countryDropdown.value;
    const cityName = cityDropdown.value;

    try {
        // 2. Get coords (Assuming fetchCountryDetails is in your script.js scope)
        const countryData = await fetchCountryDetails(countryCode);
        if (!countryData || !countryData.latlng) return;

        const [lat, lng] = countryData.latlng;
        const today = new Date().toISOString().split('T')[0];

        // 3. Fetch Sun Data from your api.js
        const sunData = await fetchSuntime(today, lat, lng);

        if (sunData && sunData.status === "OK") {
            const r = sunData.results;

            // --- A. UPDATE LOCATION & DATE ---
            const now = new Date();
            const dateEl = document.querySelector('.sun-date-display .date');
            const dayEl = document.querySelector('.sun-date-display .day');
            const locationHeader = document.querySelector('.sun-location h2');

            if (dateEl) dateEl.textContent = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            if (dayEl) dayEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
            if (locationHeader) locationHeader.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${cityName}`;

            // --- B. UPDATE THE 6 CARDS ---
            const formatTime = (iso) => new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

            // Using very specific selectors to force the update
            document.querySelector('.sun-time-card.dawn .time').textContent = formatTime(r.civil_twilight_begin);
            document.querySelector('.sun-time-card.sunrise .time').textContent = formatTime(r.sunrise);
            document.querySelector('.sun-time-card.noon .time').textContent = formatTime(r.solar_noon);
            document.querySelector('.sun-time-card.sunset .time').textContent = formatTime(r.sunset);
            document.querySelector('.sun-time-card.dusk .time').textContent = formatTime(r.civil_twilight_end);

            // Day Length Card
            const h = Math.floor(r.day_length / 3600);
            const m = Math.floor((r.day_length % 3600) / 60);
            const durationStr = `${h}h ${m}m`;
            document.querySelector('.sun-time-card.daylight .time').textContent = durationStr;

            // --- C. UPDATE DISTRIBUTION SECTION ---
            const dayPercent = ((r.day_length / 86400) * 100).toFixed(1);
            const progressFill = document.querySelector('.day-progress-fill');
            if (progressFill) progressFill.style.width = `${dayPercent}%`;

            const stats = document.querySelectorAll('.day-stat .value');
            if (stats.length >= 3) {
                stats[0].textContent = durationStr; // Daylight
                stats[1].textContent = `${dayPercent}%`; // %
                const darkSecs = 86400 - r.day_length;
                stats[2].textContent = `${Math.floor(darkSecs / 3600)}h ${Math.floor((darkSecs % 3600) / 60)}m`; // Darkness
            }
        }
    } catch (err) {
        console.error("Critical Update Failure:", err);
    }
}

// THE BUTTON LISTENER
const exploreBtn = document.getElementById('global-search-btn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Stop any potential form refresh
        runSunUpdate();
    });
}