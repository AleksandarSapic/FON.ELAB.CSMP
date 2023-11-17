import SetParametersButtonProps from "../../interfaces/SetParametersButtonProps";

function SetParametersButton({
  buttonText,
  imgAlt,
  imgSrc,
}: SetParametersButtonProps) {
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
