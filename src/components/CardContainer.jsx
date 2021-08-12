import { lazy, Suspense } from "react";
import LazyLoading from "./LazyLoading";

const Card = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Card")), 1);
  });
});



const CardContainer = (props) => {
  
  return (
    <>
      <div className="container px-md-0">
        <div className="card-row">
          {props.countries.map((e, i) => {
            return (
              <Suspense fallback={<LazyLoading/>} key={i}>
                <Card
                  name={e.name}
                  flag={e.flag}
                  population={e.population}
                  region={e.region}
                  capital={e.capital}
                  alpha3code = {e["alpha3Code"]}
                />
              </Suspense>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardContainer;

