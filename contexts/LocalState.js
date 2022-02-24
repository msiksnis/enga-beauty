import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function AppStateProvider({ children }) {
  const [isOpen, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!isOpen);
  }

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <LocalStateProvider
      value={{
        isOpen,
        setOpen,
        toggleMenu,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useLocalState() {
  const all = useContext(LocalStateContext);
  return all;
}

export { LocalStateContext, AppStateProvider, useLocalState };
