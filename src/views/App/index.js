import React from "react";
import HeaderComponent from "../../components/header-component";
import FooterComponent from "../../components/footer-component";
import RouterComponent from "../../router";


function Index() {
  return (
      <div className="theme-layout">
        {/* header */}
        <HeaderComponent/>

        {/* suggester */}
        <RouterComponent />

        {/* footer */}
        <FooterComponent/>
      </div>
  );
}

export default Index;
