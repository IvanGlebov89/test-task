import { useState } from "react";
import LoadingHopper from "./LoadingHopper";
import Material from "./material";
import "./container.css";
import substances from "../substances/substances.js";
const Container = () => {
  const [data, setData] = useState(substances);
  const [materialWeight, setMaterialWeight] = useState(0);
  const reset = 0;

  const onLoadingMaterial = (id, weight) => {
    data.forEach((el) => {
      if (el.id !== id) {
        return (el.btnActive = true);
      } else {
        return (el.btnActive = false);
      }
    });

    if (materialWeight < 1000) {
      setMaterialWeight((prevState) => prevState + weight);
    } else {
      return;
    }
  };
  const onBunkerUnloading = (transferredWeight, maximumLoad) => {
    if (transferredWeight === maximumLoad) {
      data.forEach((el) => (el.btnActive = false));
      setMaterialWeight(reset);
    }
    return;
  };
  return (
    <div className="container">
      {data.map((dat) => (
        <Material
          key={dat.id}
          materialName={dat.name}
          materialQuantity={dat.quantity}
          color={dat.color}
          materialId={dat.id}
          btnActive={dat.btnActive}
          onLoadingMaterial={onLoadingMaterial}
        />
      ))}

      <LoadingHopper
        materialWeight={materialWeight}
        onBunkerUnloading={onBunkerUnloading}
      />
    </div>
  );
};
export default Container;
