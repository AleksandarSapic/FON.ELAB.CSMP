import { ChangeEvent } from "react";

interface ISetParameterSectionProps {
  spanText: string;
  inputTagContent: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  readonly: boolean;
}
export default ISetParameterSectionProps;
