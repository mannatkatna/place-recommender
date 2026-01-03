export default function SearchPanel({
  setLocation,
  setPlaces,
  filters,
  setFilters
}) {

  function handleFilterChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  }

  function useMyLocation() {
    navigator.geolocation.getCurrentPosition(pos => {
      const userLoc = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      setLocation(userLoc);
      loadPlaces(userLoc);
    });
  }

  function searchByCity(e) {
    e.preventDefault();
    const city = e.target.city.value;
    if (!city) return;

    const fakeLoc = { lat: 28.6139, lng: 77.2090 };
    setLocation(fakeLoc);
    loadPlaces(fakeLoc);
  }

  function loadPlaces(loc) {
    // Demo places WITH EXTRA DATA
    const demoPlaces = [
      {
        id: "1",
        name: "Cafe Mocha",
        rating: 4.5,
        budget: "low",
        tags: ["chill"],
        distance: 2,
        lat: loc.lat + 0.01,
        lng: loc.lng + 0.01
      },
      {
        id: "2",
        name: "Sky Lounge",
        rating: 4.2,
        budget: "high",
        tags: ["party"],
        distance: 6,
        lat: loc.lat - 0.01,
        lng: loc.lng - 0.01
      },
      {
        id: "3",
        name: "Green Bowl",
        rating: 4.6,
        budget: "medium",
        tags: ["work", "chill"],
        distance: 3,
        lat: loc.lat + 0.015,
        lng: loc.lng - 0.015
      }
    ];

    setPlaces(demoPlaces);
  }

  return (
  <div className="stay-card">
    <div className="stay-left">
      <h4 className="stay-title">FIND PLACES</h4>

    
      <div className="stay-row">
       
        <input
          name="city"
          placeholder="Enter city or area"
          className="stay-input"
        />
      </div>

      <form onSubmit={searchByCity}>
  <input
    name="city"
    placeholder="Enter city or area"
    className="stay-input"
  />
</form>


      <div className="stay-row split">
        <select name="mood" onChange={handleFilterChange}>
          <option value="">Mood</option>
          <option value="chill">Chill</option>
          <option value="party">Party</option>
          <option value="work">Work</option>
        </select>

        <select name="budget" onChange={handleFilterChange}>
          <option value="">Budget</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

   
      <div className="stay-row split">
        <select name="minRating" onChange={handleFilterChange}>
          <option value="0">Any Rating</option>
          <option value="4">3 & above</option>
          <option value="4.5">4.5 & above</option>
        </select>

        <select name="distance" onChange={handleFilterChange}>
          <option value="10">Any Distance</option>
          <option value="3">Within 3 km</option>
          <option value="5">Within 5 km</option>
        </select>
      </div>
    </div>


    <button className="stay-search-btn" onClick={useMyLocation}>
      ⌕
    </button>
  </div>
);

}
