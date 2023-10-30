import HeaderCenter from "./HeaderCenter";
import HeaderLeftSide from "./HeaderLeftSide";
import HeaderRightSide from "./HeaderRightSide";

function AppHeader() {
  return (
    <>
      <div className="d-flex justify-content-around align-items-center app-header">
        <HeaderLeftSide />
        <HeaderCenter />
        <HeaderRightSide />
      </div>
    </>
  );
}

export default AppHeader;
