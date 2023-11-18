import ISetParameterSectionProps from "../../interfaces/ISetParameterSectionProps";

function OneInputParameter({
  spanText,
  inputTagContent,
}: ISetParameterSectionProps) {
  return (
    <div className="d-flex justify-content-around">
      <span>{spanText}</span>
      <input
        type="text"
        className="w-50"
        name={inputTagContent}
        id={inputTagContent}
      />
    </div>
  );
}
export default OneInputParameter;
