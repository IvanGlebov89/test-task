import LoadingHopper from "./LoadingHopper";
import Material from "./material";
import "./container.css";
import substances from "../substances/substances.js";
import { useState } from "react";
const Container = () => {
  const [data, setData] = useState(substances);

  const [load, setLoad] = useState(0);
  const maximumLoad = 1000;
  const incrementLoad = (el, elName) => {
    setLoad(el);
  };

  const isAktiv = (id) => {
    data.forEach((d) => {
      if (d.id !== id) {
        d.btnActive = true;
      }
    });
  };
  const returnState = () => {
    setLoad(0);

    data.forEach((d) => {
      if (d.btnActive === true) {
        d.btnActive = false;
      }
    });
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
          btnAc={dat.btnActive}
          materialWeight={load}
          onIncrementLoad={incrementLoad}
          isAktiv={isAktiv}
        />
      ))}

      <LoadingHopper
        loadingElem={load}
        onUnload={returnState}
        maximumLoad={maximumLoad}
      />
    </div>
  );
};
export default Container;
