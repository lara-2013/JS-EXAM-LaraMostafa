
document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('global-country');
    const citySelect = document.getElementById('global-city');
    const yearSelect = document.getElementById('global-year');
    const searchBtn = document.getElementById('global-search-btn');

    // 1. FILL COUNTRIES
    async function loadCountries() {
        try {
            // We fetch name, code, flag, and capital all at once
            const res = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flag,capital');
            const countries = await res.json();

            // Sort them A-Z
            countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

            // Clear and fill
            countrySelect.innerHTML = '<option value="">Select Country</option>';
            countries.forEach(c => {
                const option = document.createElement('option');
                option.value = c.cca2;
                // Save the capital in a data attribute so we can grab it later
                option.setAttribute('data-capital', c.capital?.[0] || 'No Capital');
                option.setAttribute('data-fullname', c.name.common);
                option.textContent = `${c.flag} ${c.name.common}`;
                countrySelect.appendChild(option);
            });
            console.log("Countries loaded!");
        } catch (err) {
            console.error("Failed to load countries:", err);
        }
    }

    // 2. AUTO-SELECT CAPITAL WHEN COUNTRY CHANGES
    countrySelect.addEventListener('change', () => {
        const selectedOption = countrySelect.options[countrySelect.selectedIndex];
        const capital = selectedOption.getAttribute('data-capital');

        if (capital && countrySelect.value !== "") {
            // Set the city dropdown to only show the capital
            citySelect.innerHTML = `<option value="${capital}" selected>${capital}</option>`;
        } else {
            citySelect.innerHTML = `<option value="">Select City</option>`;
        }
    });

    // 3. EXPLORE BUTTON ACTION
    searchBtn.addEventListener('click', () => {
        const countryCode = countrySelect.value;
        const cityName = citySelect.value;
        const year = yearSelect.value;

        if (!countryCode) {
            Swal.fire('Error', 'Please select a country first', 'error');
            return;
        }

        // Update the UI labels
        const fullName = countrySelect.options[countrySelect.selectedIndex].getAttribute('data-fullname');
        document.getElementById('selected-country-name').textContent = fullName;
        document.getElementById('selected-city-name').textContent = `• ${cityName}`;

        // Update the flag image in the destination bar
        const flagUrl = `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
        document.getElementById('selected-country-flag').src = flagUrl;

        console.log(`Searching for ${fullName} (${countryCode}), Capital: ${cityName}, Year: ${year}`);

        // Here you would call your getHolidays(countryCode, year) function
    });

    loadCountries();
});


export async function fetchCountryDetails(countryCode) {
    try {
        // 1. Decide if we use /alpha/ (for EG) or /name/ (for Egypt)
        const endpoint = countryCode.length === 2 ? 'alpha' : 'name';
        const url = `https://restcountries.com/v3.1/${endpoint}/${countryCode}`;

        const response = await fetch(url);

        if (!response.ok) {
            console.error(`Country not found for: ${countryCode}`);
            return null;
        }

        const data = await response.json();

        // 2. IMPORTANT: /name/ returns an array [], /alpha/ returns a single object {}
        // This line handles both so your script.js always gets a clean object
        return Array.isArray(data) ? data[0] : data;

    } catch (error) {
        console.error("Fetch Error:", error);
        return null;
    }
}


export async function fetchEvents(cityName, countryCode) {
    try {
        // Step 1: Add a CORS Proxy to handle the block shown in your console
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=VwECw2OiAzxVzIqnwmKJUG41FbeXJk1y&city=${encodeURIComponent(cityName)}&countryCode=${countryCode}&size=20`;

        const response = await fetch(proxy + targetUrl);

        // Step 2: If we hit a 429 or 404, throw to the catch block
        if (!response.ok) throw new Error('Events not found or Rate Limited');

        const data = await response.json();

        // Step 3: Return the events or an empty array
        return data._embedded?.events || [];

    } catch (error) {
        console.error("API Fetch Error:", error);
        // CRITICAL CHANGE: Return [] instead of null so the UI updates
        return [];
    }
}


export async function fetchLongWeekends(year, countryCode) {
    // Ensure countryCode is uppercase (API requirement)
    const code = countryCode.toUpperCase();
    const url = `https://date.nager.at/api/v3/LongWeekend/${year}/${code}`;

    try {
        const response = await fetch(url);

        // If the country doesn't support long weekend data, it returns 404
        if (!response.ok) {
            console.warn(`No long weekend data for ${code}`);
            return [];
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Network Error:", error);
        return []; // Return empty array so your .forEach() doesn't crash
    }
}


export async function fetchHolidays(year, countryCode) {
    if (!countryCode) return []; // Safety check

    const code = countryCode.toUpperCase(); // Ensure it's uppercase
    const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${code}`; // Use 'code' here!

    try {
        const response = await fetch(url);
        if (!response.ok) return [];
        return await response.json();
    } catch (error) {
        return [];
    }
}


// ! WEATHER API

export async function fetchWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&timezone=auto`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Weather API failed");
    return await response.json();
}


// ! CURRENCY API

export async function fetchExchangeRates(currency) {
    const url = `https://v6.exchangerate-api.com/v6/04e5657950c3a94f5d946440/latest/${currency}`

    const response = await fetch(url);
    if (!response.ok) throw new Error("CURRENCY API FAILED");

    return await response.json();
}


// ! SUNTIME API
// api.js
export async function fetchSuntime(date, lat, lng) {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}&formatted=0`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`SUNTIME API FAILED`);
    return await response.json();
}