// shadow-[0_25px_60px_15px_rgba(239,68,60,0.63)]

export default function Mision() {
  return (
    <div className="w-2/3 flex justify-center items-center flex-col backdrop-blur-md py-24 rounded-2xl border-2 border-solid border-white/70 shadow-md shadow-white">
      <div className="h-16">
        <h3 className="font-extrabold text-4xl">
          <span className="before:block before:absolute before:-inset-4 before:-skew-y-3 before:blur-2xl before:bg-red-400/80 relative inline-block ">
            <span className="relative text-slate-200/95">Misión</span>
          </span>
        </h3>
      </div>
      <div>
        <p className="text-center">
          El COMP-UPEC tiene como misión de entrenar y difundir la importancia
          de la integración de modelos matemáticos-computacionales desde la
          óptica del análisis de datos e inteligencia artificial, aplicados al
          desarrollo local y territorial de la zona 1 del Ecuador
        </p>
      </div>
    </div>
  );
}
