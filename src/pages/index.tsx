import Image from "next/image";
import NavbarPage from "@/components/navbar";
import Mision from "@/components/mision";
import Vision from "@/components/vision";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";

// animations
import {
  navbarAnimationEnd,
  navbarAnimationStart,
} from "@/assets/animations/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [navbarIcon, setNavbarIcon] = useState("/logo_black.png");
  const [navbarIconWidth, setNavbarIconWidth] = useState(400);
  const [navbarIconHeight, setNavbarIconHeight] = useState(300);
  const [navbarIconTextStyle, setNavbarIconTextStyle] = useState("hidden");

  // refs
  const navbar_ref = useRef<any>();

  useEffect(() => {
    /**
     * change of navbar when scroll page
     * control icon then scroll is down in page
     * control height and add a animation
     */
    const handleScroll = () => {
      const main: any = navbar_ref.current;
      let { y } = main.getBoundingClientRect();
      let icon: string;
      let width: number;
      let height: number;
      let icon_text_style: string;

      if (y < -10) {
        icon = "/logo_small_black.png";
        width = 80;
        height = 50;
        icon_text_style =
          "flex justify-center items-center font-bold text-xl ml-8";
        navbarAnimationStart();
      } else {
        icon = "/logo_black.png";
        width = 400;
        height = 300;
        icon_text_style = "hidden";
        navbarAnimationEnd();
      }

      setNavbarIcon(icon);
      setNavbarIconWidth(width);
      setNavbarIconHeight(height);
      setNavbarIconTextStyle(icon_text_style);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <main
      className={`flex min-h-screen${inter.className} bg-gray-100 bt-28`}
      ref={navbar_ref}
    >
      <div className="z-10 mt-36">
        <NavbarPage
          icon_height={navbarIconHeight}
          icon_width={navbarIconWidth}
          icon={navbarIcon}
          text_icon_style={navbarIconTextStyle}
        ></NavbarPage>
        <div className="col-1 flex flex-col mt-36 px-24">
          <div className="flex justify-center items-center mb-12">
            <Image
              src="/logo_black.png"
              className="rounded-xl z-0"
              alt="logo club de optimización matematica"
              width={500}
              height={250}
            ></Image>
          </div>
          <div className="my-24 flex justify-center">
            <Mision></Mision>
          </div>
          <div className="my-20 flex justify-center">
            <Vision></Vision>
          </div>
        </div>
        <div className="col-2 w-full">
          <Footer></Footer>
        </div>
      </div>
    </main>
  );
}
