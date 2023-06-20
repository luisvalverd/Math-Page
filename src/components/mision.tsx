// shadow-[0_25px_60px_15px_rgba(239,68,60,0.63)]

export default function Mision() {
  return (
    <div className="w-2/3 flex justify-center p-8 items-center flex-col bg-white drop-shadow-xl py-24 rounded-2xl ">
      <div className="h-16 mb-6">
        <h3 className="font-extrabold text-4xl">
          <span className="before:block before:absolute before:-inset-4 before:-skew-y-3 before:bg-black relative inline-block ">
            <span className="relative text-white">Misión</span>
          </span>
        </h3>
      </div>
      <div>
        <p className="text-center text-black">
          El COMP-UPEC tiene como misión de entrenar y difundir la importancia
          de la integración de modelos matemáticos-computacionales desde la
          óptica del análisis de datos e inteligencia artificial, aplicados al
          desarrollo local y territorial de la zona 1 del Ecuador
        </p>
      </div>
    </div>
  );
}
