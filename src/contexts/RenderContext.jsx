import { useState, createContext, useContext } from "react";

const RenderContext = createContext();

const RenderContextProvider = ({ children }) => {
  const [renderedComponent, setRenderedComponent] = useState(null);

  return (
    <RenderContext.Provider value={{ renderedComponent, setRenderedComponent }}>
      {children}
    </RenderContext.Provider>
  );
};

export default RenderContextProvider;
export const useRenderContext = () => useContext(RenderContext);
