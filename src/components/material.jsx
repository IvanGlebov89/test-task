import IconMaterial from "./iconMaterial";
import "./material.css";
const Material = ({
  color,
  materialName,
  materialQuantity,
  materialId,
  btnActive,
  onLoadingMaterial,
  materialWeight,
}) => {
  let stop = 100;
  return (
    <div className="material-box">
      <div id={materialId}>
        <h2>{materialName}</h2>
        <span>{materialQuantity}</span>
        <IconMaterial color={color} />
        <button
          type="button"
          className={"btn btn-primary btn-lg m-2"}
          disabled={btnActive}
          onClick={() =>
            onLoadingMaterial(materialId, materialQuantity, materialName, stop)
          }
        >
          начать загрузку материала
        </button>
      </div>
    </div>
  );
};
export default Material;
