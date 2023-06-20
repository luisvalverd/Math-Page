/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

export default function NavbarPage() {
  return (
    <nav className="bg-gray-200 md:w-full justify-between w-auto md:h-64 flex">
      <div className="text-black flex justify-center items-center ml-24">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={400} height={300}></Image>
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
                Informacion
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
}
