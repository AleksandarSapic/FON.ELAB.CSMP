import SvgArray from "./SvgArray";
const centerNavItems = [
  { itemID: 1, content: "Obriši" },
  { itemID: 2, content: "Rotiraj" },
  { itemID: 3, content: "Rotiraj" },
  { itemID: 4, content: "Kreiraj vezu" },
  { itemID: 5, content: "Kreiraj junction" },
  { itemID: 6, content: "Kreiraj držač" },
  { itemID: 7, content: "Simulacija" },
  { itemID: 8, content: "Fullscreen" },
];
const mergedItems = centerNavItems.map((centerNavItem) => {
  const matchingSvgItem = SvgArray.find(
    (svgItem) => svgItem.itemID === centerNavItem.itemID
  );
  return {
    ...centerNavItem,
    contentSVG: matchingSvgItem ? matchingSvgItem.content : undefined,
  };
});
function HeaderCenter() {
  return (
    <>
      <div className="d-flex justify-content-center app-header-center-side">
        {mergedItems.map((item) => (
          <div
            key={item.itemID}
            className="d-flex flex-column align-items-center p-2 center-header-item-wrapper"
          >
            <img
              src={item.contentSVG}
              alt={item.content.toString()}
              style={
                item.content.toString() === "Kreiraj junction"
                  ? { transform: "rotate(270deg)" }
                  : {}
              }
            />
            <p key={item.itemID} className="app-header-center-side-item">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default HeaderCenter;
