import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  background?: string;
  icon?: string;
  icon_width?: number;
  icon_height?: number;
  text_icon_style?: string;
}

const NavbarPage: React.FC<Props> = (props: Props) => {
  return (
    <nav className={`${props.background}`}>
      <div className="text-black flex justify-center items-center ml-24">
        <Link href="/" className="flex justify-center">
          <Image
            src={`${props.icon}`}
            alt="logo"
            width={props.icon_width}
            height={props.icon_height}
          ></Image>
          <span className={`${props.text_icon_style}`}>COMC UPEC</span>
        </Link>
      </div>
      <div className="text-black flex justify-center items-center mr-24">
        <ul className="flex flex-row text-xl">
          <li className="mx-4">
            <Link href="/">
              <span className="font-medium hover:border-b-2 border-black">
                Inicio
              </span>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/about">
              <span className="font-medium hover:border-b-2 border-black">
                Información
              </span>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/events">
              <span className="font-medium hover:border-b-2 border-black">
                Eventos
              </span>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/members">
              <span className="font-medium hover:border-b-2 border-black">
                Miembros
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarPage;
