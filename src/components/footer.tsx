import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full px-64 py-24 h-auto bg-gray-200">
      <div>
        <div className="mb-6">
          <h3 className="font-bold text-2xl text-black border-gray-400 border-b-2 block">
            Contacto
          </h3>
        </div>
        <ul className="text-black">
          <li className="py-1">
            <p className="text-sm">
              Club de Optimizcion Matematica Computacional
            </p>
          </li>
          <li className="py-1">
            <Link
              href="http://datalab.upec.edu.ec"
              className="text-sm hover:border-b-2 duration-300"
              target="_blank"
              rel="noopener_noreferrer"
            >
              Smart Data Lab
            </Link>
          </li>
          <li className="py-1">
            <Link
              href="http://upec.edu.ec"
              className="text-sm hover:border-b-2 duration-300"
              target="_blank"
              rel="noopener_noreferrer"
            >
              UPEC
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
