const leftSideNavItems = [{ content: "Datoteka" }, { content: "Uredi" }];
function HeaderLeftSide() {
  return (
    <>
      <div className="d-flex justify-content-center w-25 app-header-aside">
        {leftSideNavItems.map((item) => (
          <p key={item.content} className="p-2 app-header-aside-item">
            {item.content}
          </p>
        ))}
      </div>
    </>
  );
}

export default HeaderLeftSide;
