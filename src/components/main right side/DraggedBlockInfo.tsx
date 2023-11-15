function DraggedBlockInfo() {
  return (
    <>
      <div className="d-flex flex-column block-info-section">
        <p className="text-center">Naziv elementa</p>
        <div className="d-flex flex-column input-section">
          <p className="text-center">Ulazi/Parametri</p>
          <div className="input-parameters">
            <div className="d-flex one-output-wrapper">
              <span className="text-center w-50">Ulaz</span>
              <span className="text-center w-50">1. ArcTan</span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column output-section">
          <p className="text-center">Izlazi</p>
          <div className="output-parameters">
            <div className="d-flex one-output-wrapper">
              <span className="text-center w-50">Izlaz</span>
              <span className="text-center w-50">1. ArcTan</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DraggedBlockInfo;
