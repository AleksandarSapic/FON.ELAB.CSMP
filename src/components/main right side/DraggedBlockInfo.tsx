import { useContext } from "react";
import SelectedDraggedBlockContext from "../../hooks/SelectedDraggedBlockContext";

function DraggedBlockInfo() {
  const block = useContext(SelectedDraggedBlockContext);
  return (
    <>
      <div className="d-flex flex-column block-info-section">
        <p className="text-center">
          {block.id === 0 ? block.name : block.id + ". " + block.name}
        </p>
        <div className="d-flex flex-column input-section">
          <p className="text-center">Ulazi/Parametri</p>
          <div className="inputs-parameters">
            <div className="d-flex">
              <span className="text-center w-50">Ulaz</span>
              {block.input.input1 && (
                <span className="text-center w-50">
                  {block.input.input1.id + ". " + block.input.input1.name}
                </span>
              )}
            </div>
            {block.input.input2 && (
              <div className="d-flex">
                <span className="text-center w-50">Ulaz 2</span>
                <span className="text-center w-50">
                  {block.input.input2.id + ". " + block.input.input2.name}
                </span>
              </div>
            )}
            {block.input.input3 && (
              <div className="d-flex">
                <span className="text-center w-50">Ulaz 3</span>
                <span className="text-center w-50">
                  {block.input.input3.id + ". " + block.input.input3.name}
                </span>
              </div>
            )}

            {block.parameter.parameter1 !== undefined &&
            block.parameter.parameter1 !== null ? (
              <div className="d-flex">
                <span className="text-center w-50">Parametar 1</span>
                <span className="text-center w-50">
                  {block.parameter.parameter1}
                </span>
              </div>
            ) : (
              ""
            )}

            {block.parameter.parameter2 !== undefined &&
            block.parameter.parameter2 !== null ? (
              <div className="d-flex">
                <span className="text-center w-50">Parametar 2</span>
                <span className="text-center w-50">
                  {block.parameter.parameter2}
                </span>
              </div>
            ) : (
              ""
            )}

            {block.parameter.parameter3 !== undefined &&
            block.parameter.parameter3 !== null ? (
              <div className="d-flex">
                <span className="text-center w-50">Parametar 3</span>
                <span className="text-center w-50">
                  {block.parameter.parameter2}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="d-flex flex-column output-section">
          <p className="text-center">Izlazi</p>
          <div className="output-parameters">
            <div className="d-flex one-output-wrapper">
              <span className="text-center w-50">Izlaz</span>
              {block.output && (
                <div className="d-flex">
                  <span className="text-center w-50">Ulaz 3</span>
                  <span className="text-center w-50">
                    {block.output?.id + ". " + block.output?.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DraggedBlockInfo;
