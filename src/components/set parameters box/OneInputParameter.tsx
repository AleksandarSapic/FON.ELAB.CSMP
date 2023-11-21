import ISetParameterSectionProps from "../../interfaces/ISetParameterSectionProps";

function OneInputParameter({
  spanText,
  inputTagContent,
  onChange,
  value,
  readonly,
}: ISetParameterSectionProps) {
  return (
    <div className="d-flex justify-content-between">
      <label className={readonly ? "readonly" : ""} htmlFor={inputTagContent}>
        {spanText}
      </label>
      <input
        type="text"
        className="w-50"
        name={inputTagContent}
        id={inputTagContent}
        onChange={onChange}
        autoComplete="off"
        value={value}
        defaultValue={"0"}
        readOnly={readonly}
      />
    </div>
  );
}
export default OneInputParameter;
