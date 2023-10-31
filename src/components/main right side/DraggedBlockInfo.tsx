function DraggedBlockInfo() {
  return (
    <>
      <div className="d-flex flex-column block-info-section">
        <p className="text-center">Block name</p>
        <div className="d-flex flex-column input-section">
          <p className="text-center">Ulazi/Parametri</p>
          <div className="input-parameters">
            <div className="d-flex one-output-wrapper">
              <p className="text-center w-50">Ulazni parametar:</p>
              <input className="w-50 " type="text" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column output-section">
          <p className="text-center">Izlazi</p>
          <div className="output-parameters">
            <div className="d-flex one-output-wrapper">
              <p className="text-center w-50">Izlazni parametar:</p>
              <input className="w-50" type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DraggedBlockInfo;
