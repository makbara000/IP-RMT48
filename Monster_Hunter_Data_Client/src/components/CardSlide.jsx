import { Link } from "react-router-dom"

export default function CardEquipment({items}) {
    const genreRankColors = {
        master: "text-bg-danger",
        low: "text-bg-primary",
        high: "text-bg-warning",
      };
  return (
    <>
      <div className="items">
        <div className="card">
          <div id="news" className="card-body">
              <h5 className="card-title">{items.name}</h5>
          </div>
          <div className="container d-flex justify-content-between">
            <span className="text-muted">{items.rank}</span> &nbsp;
            
            <span className="text-muted">rarity: {items.rarity} <i className="bi bi-star" /></span>
          </div>
        </div>
      </div>
    </>
  );
}

