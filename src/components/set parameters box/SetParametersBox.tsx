import SetParametersMainSection from "./SetParametersMainSection";

interface SetParametersBoxProps {
  display: boolean;
}

function SetParametersBox({ display }: SetParametersBoxProps) {
  return (
    <div className={`set-parameters-box ${display && "show-set-box"}`}>
      <span>Unesite vrednosti parametara</span>
      <SetParametersMainSection />
    </div>
  );
}

export default SetParametersBox;
