import { createContext, useContext } from "react";

interface ScrollContextType {
  scrollY: number;
}
export const ContextScrollProvider = createContext<ScrollContextType>({
  scrollY: 0,
});
export const UseScrollContext = () => useContext(ContextScrollProvider);

interface LoggedInUserType {
  image: string;
}

export const ContextLoggedInImageProvider = createContext<LoggedInUserType>({
  image: "",
});
export const UseLoggedInImageContext = () =>
  useContext(ContextLoggedInImageProvider);
