import { useState } from "react";
import Header from "./components/Header";
import SearchPanel from "./components/SearchPanel";
import PlacesList from "./components/PlacesList";
import History from "./components/History";
import MapPanel from "./components/MapPanel";

export default function App() {
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [history, setHistory] = useState([]);
  const [query, setQuery] = useState("");
  const [activePlaceId, setActivePlaceId] = useState(null);


  const [filters, setFilters] = useState({
    mood: "",
    budget: "",
    minRating: 0,
    distance: 10
  });

  const filteredPlaces = places
    .filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    )
    .filter(p => p.rating >= Number(filters.minRating))
    .filter(p => p.distance <= Number(filters.distance))
    .filter(p => {
      if (!filters.mood) return true;
      return p.tags?.includes(filters.mood);
    })
    .filter(p => {
      if (!filters.budget) return true;
      return p.budget === filters.budget;
    });

  return (
    <div className="app">
      <div className="left-panel">
        <Header query={query} setQuery={setQuery} />

        <SearchPanel
          setLocation={setLocation}
          setPlaces={setPlaces}
          filters={filters}
          setFilters={setFilters}
        />

        <PlacesList
          places={filteredPlaces}
          history={history}
          setHistory={setHistory}
          setActivePlaceId={setActivePlaceId}
        />

        <History history={history} />
      </div>

      <div className="right-panel">
        <MapPanel location={location} places={filteredPlaces} activePlaceId={activePlaceId} />
      </div>
    </div>
  );
}

