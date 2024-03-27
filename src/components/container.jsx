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

  // блокировка кнопок и загрузка нужного материала

  const onLoadingMaterial = (id, weight, elName) => {
    setMaterialName(elName);
    setData((prevData) =>
      prevData.map((d) => {
        if (d.id !== id) {
          return { ...d, btnActive: true };
        }
        return d;
      })
    );
    if (materialWeight < 1000) {
      setMaterialWeight((prevState) => prevState + weight);
    }
  };

  useEffect(() => {
    const weight = 100;
    if (materialWeight !== 0) {
      const intervalId = setInterval(() => {
        if (materialWeight < 1000) {
          setMaterialWeight((prevState) => prevState + weight);
        }
        return clearInterval(intervalId);
      }, 1000);
    }
  }, [materialWeight]);
  // разгрузка бункера

  useEffect(() => {
    if (materialWeight === 1000) {
      setData((prevData) =>
        prevData.map((d) => {
          if (d.btnActive === true) {
            return { ...d, btnActive: false };
          }
          return d;
        })
      );

      setMaterialWeight(reset);
      setMaterialName("");
    }
  }, [materialWeight]);
  //разгрузка по кнопке
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
