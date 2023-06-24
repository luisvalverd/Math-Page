import Image from "next/image";
import NavbarPage from "@/components/navbar";
import Mision from "@/components/mision";
import Vision from "@/components/vision";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [navbarStyles, setNavbarStyles] = useState<any>(
    `
    bg-gray-200 md:w-full justify-between w-auto md:h-64 flex fixed top-0 right-0 left-0 z-10
    `
  );
  const [navbarIcon, setNavbarIcon] = useState("/logo_black.png");
  const [navbarIconWidth, setNavbarIconWidth] = useState(400);
  const [navbarIconHeight, setNavbarIconHeight] = useState(300);
  const [navbarIconTextStyle, setNavbarIconTextStyle] = useState("hidden");

  // refs
  const navbar_ref = useRef<any>();

  useEffect(() => {
    /**
     * change styles of navbar when scroll page
     */
    const handleScroll = () => {
      const main: any = navbar_ref.current;
      let { y } = main.getBoundingClientRect();
      let style_navbar: string;
      let icon: string;
      let width: number;
      let height: number;
      let icon_text_style: string;

      if (y < -10) {
        style_navbar = `
          bg-gray-200 md:w-full justify-between w-auto md:h-24 flex fixed top-0 right-0 left-0 z-10
          `;
        icon = "/logo_small_black.png";
        width = 80;
        height = 50;
        icon_text_style =
          "flex justify-center items-center font-bold text-xl ml-8";
      } else {
        style_navbar = `
          bg-gray-200 md:w-full justify-between w-auto md:h-64 flex fixed top-0 right-0 left-0 z-10
          `;
        icon = "/logo_black.png";
        width = 400;
        height = 300;
        icon_text_style = "hidden";
      }

      setNavbarIcon(icon);
      setNavbarStyles(style_navbar);
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
          background={navbarStyles}
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
