import LoadingHopper from "./LoadingHopper";
import Material from "./material";
import "./container.css";
import substances from "../substances/substances.js";
import { useState } from "react";
const Container = () => {
  const [data, setData] = useState(substances);

  return (
    <div className="container">
      {data.map((dat) => (
        <Material
          key={dat}
          dataName={dat.name}
          dataValue={dat.quantity}
          dataColor={dat.color}
          dataId={dat.id}
        />
      ))}

      <LoadingHopper />
    </div>
  );
};
export default Container;
