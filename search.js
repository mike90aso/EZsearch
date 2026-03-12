// DOT Alliance Location Search - Fast Local Search

const SEARCH_RADIUS_MILES = 30;

// State name to abbreviation mapping
const stateMap = {
  'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR', 'california': 'CA',
  'colorado': 'CO', 'connecticut': 'CT', 'delaware': 'DE', 'florida': 'FL', 'georgia': 'GA',
  'hawaii': 'HI', 'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA',
  'kansas': 'KS', 'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD',
  'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS', 'missouri': 'MO',
  'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV', 'new hampshire': 'NH', 'new jersey': 'NJ',
  'new mexico': 'NM', 'new york': 'NY', 'north carolina': 'NC', 'north dakota': 'ND', 'ohio': 'OH',
  'oklahoma': 'OK', 'oregon': 'OR', 'pennsylvania': 'PA', 'rhode island': 'RI', 'south carolina': 'SC',
  'south dakota': 'SD', 'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT', 'vermont': 'VT',
  'virginia': 'VA', 'washington': 'WA', 'west virginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY'
};

// Major US cities with coordinates for instant lookup
const majorCities = {
  // Florida
  "orlando": { lat: 28.5383, lng: -81.3792, state: "FL" },
  "maitland": { lat: 28.6278, lng: -81.3631, state: "FL" },
  "winter park": { lat: 28.5997, lng: -81.3392, state: "FL" },
  "kissimmee": { lat: 28.2920, lng: -81.4076, state: "FL" },
  "sanford": { lat: 28.8001, lng: -81.2733, state: "FL" },
  "altamonte springs": { lat: 28.6611, lng: -81.3656, state: "FL" },
  "casselberry": { lat: 28.6778, lng: -81.3278, state: "FL" },
  "longwood": { lat: 28.7031, lng: -81.3384, state: "FL" },
  "oviedo": { lat: 28.6700, lng: -81.2081, state: "FL" },
  "apopka": { lat: 28.6934, lng: -81.5322, state: "FL" },
  "miami": { lat: 25.7617, lng: -80.1918, state: "FL" },
  "fort lauderdale": { lat: 26.1224, lng: -80.1373, state: "FL" },
  "hollywood": { lat: 26.0112, lng: -80.1495, state: "FL" },
  "pompano beach": { lat: 26.2379, lng: -80.1248, state: "FL" },
  "boca raton": { lat: 26.3587, lng: -80.0831, state: "FL" },
  "west palm beach": { lat: 26.7153, lng: -80.0534, state: "FL" },
  "palm beach gardens": { lat: 26.8234, lng: -80.1387, state: "FL" },
  "jupiter": { lat: 26.9342, lng: -80.0942, state: "FL" },
  "delray beach": { lat: 26.4615, lng: -80.0728, state: "FL" },
  "boynton beach": { lat: 26.5254, lng: -80.0662, state: "FL" },
  "tampa": { lat: 27.9506, lng: -82.4572, state: "FL" },
  "st petersburg": { lat: 27.7676, lng: -82.6403, state: "FL" },
  "clearwater": { lat: 27.9659, lng: -82.8001, state: "FL" },
  "brandon": { lat: 27.9378, lng: -82.2859, state: "FL" },
  "lakeland": { lat: 28.0395, lng: -81.9498, state: "FL" },
  "winter haven": { lat: 28.0222, lng: -81.7329, state: "FL" },
  "sarasota": { lat: 27.3364, lng: -82.5307, state: "FL" },
  "bradenton": { lat: 27.4989, lng: -82.5748, state: "FL" },
  "jacksonville": { lat: 30.3322, lng: -81.6557, state: "FL" },
  "st augustine": { lat: 29.8946, lng: -81.3145, state: "FL" },
  "orange park": { lat: 30.1661, lng: -81.7065, state: "FL" },
  "tallahassee": { lat: 30.4383, lng: -84.2807, state: "FL" },
  "gainesville": { lat: 29.6516, lng: -82.3248, state: "FL" },
  "ocala": { lat: 29.1872, lng: -82.1401, state: "FL" },
  "daytona beach": { lat: 29.2108, lng: -81.0228, state: "FL" },
  "ormond beach": { lat: 29.2858, lng: -81.0559, state: "FL" },
  "port orange": { lat: 29.1383, lng: -80.9956, state: "FL" },
  "deland": { lat: 29.0283, lng: -81.3031, state: "FL" },
  "pensacola": { lat: 30.4213, lng: -87.2169, state: "FL" },
  "panama city": { lat: 30.1588, lng: -85.6602, state: "FL" },
  "naples": { lat: 26.1420, lng: -81.7948, state: "FL" },
  "fort myers": { lat: 26.6406, lng: -81.8723, state: "FL" },
  "cape coral": { lat: 26.5629, lng: -81.9495, state: "FL" },
  "oakland park": { lat: 26.1723, lng: -80.1320, state: "FL" },
  "lauderhill": { lat: 26.1423, lng: -80.2134, state: "FL" },
  "sunrise": { lat: 26.1336, lng: -80.1131, state: "FL" },
  "plantation": { lat: 26.1276, lng: -80.2331, state: "FL" },
  "davie": { lat: 26.0765, lng: -80.2521, state: "FL" },
  "coral springs": { lat: 26.2712, lng: -80.2706, state: "FL" },
  "margate": { lat: 26.2445, lng: -80.2064, state: "FL" },
  "coconut creek": { lat: 26.2517, lng: -80.1789, state: "FL" },
  "deerfield beach": { lat: 26.3184, lng: -80.0998, state: "FL" },
  "north miami": { lat: 25.8901, lng: -80.1867, state: "FL" },
  "north miami beach": { lat: 25.9331, lng: -80.1625, state: "FL" },
  "aventura": { lat: 25.9565, lng: -80.1392, state: "FL" },
  "hialeah": { lat: 25.8576, lng: -80.2781, state: "FL" },
  "miami beach": { lat: 25.7907, lng: -80.1300, state: "FL" },
  "coral gables": { lat: 25.7215, lng: -80.2684, state: "FL" },
  "kendall": { lat: 25.6795, lng: -80.3468, state: "FL" },
  "homestead": { lat: 25.4687, lng: -80.4776, state: "FL" },
  
  // Texas
  "dallas": { lat: 32.7767, lng: -96.7970, state: "TX" },
  "fort worth": { lat: 32.7555, lng: -97.3308, state: "TX" },
  "arlington": { lat: 32.7357, lng: -97.1081, state: "TX" },
  "plano": { lat: 33.0198, lng: -96.6989, state: "TX" },
  "irving": { lat: 32.8140, lng: -96.9489, state: "TX" },
  "garland": { lat: 32.9126, lng: -96.6389, state: "TX" },
  "houston": { lat: 29.7604, lng: -95.3698, state: "TX" },
  "san antonio": { lat: 29.4241, lng: -98.4936, state: "TX" },
  "austin": { lat: 30.2672, lng: -97.7431, state: "TX" },
  "el paso": { lat: 31.7619, lng: -106.4850, state: "TX" },
  "corpus christi": { lat: 27.8006, lng: -97.3964, state: "TX" },
  "lubbock": { lat: 33.5779, lng: -101.8552, state: "TX" },
  "laredo": { lat: 27.5306, lng: -99.4803, state: "TX" },
  "mcallen": { lat: 26.2034, lng: -98.2300, state: "TX" },
  "waco": { lat: 31.5493, lng: -97.1467, state: "TX" },
  
  // California
  "los angeles": { lat: 34.0522, lng: -118.2437, state: "CA" },
  "san diego": { lat: 32.7157, lng: -117.1611, state: "CA" },
  "san francisco": { lat: 37.7749, lng: -122.4194, state: "CA" },
  "oakland": { lat: 37.8044, lng: -122.2712, state: "CA" },
  "san jose": { lat: 37.3382, lng: -121.8863, state: "CA" },
  "fresno": { lat: 36.7468, lng: -119.7726, state: "CA" },
  "sacramento": { lat: 38.5816, lng: -121.4944, state: "CA" },
  "long beach": { lat: 33.7701, lng: -118.1937, state: "CA" },
  "stockton": { lat: 37.9577, lng: -121.2908, state: "CA" },
  "bakersfield": { lat: 35.3733, lng: -119.0187, state: "CA" },
  "anaheim": { lat: 33.8366, lng: -117.9143, state: "CA" },
  "santa ana": { lat: 33.7455, lng: -117.8677, state: "CA" },
  "riverside": { lat: 33.9533, lng: -117.3962, state: "CA" },
  "irvine": { lat: 33.6846, lng: -117.8265, state: "CA" },
  "glendale": { lat: 34.1425, lng: -118.2551, state: "CA" },
  "pasadena": { lat: 34.1478, lng: -118.1445, state: "CA" },
  
  // Illinois
  "chicago": { lat: 41.8781, lng: -87.6298, state: "IL" },
  "aurora": { lat: 41.7606, lng: -88.3201, state: "IL" },
  "naperville": { lat: 41.7508, lng: -88.1535, state: "IL" },
  "joliet": { lat: 41.5250, lng: -88.0817, state: "IL" },
  "rockford": { lat: 42.2711, lng: -89.0940, state: "IL" },
  "springfield": { lat: 39.7817, lng: -89.6501, state: "IL" },
  "peoria": { lat: 40.6936, lng: -89.5890, state: "IL" },
  
  // Georgia
  "atlanta": { lat: 33.7490, lng: -84.3880, state: "GA" },
  "augusta": { lat: 33.4735, lng: -82.0105, state: "GA" },
  "columbus": { lat: 32.4610, lng: -84.9877, state: "GA" },
  "savannah": { lat: 32.0809, lng: -81.0912, state: "GA" },
  "athens": { lat: 33.9519, lng: -83.3576, state: "GA" },
  "macon": { lat: 32.8407, lng: -83.6324, state: "GA" },
  
  // Other major cities
  "new york": { lat: 40.7128, lng: -74.0060, state: "NY" },
  "brooklyn": { lat: 40.6782, lng: -73.9442, state: "NY" },
  "queens": { lat: 40.7282, lng: -73.7949, state: "NY" },
  "phoenix": { lat: 33.4484, lng: -112.0740, state: "AZ" },
  "philadelphia": { lat: 39.9526, lng: -75.1652, state: "PA" },
  "seattle": { lat: 47.6062, lng: -122.3321, state: "WA" },
  "denver": { lat: 39.7392, lng: -104.9903, state: "CO" },
  "boston": { lat: 42.3601, lng: -71.0589, state: "MA" },
  "somerville": { lat: 42.3876, lng: -71.0995, state: "MA" },
  "cambridge": { lat: 42.3736, lng: -71.1097, state: "MA" },
  "las vegas": { lat: 36.1699, lng: -115.1398, state: "NV" },
  "portland": { lat: 45.5152, lng: -122.6784, state: "OR" },
  "gresham": { lat: 45.5001, lng: -122.4302, state: "OR" },
  "detroit": { lat: 42.3314, lng: -83.0458, state: "MI" },
  "minneapolis": { lat: 44.9778, lng: -93.2650, state: "MN" },
  "indianapolis": { lat: 39.7684, lng: -86.1581, state: "IN" },
  "kansas city": { lat: 39.0997, lng: -94.5786, state: "MO" },
  "cincinnati": { lat: 39.1031, lng: -84.5120, state: "OH" },
  "cleveland": { lat: 41.4993, lng: -81.6944, state: "OH" },
  "columbus": { lat: 39.9612, lng: -82.9988, state: "OH" },
  "nashville": { lat: 36.1627, lng: -86.7816, state: "TN" },
  "memphis": { lat: 35.1495, lng: -90.0490, state: "TN" },
  "louisville": { lat: 38.2527, lng: -85.7585, state: "KY" },
  "fort mitchell": { lat: 39.0595, lng: -84.5469, state: "KY" },
  "covington": { lat: 39.0837, lng: -84.5086, state: "KY" },
  "milwaukee": { lat: 43.0389, lng: -87.9065, state: "WI" },
  "new orleans": { lat: 29.9511, lng: -90.0715, state: "LA" },
  "reno": { lat: 39.5296, lng: -119.8138, state: "NV" },
  "renton": { lat: 47.4829, lng: -122.2171, state: "WA" },
  "wichita": { lat: 37.6872, lng: -97.3301, state: "KS" },
  "lincoln": { lat: 40.8258, lng: -96.6852, state: "NE" },
  "olive branch": { lat: 34.9618, lng: -89.8295, state: "MS" },
  "richmond": { lat: 37.5407, lng: -77.4360, state: "VA" },
  "norfolk": { lat: 36.8508, lng: -76.2859, state: "VA" },
  "virginia beach": { lat: 36.8529, lng: -75.9780, state: "VA" }
};

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('location-search');
  const searchBtn = document.getElementById('search-btn');
  const useLocationBtn = document.getElementById('use-location-btn');
  const resultsContainer = document.getElementById('results-container');
  const allLocationsGrid = document.getElementById('all-locations-grid');
  const allLocationsSection = document.getElementById('all-locations');

  // Display all locations on page load
  displayAllLocations();

  // Search button click
  searchBtn.addEventListener('click', performSearch);

  // Enter key in search input
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  // Use current location button
  useLocationBtn.addEventListener('click', useCurrentLocation);

  function performSearch() {
    const rawQuery = searchInput.value.trim();
    if (!rawQuery) {
      resultsContainer.innerHTML = '<p class="search-message">Please enter a city, state, or zip code to search.</p>';
      allLocationsSection.style.display = 'block';
      return;
    }

    allLocationsSection.style.display = 'none';

    // Try to get coordinates from query
    const coordinates = getCoordinatesFromQuery(rawQuery);
    
    if (coordinates) {
      const nearbyLocations = findLocationsWithinRadius(coordinates.lat, coordinates.lng, SEARCH_RADIUS_MILES);
      
      if (nearbyLocations.length > 0) {
        displayResults(
          nearbyLocations, 
          `Found ${nearbyLocations.length} provider${nearbyLocations.length > 1 ? 's' : ''} within ${SEARCH_RADIUS_MILES} miles of ${coordinates.displayName || rawQuery}:`,
          true
        );
      } else {
        // No locations within radius - show closest ones anyway
        const allWithDistance = locations.map(loc => ({
          ...loc,
          distance: calculateDistance(coordinates.lat, coordinates.lng, loc.lat, loc.lng)
        })).sort((a, b) => a.distance - b.distance);

        const closest = allWithDistance.slice(0, 3);
        displayResults(
          closest,
          `No providers within ${SEARCH_RADIUS_MILES} miles of "${rawQuery}". Here are the closest options:`,
          true
        );
      }
    } else {
      // Couldn't find coordinates - check for exact location matches or state search
      const exactMatches = findExactMatches(rawQuery);
      
      if (exactMatches.length > 0) {
        displayResults(exactMatches, `Found ${exactMatches.length} provider${exactMatches.length > 1 ? 's' : ''} matching "${rawQuery}"`);
      } else {
        resultsContainer.innerHTML = `
          <p class="search-message">Couldn't find "${rawQuery}". Please try a different city, state, or zip code.</p>
        `;
        allLocationsSection.style.display = 'block';
      }
    }
  }

  function getCoordinatesFromQuery(query) {
    const cleanQuery = query.toLowerCase().replace(/,/g, ' ').replace(/\s+/g, ' ').trim();
    
    // Check for zip code (5 digits)
    const zipMatch = query.match(/\b(\d{5})\b/);
    if (zipMatch) {
      const coords = getZipCoordinates(zipMatch[1]);
      if (coords) {
        return { ...coords, displayName: `ZIP ${zipMatch[1]}` };
      }
    }
    
    // Check for city name in our database
    // First try exact match
    if (majorCities[cleanQuery]) {
      const city = majorCities[cleanQuery];
      return { lat: city.lat, lng: city.lng, displayName: `${capitalizeWords(cleanQuery)}, ${city.state}` };
    }
    
    // Try city + state format (e.g., "orlando fl", "orlando florida")
    const parts = cleanQuery.split(' ');
    
    // Check if last part is a state
    let stateAbbrev = null;
    let cityParts = [...parts];
    
    const lastPart = parts[parts.length - 1];
    if (lastPart.length === 2 && Object.values(stateMap).map(s => s.toLowerCase()).includes(lastPart)) {
      stateAbbrev = lastPart.toUpperCase();
      cityParts = parts.slice(0, -1);
    } else if (stateMap[lastPart]) {
      stateAbbrev = stateMap[lastPart];
      cityParts = parts.slice(0, -1);
    }
    
    // Check for multi-word state names
    if (!stateAbbrev) {
      for (const [stateName, abbrev] of Object.entries(stateMap)) {
        if (cleanQuery.endsWith(stateName)) {
          stateAbbrev = abbrev;
          cityParts = cleanQuery.replace(stateName, '').trim().split(' ').filter(p => p);
          break;
        }
      }
    }
    
    const cityName = cityParts.join(' ');
    
    // Look up city
    if (majorCities[cityName]) {
      const city = majorCities[cityName];
      // If state specified, verify it matches
      if (!stateAbbrev || city.state === stateAbbrev) {
        return { lat: city.lat, lng: city.lng, displayName: `${capitalizeWords(cityName)}, ${city.state}` };
      }
    }
    
    // Try partial city match
    for (const [city, data] of Object.entries(majorCities)) {
      if (city.includes(cityName) || cityName.includes(city)) {
        if (!stateAbbrev || data.state === stateAbbrev) {
          return { lat: data.lat, lng: data.lng, displayName: `${capitalizeWords(city)}, ${data.state}` };
        }
      }
    }
    
    return null;
  }

  function findExactMatches(query) {
    const q = query.toLowerCase().replace(/,/g, ' ').replace(/\s+/g, ' ').trim();
    const parts = q.split(' ');
    
    // Check for state abbreviation or name
    let searchState = null;
    
    for (const part of parts) {
      if (part.length === 2) {
        const upperPart = part.toUpperCase();
        if (Object.values(stateMap).includes(upperPart)) {
          searchState = upperPart;
          break;
        }
      }
    }
    
    if (!searchState) {
      for (const [stateName, abbrev] of Object.entries(stateMap)) {
        if (q.includes(stateName)) {
          searchState = abbrev;
          break;
        }
      }
    }
    
    // If state found, return all locations in that state
    if (searchState) {
      return locations.filter(loc => loc.state.toUpperCase() === searchState);
    }
    
    return [];
  }

  function findLocationsWithinRadius(lat, lng, radiusMiles) {
    return locations
      .map(loc => ({
        ...loc,
        distance: calculateDistance(lat, lng, loc.lat, loc.lng)
      }))
      .filter(loc => loc.distance <= radiusMiles)
      .sort((a, b) => a.distance - b.distance);
  }

  function useCurrentLocation() {
    if (!navigator.geolocation) {
      resultsContainer.innerHTML = '<p class="search-message error">Geolocation is not supported by your browser.</p>';
      return;
    }

    useLocationBtn.innerHTML = `
      <svg class="spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="32"></circle>
      </svg>
      Finding your location...
    `;
    useLocationBtn.disabled = true;
    allLocationsSection.style.display = 'none';

    navigator.geolocation.getCurrentPosition(
      function(position) {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const nearbyLocations = findLocationsWithinRadius(userLat, userLng, SEARCH_RADIUS_MILES);

        if (nearbyLocations.length > 0) {
          displayResults(nearbyLocations, `Found ${nearbyLocations.length} provider${nearbyLocations.length > 1 ? 's' : ''} within ${SEARCH_RADIUS_MILES} miles:`, true);
        } else {
          const allWithDistance = locations.map(loc => ({
            ...loc,
            distance: calculateDistance(userLat, userLng, loc.lat, loc.lng)
          })).sort((a, b) => a.distance - b.distance);

          displayResults(allWithDistance.slice(0, 5), 'Closest providers to your location:', true);
        }

        resetLocationButton();
      },
      function(error) {
        resultsContainer.innerHTML = '<p class="search-message error">Unable to get your location. Please enter your city or zip code instead.</p>';
        allLocationsSection.style.display = 'block';
        resetLocationButton();
      }
    );
  }

  function resetLocationButton() {
    useLocationBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4"></path>
      </svg>
      Use My Current Location
    `;
    useLocationBtn.disabled = false;
  }

  function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 3959; // Earth's radius in miles
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  function toRad(deg) {
    return deg * (Math.PI / 180);
  }

  function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  function displayResults(results, message, showDistance = false) {
    let html = `<p class="results-message">${message}</p>`;
    html += '<div class="locations-grid">';
    
    results.forEach(loc => {
      const distanceText = showDistance && loc.distance !== undefined ? 
        `<span class="distance">${loc.distance.toFixed(1)} miles away</span>` : '';
      
      html += `
        <div class="location-card">
          <h4>${loc.name}</h4>
          <p class="location-address">
            ${loc.address}<br>
            ${loc.city}, ${loc.state} ${loc.zip}
          </p>
          ${distanceText}
          <div class="location-actions">
            <a href="${loc.link}" class="cta primary small">View Location</a>
            <a href="${loc.link}" 
               target="_blank" 
               class="cta secondary small">Schedule appointment</a>
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    
    html += `
      <button class="show-all-btn" onclick="document.getElementById('all-locations').style.display='block'; this.style.display='none';">
        Show All Locations
      </button>
    `;
    
    resultsContainer.innerHTML = html;
  }

  function displayAllLocations() {
    const byState = {};
    locations.forEach(loc => {
      if (!byState[loc.state]) {
        byState[loc.state] = [];
      }
      byState[loc.state].push(loc);
    });

    const sortedStates = Object.keys(byState).sort();

    let html = '';
    sortedStates.forEach(state => {
      byState[state].forEach(loc => {
        html += `
          <div class="location-card">
            <h4>${loc.name}</h4>
            <p class="location-address">
              ${loc.address}<br>
              ${loc.city}, ${loc.state} ${loc.zip}
            </p>
            <div class="location-actions">
              <a href="${loc.link}" class="cta primary small">View Location</a>
              <a href="${loc.link}" 
                 target="_blank" 
                 class="cta secondary small">Schedule appointment</a>
            </div>
          </div>
        `;
      });
    });

    allLocationsGrid.innerHTML = html;
  }
});
