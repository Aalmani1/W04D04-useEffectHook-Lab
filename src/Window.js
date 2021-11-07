import { useEffect, useState } from "react";

function Window() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <div>
      <div>{`Window width = ${width}`}</div>
      <div>{`Window height = ${height}`}</div>
    </div>
  );
}

export default Window;
