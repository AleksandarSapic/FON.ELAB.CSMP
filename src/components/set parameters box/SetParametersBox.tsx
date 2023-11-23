import SetParametersMainSection from "./SetParametersMainSection";

function SetParametersBox() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center position-absolute set-parameters-box">
      <span>Unesite vrednosti parametara</span>
      <SetParametersMainSection />
    </div>
  );
}

export default SetParametersBox;
