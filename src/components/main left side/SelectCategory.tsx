import BlockViewOptions from "../../data/BlockViewOptions";

interface SelectCategoryProps {
  value: string;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectCategoryPart({ value, handleSelect }: SelectCategoryProps) {
  return (
    <div className="d-flex justify-content-around block-categories-section">
      <p>Prikaži</p>
      <div className="w-50 select-view-wrapper">
        <select onChange={handleSelect} value={value}>
          {BlockViewOptions.map((option) => (
            <option key={option.id} value={option.label.toUpperCase()}>
              {option.label.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectCategoryPart;
