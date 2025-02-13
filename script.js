async function fetchLeads() {
    const location = document.getElementById("location").value.trim().toLowerCase();
    const niche = document.getElementById("niche").value;

    if (!location) {
        alert("Please enter a valid location.");
        return;
    }

    // Fetch data from JSON (replace with actual API later)
    const response = await fetch("leads.json");
    const data = await response.json();

    const filteredLeads = data.filter(lead => lead.location.includes(location) && lead.niche === niche);

    displayResults(filteredLeads);
}

function displayResults(leads) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h3>Results:</h3>";

    if (leads.length === 0) {
        resultsDiv.innerHTML += "<p>No leads found for this location and niche.</p>";
        return;
    }

    leads.forEach(lead => {
        resultsDiv.innerHTML += `
            <div>
                <strong>${lead.name}</strong><br>
                📞 ${lead.phone}<br>
                🌐 <a href="${lead.website}" target="_blank">Website</a><br>
                📍 ${lead.location}
                <hr>
            </div>
        `;
    });
}
