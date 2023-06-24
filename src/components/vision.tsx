export default function Vision() {
  return (
    <div className="w-2/3 flex justify-center p-8 bg-white items-center drop-shadow-xl flex-col py-24 rounded-2xl ">
      <div className="h-16 mb-6">
        <h3 className="font-extrabold text-4xl">
          <span className="before:block before:absolute before:-inset-4 before:-skew-y-3 before:bg-black relative inline-block ">
            <span className="relative text-white">Visión</span>
          </span>
        </h3>
      </div>
      <div>
        <p className="text-center text-black">
          El COMP-UPEC tiene como visión holística, analítica, crítica, objetiva
          y racional apegada al uso de la matemática y la computación fomentar
          el intercambio de conocimientos y colaboración entre sus integrantes,
          aplicadas al desarrollo sostenible de nuestras localidades en todas
          sus dimensiones, dígase; ambiental, económico y social.
        </p>
      </div>
    </div>
  );
}
