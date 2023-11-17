import OneInputParameter from "./OneInputParameter";

function InputParametersSection() {
  return (
    <div className="d-flex flex-column">
      <OneInputParameter
        spanText="Parametar 1:"
        inputTagContent="parametar-1"
      />
      <OneInputParameter
        spanText="Parametar 2:"
        inputTagContent="parametar-2"
      />
      <OneInputParameter
        spanText="Parametar 3:"
        inputTagContent="parametar-3"
      />
    </div>
  );
}

export default InputParametersSection;
