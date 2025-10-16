export default function Footer() {
  return (
    <footer className="bg-[#001a33] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-bold mb-1">Estudio Jurídico Mendiara</p>
            <p className="text-sm text-gray-400">Servicios Legales</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Estudio Jurídico Mendiara.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
