export default function Footer() {
  return (
    <footer className="bg-[#323232] py-8 text-[#efece4]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="mb-1 font-serif text-2xl font-medium">Karina Alvarez Mendiara</p>
            <p className="text-xs font-medium tracking-[0.2em] text-[#e0dcd2] uppercase">Abogada</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-[#e0dcd2]">© {new Date().getFullYear()} Estudio Jurídico Mendiara.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
