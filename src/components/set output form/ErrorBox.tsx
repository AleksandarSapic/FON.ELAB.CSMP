import { useContext } from "react";
import ErrorMessages from "../../data/ErrorMessages";
import ErrorBoxContext from "../../hooks/ErrorBoxContext";
import ClickedNavItemContext from "../../hooks/ClickedNavItemContext";
import ConnectionBlocksContext from "../../hooks/ConnectionBlocksContext";

function ErrorBox() {
  const errorBoxContext = useContext(ErrorBoxContext);
  const errorBox = errorBoxContext.errorBox;
  const setErrorBox = errorBoxContext.setErrorBox;

  const contents: { [key: string]: { title: string; message: string } } = {
    "bloka nema ulaznu vezu": {
      title: "CSMP 2023",
      message: `Blok: <${errorBox.blockName}> ne može da ima ulaznu vezu!`,
    },
    "bloka vec ima ulaznu vezu": {
      title: "Error",
      message: "Iz ovog bloka već postoji veza! Koristite junction vezu!",
    },
    "isti blok za ulaz i izlaz": {
      title: "Error",
      message:
        "Izabrali ste isti blok i za izlaz i za ulaz, izaberite neki drugi blok.",
    },
    "izlazi su popunjeni": {
      title: "CSMP 2023",
      message: `Maksimalan broj ulaznih veza za blok <${errorBox.blockName}> je ${errorBox.blockInputs}!`,
    },
  };

  const clickedNavItemContext = useContext(ClickedNavItemContext);
  const setClickedNavItem = clickedNavItemContext.setClickedNavItem;

  const connectionBlocksContext = useContext(ConnectionBlocksContext);
  const setConnectionBlocks = connectionBlocksContext.setConnectionBlocks;

  const handleSubmit = () => {
    setErrorBox({
      showBox: false,
      blockName: "Ime bloka",
      blockInputs: 0,
      resetFunction: false,
      errorType: ErrorMessages.default,
    });
    if (errorBox.resetFunction) {
      setClickedNavItem(0);
      setConnectionBlocks([null, null]);
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-between position-absolute error-box">
        <span>{contents[errorBox.errorType].title}</span>
        <div className="d-flex flex-column flex-wrap align-content-center">
          <span>{contents[errorBox.errorType].message}</span>
          <div className="d-flex justify-content-center">
            <button type="submit" onClick={handleSubmit}>
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorBox;
