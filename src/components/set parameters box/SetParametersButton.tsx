import ISetParametersButtonProps from "../../interfaces/ISetParametersButtonProps";

function SetParametersButton({
  buttonText,
  imgAlt,
  imgSrc,
}: ISetParametersButtonProps) {
  return (
    <>
      <div className="d-flex">
        <img src={imgSrc} alt={imgAlt} />
        <button type="button">{buttonText}</button>
      </div>
    </>
  );
}
export default SetParametersButton;
