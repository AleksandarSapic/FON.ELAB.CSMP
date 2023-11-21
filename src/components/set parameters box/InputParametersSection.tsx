import { ChangeEvent, useContext } from "react";
import OneInputParameter from "./OneInputParameter";
import FormContext from "../../hooks/FormContext";

interface InputSectionProps {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: {
    parametar1: string;
    parametar2: string;
    parametar3: string;
  };
}

function InputParametersSection({
  handleInputChange,
  formData,
}: InputSectionProps) {
  const formContext = useContext(FormContext);
  return (
    <div className="d-flex flex-column">
      <OneInputParameter
        spanText={formContext.parametar1.title}
        inputTagContent="parametar1"
        value={formData.parametar1}
        onChange={handleInputChange}
        readonly={formContext.parametar1.readonly}
      />
      <OneInputParameter
        spanText={formContext.parametar2.title}
        inputTagContent="parametar2"
        value={formData.parametar2}
        onChange={handleInputChange}
        readonly={formContext.parametar2.readonly}
      />
      <OneInputParameter
        spanText={formContext.parametar3.title}
        inputTagContent="parametar3"
        value={formData.parametar3}
        onChange={handleInputChange}
        readonly={formContext.parametar3.readonly}
      />
    </div>
  );
}

export default InputParametersSection;
