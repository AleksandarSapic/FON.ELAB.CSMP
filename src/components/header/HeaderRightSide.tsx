const rightSideNavItems = [{ content: "Pomoć" }];
function HeaderRightSide() {
  return (
    <>
      <div className="d-flex justify-content-center w-25 app-header-aside">
        {rightSideNavItems.map((item) => (
          <p key={item.content} className="p-3 app-header-aside-item">
            {item.content}
          </p>
        ))}
      </div>
    </>
  );
}
export default HeaderRightSide;
