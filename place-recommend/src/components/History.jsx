export default function History({ history }) {
  return (
    <div>
      <div className="section-title">Recently Visited</div>

      <div className="card">
        {history.length === 0 && <p>No places yet</p>}
        {history.map(p => (
          <p key={p.id}>{p.name}</p>
        ))}
      </div>
    </div>
  );
}
