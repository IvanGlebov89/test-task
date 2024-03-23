import LoadingHopper from "./LoadingHopper";
import Material from "./material";
import "./container.css";
import substances from "../substances/substances.js";
import { useState } from "react";
const Container = () => {
  const [data, setData] = useState(substances);
  const [load, setLoad] = useState(0);

  const incrementLoad = (el, elName) => {
    setLoad(el);
  };

  return (
    <div className="container">
      {data.map((dat) => (
        <Material
          key={dat}
          dataName={dat.name}
          dataValue={dat.quantity}
          dataColor={dat.color}
          dataId={dat.id}
          onIncrementLoad={incrementLoad}
        />
      ))}

      <LoadingHopper loadingElem={load} />
    </div>
  );
};
export default Container;
