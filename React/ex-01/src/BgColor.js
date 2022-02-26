import { useState } from "react";

export default function BgColor() {
  const [bgColor, setBgColor] = useState("transparent");
  const changeBgColor = () =>
    bgColor === "transparent" ? setBgColor("red") : setBgColor("transparent");

  return (
    <>
      <h1 style={{ backgroundColor: bgColor }}>BackgroundColor Toggle</h1>
      <button onClick={changeBgColor}>Toggle</button>
    </>
  );
}
