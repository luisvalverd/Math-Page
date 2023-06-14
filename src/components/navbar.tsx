import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-red-500 h-16 w-full flex justify-between items-center p-4 fixed right-0 left-0 top-0 z-30">
      <div>
        <Link href="/" className="text-lg font-bold hover:text-xl duration-200">
          Club de Optimizacion Matemática Computacional
        </Link>
      </div>
      <div>
        <ul className="list-none w-auto flex flex-row mx-4">
          <li className="mx-2 underline-offset-2 hover:font-bold hover:underline duration-150">
            <Link href="/about">informacion</Link>
          </li>
          <li className="mx-2 underline-offset-2 hover:font-bold hover:underline duration-150">
            <Link href="/members">Miembros</Link>
          </li>
          <li className="mx-2 underline-offset-2 hover:font-bold hover:underline duration-150">
            <Link href="/events">Eventos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
