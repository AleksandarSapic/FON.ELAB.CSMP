import SetParametersButton from "./SetParametersButton";

function SetParametersButtonsSection() {
  return (
    <div className="d-flex justify-content-around">
      <SetParametersButton
        buttonText="Prihvati"
        imgAlt="Accept Icon"
        imgSrc="/src/assets/svg/check.svg"
        buttonType="submit"
      />
      <SetParametersButton
        buttonText="Odustani"
        imgAlt="Decline Icon"
        imgSrc="/src/assets/svg/clear.svg"
        buttonType="reset"
      />
    </div>
  );
}

export default SetParametersButtonsSection;
