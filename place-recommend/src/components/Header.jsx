export default function Header({ query, setQuery }) {
  return (
    <div className="card">
      <input
        className="search-input"
        placeholder="Search places (cafe, bar, hotel...)"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
}
