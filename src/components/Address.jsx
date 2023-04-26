import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Located in</span>Madison, WI 53918 USA
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">get in touch</span>{" "}
        <a href="mailto:cosovan.alexandru@gmail.com">cosovan.alexandru@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: (608) 393 1392)">(608)-393-1392</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
