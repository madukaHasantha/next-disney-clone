import Link from "next/link";
import React from "react";
//import DisneyHome from '../DisneyHome/page';

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginCTA">
        <img
          src="/images/cta-logo-one.svg"
          alt="CTALogoOne"
          className="loginCTALogoOne"
        />

        <div className="loginSignUp">
          <Link href="../DisneyHome">GET ALL THERE</Link>
        </div>

        <div className="Description">
          Of all the companies to enter the streaming wars, Disney has
          significant advantages with Disney+. It can draw from a deep vault of
          its own animated and live-action movies and from popular shows on its
          own cable networks as well as from company properties like Marvel,
          Pixar, National Geographic and Star Wars.
        </div>
        <img
          src="/images/cta-logo-two.png"
          alt="CTALogoTwo"
          className="loginCTALogoTwo"
        />
      </div>
    </div>
  );
}

export default Login;
