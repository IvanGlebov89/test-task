import { useState, useEffect } from "react";
import LoadingHopper from "./LoadingHopper";
import Material from "./material";
import "./container.css";
import substances from "../substances/substances.js";
const Container = () => {
  const [data, setData] = useState(substances);
  const [materialWeight, setMaterialWeight] = useState(0);
  const reset = 0;
  const [materialName, setMaterialName] = useState("");
  // const [el, setEl] = useState(0);
  // блокировка кнопок и загрузка нужного материала

  const onLoadingMaterial = (id, weight, elName, stop) => {
    setMaterialName(elName);
    data.forEach((el) => {
      if (el.id !== id) {
        return (el.btnActive = true);
      } else {
        return (el.btnActive = false);
      }
    });

    interval(weight, stop);
  };
  const interval = (item, stop) => {
    const int = setInterval(() => {
      setMaterialWeight((prevState) => prevState + item);
      let i = 100 + item;
      console.log(i);
      if (i === 1000) {
        return clearInterval(int);
      }
    }, 2000);
  };

  // useEffect(() => {
  //   const weight = 100;
  //   const intervalId = setInterval(() => {
  //     setMaterialWeight((prevState) => prevState + weight);
  //     if (materialWeight === 1000) {
  //       return clearInterval(intervalId);
  //     }
  //   }, 2000);
  // }, [materialWeight]);
  // разгрузка бункера
  const onBunkerUnloading = (transferredWeight, maximumLoad) => {
    if (transferredWeight === maximumLoad) {
      data.forEach((el) => (el.btnActive = false));
      setMaterialWeight(reset);
      setMaterialName("");
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
          materialWeight={materialWeight}
        />
      ))}

      <LoadingHopper
        materialName={materialName}
        materialWeight={materialWeight}
        onBunkerUnloading={onBunkerUnloading}
      />
    </div>
  );
};
export default Container;
