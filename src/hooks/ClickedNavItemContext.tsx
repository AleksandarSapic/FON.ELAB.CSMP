import { createContext } from "react";

interface ClickedNavItemContextProps {
  clickedNavItem: number;
  setClickedNavItem: (newClickedNavItem: number) => void;
}

const ClickedNavItemContext = createContext<ClickedNavItemContextProps>({
  clickedNavItem: 0,
  setClickedNavItem: () => {},
});

export default ClickedNavItemContext;
