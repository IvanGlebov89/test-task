import "./LoadingHopper.css";

const LoadingHopper = ({ materialWeight, onBunkerUnloading, materialName }) => {
  const maximumLoad = 1000;
  let transferredWeight = materialWeight;
  const disabledAndActive = () => {
    return transferredWeight < maximumLoad
      ? "btn btn-danger btn-lg disabled"
      : "btn btn-danger btn-lg";
  };
  return (
    <div className="LoadingHopper">
      <div>
        <h1>LoadingHopper</h1>

        <svg
          width="400px"
          height="300px"
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M924.086857 282.843429l-362.057143 210.724571v415.378286s227.108571-137.728 238.738286-144.384c11.190857-6.436571 26.331429 0.731429 28.891429 17.554285 0.146286 0.731429 1.462857 4.973714 1.462857 5.705143 1.536 18.212571-0.731429 26.770286-12.580572 33.718857l-273.993143 162.742858c-6.948571 3.510857-16.091429 5.485714-30.72-1.755429-7.168-3.218286-424.301714-255.268571-424.301714-255.268571a24.649143 24.649143 0 0 1-11.702857-20.772572V251.611429c0-2.486857-2.413714-25.526857 13.385143-35.913143L517.558857 2.633143a24.137143 24.137143 0 0 1 21.796572 0l426.276571 213.138286c9.508571 4.827429 17.481143 14.628571 16.749714 23.844571a29.622857 29.622857 0 0 1 0.512 5.412571v437.028572c0 16.164571-13.165714 29.257143-29.330285 29.257143h-0.073143a29.403429 29.403429 0 0 1-29.403429-29.330286V282.843429zM495.908571 903.972571V493.714286L141.604571 290.230857v397.677714L495.908571 904.045714zM191.195429 236.251429l337.188571 191.122285 337.042286-191.122285L528.310857 67.876571 191.195429 236.251429z"
            fill="#000000"
          />
        </svg>
      </div>
      <div className="materialLoading">
        <h1>{materialName}</h1>
        <p>
          {transferredWeight}/{maximumLoad}
        </p>
        <span>
          {transferredWeight < maximumLoad
            ? "бункер может принимать материал"
            : "бункер полн, начать отгрузку"}
        </span>
      </div>
      <div>
        <button
          type="button"
          className={disabledAndActive()}
          onClick={() => onBunkerUnloading(transferredWeight, maximumLoad)}
        >
          unload
        </button>
      </div>
    </div>
  );
};
export default LoadingHopper;
