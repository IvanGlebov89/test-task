import { useState } from "react";
import LoadingHopper from "./LoadingHopper";
import Material from "./material";
import "./container.css";
import substances from "../substances/substances.js";
const Container = () => {
  const [data, setData] = useState(substances);
  const [materialWeight, setMaterialWeight] = useState(0);
  const reset = 0;
  let selectedMaterial = false;
  const onLoadingMaterial = (id, weight) => {
    data.find((el) =>
      el.id !== id ? (selectedMaterial = true) : (selectedMaterial = false)
    );
    console.log(id);
    if (materialWeight < 1000) {
      setMaterialWeight((prevState) => prevState + weight);
    } else {
      return;
    }
  };
  const onBunkerUnloading = (transferredWeight, maximumLoad) => {
    console.log(transferredWeight, maximumLoad);
    if (transferredWeight === maximumLoad) {
      setMaterialWeight(reset);
    }
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
          selectedMaterial={selectedMaterial}
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
