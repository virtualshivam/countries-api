import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <Link exact to={`/country/${props["alpha3code"]}`} >
        <div className=" card-component">
          <div className="card">
            <img className="card-img-top" src={props.flag} alt={`flag of ${props.name}`}  />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                Population: <span>{props.population.toLocaleString()}</span>
              </p>
              <p className="card-text">
                Region: <span className="region">{props.region}</span>
              </p>
              <p className="card-text">
                Capital: <span>{props.capital}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
