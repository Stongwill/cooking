import React from "react";
import ContentLoader from "react-content-loader";

const Preloader = (props) => (
  <>
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="44" y="242" rx="0" ry="0" width="164" height="54" /> 
    <rect x="67" y="65" rx="0" ry="0" width="119" height="128" /> 
    <rect x="77" y="205" rx="0" ry="0" width="96" height="25" />
  </ContentLoader>
  </>
);

export default Preloader;
