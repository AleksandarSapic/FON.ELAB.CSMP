import InputParametersSection from "./InputParametersSection";
import SetParametersButtonsSection from "./SetParametersButtonsSection";

function SetParametersMainSection() {
  return (
    <div className="d-flex flex-column">
      <span className="align-self-end">Napomena</span>
      <InputParametersSection />
      <SetParametersButtonsSection />
    </div>
  );
}

export default SetParametersMainSection;
