import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  return windowSize;
}

function ExampleComponent() {
  const window_width = useWindowSize();
  console.log(window_width);
}

export default ExampleComponent;
