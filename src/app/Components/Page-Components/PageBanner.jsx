import React from "react";
import bannerbggradient from "../../../../public/images/bannerbg-gradient.webp";
import Title from "../UiUx/Title";
import Buttons from "../UiUx/Buttons";
import Link from "next/link";
const PageBanner = ({ banner_title }) => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-bottom"
      style={{ backgroundImage: `url(${bannerbggradient.src})` }}
    >
      <div className="cus_container h-[99vh] max-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <Title title={banner_title} text_color={"text-secondary"} />

          <div className="pt-12">
            <Link href={"/"}>
              <Buttons btnname={"Return to Home"} text_color={"text-white"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
