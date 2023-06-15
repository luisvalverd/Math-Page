import { Navbar } from "flowbite-react";
import Link from "next/link";

export default function NavbarPage() {
  return (
    <Navbar fluid rounded className="!bg-red-500">
      <div>
        <Link
          href="/"
          className="text-lg font-bold hover:text-xl duration-200 text-white"
        >
          <span>Club de Optimizacion Matemática Computacional</span>
        </Link>
      </div>

      <Navbar.Toggle className="!bg-red-600/50 border-2 border-red-200/50 md:hidden text-white focus:ring-0 hover:!border-gray-200" />

      <Navbar.Collapse>
        <li>
          <Link
            href="/"
            className="block py-2 pr-4 pl-3 md:p-0 rounded-lg md:rounded-none text-white hover:bg-red-700/30 md:border-white border-red-600 hover:border-b-2 md:border-0 md:hover:bg-transparent  md:dark:hover:bg-transparent"
          >
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 pr-4 pl-3 md:p-0 rounded-lg md:rounded-none text-white hover:bg-red-700/30 md:border-white border-red-600 hover:border-b-2 md:border-0 md:hover:bg-transparent  md:dark:hover:bg-transparent"
          >
            <p>Información</p>
          </Link>
        </li>
        <li>
          <Link
            href="/events"
            className="block py-2 pr-4 pl-3 md:p-0 rounded-lg md:rounded-none text-white hover:bg-red-700/30 md:border-white border-red-600 hover:border-b-2 md:border-0 md:hover:bg-transparent  md:dark:hover:bg-transparent "
          >
            <p>Eventos</p>
          </Link>
        </li>
        <li>
          <Link
            href="/members"
            className="block py-2 pr-4 pl-3 md:p-0 rounded-lg md:rounded-none text-white hover:bg-red-700/30 md:border-white border-red-600 hover:border-b-2 md:border-0 md:hover:bg-transparent  md:dark:hover:bg-transparent"
          >
            <p>Miembros</p>
          </Link>
        </li>
      </Navbar.Collapse>
    </Navbar>
  );
}
