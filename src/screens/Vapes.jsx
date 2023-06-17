import React, { useEffect } from "react";

const Vapes = () => {
  useEffect(() => {
    const navBar = (document.querySelector("#navBarUl").style.color =
      "#000000");
  }, []);

  return <div>Vapes</div>;
};

export default Vapes;
