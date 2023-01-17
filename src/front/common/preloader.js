import React from "react";
import gifLoader from "../img/gifLoader.png";
import skelet from "../img/skelet.gif";
const Preloader = () => {
  return (
    <div>
      <img src={gifLoader} style={{ width: "40px", height: "40px" }} />
    </div>
  );
};
export const Load = () => {
  return (
    <div style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', display:'flex'}}>
        <img src={skelet} style={{ width: "480px", height: "620px" }} />
    </div>
  );
};
export default Preloader;
