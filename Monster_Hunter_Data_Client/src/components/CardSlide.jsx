import { Link } from "react-router-dom"

export default function CardArmors({items}) {

    const genreRankColors = {
        master: "badge-danger",
        low: "badge-primary",
        high: "badge-warning",
      };
  return (
    <>
    <Link className="text-dark" to={`/armors/${items.name}/${items.id}`}>
      
      <div className="items container-fluid text-center mx-auto p-0">
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
    <Link className="text-dark" data-toggle="modal" data-target="#exampleModalCenter" >
      <div className="items container-fluid text-center mx-auto p-0">
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
      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document" >
          <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{items.name}</h5>
                   <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   </button>
                <span aria-hidden="true">&times;</span>
            </div>
                <div className="modal-body">
                    <h5>Damage Type</h5>
                        {items.damageType}
                </div>
                    <div className="modal-body">
                    <h5>Attack</h5>
                        <p>
                            Display: {items.attack.display}
                        </p>
                        <p>
                            Raw: {items.attack.raw}
                        </p>
                    </div>
                    <div className="modal-footer">
                        <Link to={`/weapons/${items.type}/${items.id}`}>
                        <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-dismiss="modal">Detail</button>
                        </Link>
                        <button type="button" className="btn btn-outline-danger my-2 my-sm-0" data-dismiss="modal">Close</button>
                    </div>
                </div>
        </div>
        </div>
    </Link>
    </>
  );
}
export function CardMonsters({monsters}) {
  
  const genreTypeColors = {
    small: "badge-primary",
    large: "badge-warning",
  };
  const genreSpeciesColors = {
    "flying wyvern": "badge-primary",
    "bird wyvern": "badge-primary",
    wingdrake: "badge-primary",
    "brute wyvern": "badge-success",
    neopteron: "badge-warning",
    herbivore: "badge-success",
    "fanged wyvern": "badge-secondary",
    "fanged beast": "badge-secondary",
    fish: "badge-info",
    "piscine wyvern": "badge-info",
    "elder dragon": "badge-danger",
    "relict": "badge-danger",
  };
  return (
    <>
    <Link className="text-dark" to={`/monsters/${monsters.name}/${monsters.id}`}>
      <div className="items container-fluid text-center mx-auto p-0">
        <div className="card items_card2"><br />
          <div className="container d-flex justify-content-start">
            <span className={"d-flex align-items-center badge badge-pill " + genreSpeciesColors[monsters.species]}>Species: {monsters.species}</span>
          </div><br />
          <div id="news" className="card-body">
              <h5 className="card-title">{monsters.name}</h5>
          </div>
          <div className="container d-flex justify-content-end">
            <span className={"d-flex align-items-center badge badge-pill " + genreTypeColors[monsters.type]}>Type: {monsters.type}</span>
          </div><br />
        </div>
      </div>
    </Link>
    </>
  );
}

export function CardItems({items}) {

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
        10: "badge-info",
        11: "badge-warning",
        12: "badge-dark",
      };
  return (
    <>
    <Link className="text-dark" to={`/items/${items.name}/${items.id}`}>
      <div className="items className='container-fluid text-center mx-auto p-0'">
        <div className="card items_card2">
          <div id="news" className="card-body">
              <h6 className="card-title">{items.name}</h6>
          </div>
          <div className="container d-flex justify-content-between">
            <span className={"d-flex align-items-center badge badge-pill " + genreRankColors[items.rarity]}>Rarity: {items.rarity}</span>
          </div><br />
        </div>
      </div>
    </Link>
    </>
  );
}