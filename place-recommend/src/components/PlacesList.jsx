import { motion } from "framer-motion";

export default function PlacesList({
  places,
  history,
  setHistory,
  setActivePlaceId
}) {
  return (
    <div>
      <div className="section-title">Recommended Places</div>
      
      {places.length === 0 && (
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          No recommendations yet
        </p>
      )}

      
      {places.map(place => (
        <motion.div
          key={place.id}
          className="card place-card"
          whileHover={{ scale: 1.03 }}
          onMouseEnter={() => setActivePlaceId(place.id)}
          onMouseLeave={() => setActivePlaceId(null)}
          onClick={() => {
            if (!history.find(h => h.id === place.id)) {
              setHistory([place, ...history]);
            }
          }}
        >
          <strong>{place.name}</strong>
          <p> {place.rating}</p>
        </motion.div>
      ))}
    </div>
  );
}



