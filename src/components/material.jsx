import { useState, useEffect } from "react";
import "./material.css";
const Material = ({
  dataName,
  dataValue,
  dataColor,
  dataId,
  onIncrementLoad,
  isAktiv,
  btnAc,
  materialWeight,
}) => {
  const [count, setCount] = useState(materialWeight);
  const handleIncrement = (nameEl) => {
    isAktiv(nameEl);

    setCount((prevState) => prevState + dataValue);
    if (count <= 1000) {
      onIncrementLoad(count);
    } else if (count >= 1000) {
      setCount(materialWeight);
      console.log("Начать выгрузку");
    }
  };

  return (
    <div className="material-box">
      <div id={dataId}>
        <h2>{dataName}</h2>
        <span>{dataValue}</span>
        <span>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M677.3 286H295.2c-8.3 0-15 6.7-15 15v582c0 8.3 6.7 15 15 15H419l273.3-273.3V301c0-8.3-6.7-15-15-15z m-47.5 240.9c0 6.6-5.4 12-12 12H354.7c-6.6 0-12-5.4-12-12v-35.7c0-6.6 5.4-12 12-12h263.1c6.6 0 12 5.4 12 12v35.7z m0-117.5c0 6.6-5.4 12-12 12H354.7c-6.6 0-12-5.4-12-12v-35.7c0-6.6 5.4-12 12-12h263.1c6.6 0 12 5.4 12 12v35.7zM556.9 898l135.4-135.4v-95.5L461.4 898zM677.3 898c8.3 0 15-6.7 15-15v-78l-93 93h78z"
                fill={dataColor}
              />

              <path
                d="M677.3 256H295.2c-24.8 0-45 20.2-45 45v582c0 24.8 20.2 45 45 45h382.1c24.8 0 45-20.2 45-45V301c0-24.8-20.2-45-45-45z m15 627c0 8.3-6.7 15-15 15h-78l93-93v78z m0-120.4L556.9 898h-95.5l230.9-230.9v95.5z m0-137.9L419 898H295.2c-8.3 0-15-6.7-15-15V301c0-8.3 6.7-15 15-15h382.1c8.3 0 15 6.7 15 15v323.7z"
                fill="#46287C"
              />

              <path
                d="M359.9 192.8h252.8c11.3 0 20.6-9.2 20.6-20.6v-25.6c0-11.3-9.2-20.6-20.6-20.6H359.9c-11.3 0-20.6 9.2-20.6 20.6v25.6c0 11.4 9.2 20.6 20.6 20.6z"
                fill="#FFBC00"
              />

              <path
                d="M359.9 222.8h252.8c27.9 0 50.6-22.7 50.6-50.6v-25.6c0-27.9-22.7-50.6-50.6-50.6H359.9c-27.9 0-50.6 22.7-50.6 50.6v25.6c0 27.9 22.7 50.6 50.6 50.6z m-20.6-76.2c0-11.3 9.2-20.6 20.6-20.6h252.8c11.3 0 20.6 9.2 20.6 20.6v25.6c0 11.3-9.2 20.6-20.6 20.6H359.9c-11.3 0-20.6-9.2-20.6-20.6v-25.6z"
                fill="#46287C"
              />

              <path
                d="M617.8 479.2H354.7c-6.6 0-12 5.4-12 12v35.7c0 6.6 5.4 12 12 12h263.1c6.6 0 12-5.4 12-12v-35.7c0-6.6-5.4-12-12-12zM617.8 361.7H354.7c-6.6 0-12 5.4-12 12v35.7c0 6.6 5.4 12 12 12h263.1c6.6 0 12-5.4 12-12v-35.7c0-6.6-5.4-12-12-12z"
                fill="#F8FBFE"
              />
            </g>
          </svg>
        </span>
        <button
          type="button"
          className={"btn btn-primary btn-lg m-2"}
          disabled={btnAc}
          onClick={() => handleIncrement(dataId)}
        >
          начать загрузку материала
        </button>
      </div>
    </div>
  );
};
export default Material;
