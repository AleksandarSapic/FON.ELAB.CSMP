import ISetParametersButtonProps from "../../interfaces/ISetParametersButtonProps";

function SetParametersButton({
  buttonText,
  imgAlt,
  imgSrc,
  buttonType,
}: ISetParametersButtonProps) {
  return (
    <>
      <div className="d-flex">
        <img src={imgSrc} alt={imgAlt} />
        <button type={buttonType}>{buttonText}</button>
      </div>
    </>
  );
}
export default SetParametersButton;
