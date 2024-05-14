import { Link } from "react-router-dom"

export default function CardEquipment({items}) {

    const genreRankColors = {
        master: "badge-danger",
        low: "badge-primary",
        high: "badge-warning",
      };
  return (
    <>
    <Link className="text-dark">
      <div className="items">
        <div className="card items_card">
          <div id="news" className="card-body">
              <h6 className="card-title">{items.name}</h6>
          </div>
          <div className="container d-flex justify-content-center">
            <span className={"d-flex align-items-center badge " + genreRankColors[items.rank]}>Rank: {items.rank}</span>
          </div><br />
        </div>
      </div>
    </Link>
    </>
  );
}

export function CardWeapons({items}) {

    const genreRankColors = {
        1: "badge-primary",
        2: "badge-secondary",
        3: "badge-success",
        4: "badge-info",
        5: "badge-primary",
        6: "badge-secondary",
        7: "badge-light",
        8: "badge-warning",
        9: "badge-danger",
      };
  return (
    <>
    <Link className="text-dark" to={`/weapons/${items.type}/${items.id}`}>
      <div className="items">
        <div className="card items_card2">
          <div id="news" className="card-body">
              <h6 className="card-title">{items.name}</h6>
          </div>
          <div className="container d-flex justify-content-between">
            <span className={"d-flex align-items-center badge badge-pill " + genreRankColors[items.rarity]}>Rarity: {items.rarity}</span>
            <span className={"d-flex align-items-center badge badge-pill " + genreRankColors[items.rarity]}>Type: {items.type}</span>
          </div><br />
        </div>
      </div>
    </Link>
    </>
  );
}
export function CardMonsters({monsters}) {

    const genreRankColors = {
        1: "badge-primary",
        2: "badge-secondary",
        3: "badge-success",
        4: "badge-info",
        5: "badge-primary",
        6: "badge-secondary",
        7: "badge-light",
        8: "badge-warning",
        9: "badge-danger",
      };
  return (
    <>
    <Link className="text-dark" to={`/weapons/${items.type}/${items.id}`}>
      <div className="items">
        <div className="card items_card2">
          <div id="news" className="card-body">
              <h6 className="card-title">{items.name}</h6>
          </div>
          <div className="container d-flex justify-content-between">
            <span className={"d-flex align-items-center badge badge-pill " + genreRankColors[items.rarity]}>Species: {items.species}</span>
            <span className={"d-flex align-items-center badge badge-pill " + genreRankColors[items.rarity]}>Type: {items.type}</span>
          </div><br />
        </div>
      </div>
    </Link>
    </>
  );
}
