import React from "react";

const Viewers = () => {
  return (
    <div className="ViewerContainer">
      <div className="ViewerWrap">
        <img src="/images/viewers-disney.png" alt="disney.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="ViewerWrap">
        <img src="/images/viewers-pixar.png" alt="pixar.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="ViewerWrap">
        <img src="/images/viewers-marvel.png" alt="marvel.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="ViewerWrap">
        <img src="/images/viewers-starwars.png" alt="starwars.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="ViewerWrap">
        <img src="/images/viewers-national.png" alt="national.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Viewers;
