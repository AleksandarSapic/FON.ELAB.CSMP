import SetParametersButton from "./SetParametersButton";

function SetParametersButtonsSection() {
  return (
    <div className="d-flex justify-content-around">
      <SetParametersButton
        buttonText="Prihvati"
        imgAlt="Accept Icon"
        imgSrc="/src/assets/svg/check.svg"
      />
      <SetParametersButton
        buttonText="Odustani"
        imgAlt="Decline Icon"
        imgSrc="/src/assets/svg/clear.svg"
      />
    </div>
  );
}

export default SetParametersButtonsSection;
