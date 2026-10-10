import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#323232] py-8 text-[#efece4]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center justify-center gap-3 text-left md:justify-start">
            <Image
              src="/07_monograma_crema.svg"
              alt=""
              width={52}
              height={52}
              className="h-10 w-auto md:h-11"
            />
            <div>
              <p className="font-serif text-xl leading-none font-medium md:text-2xl">Karina Alvarez Mendiara</p>
              <p className="mt-1 text-[0.62rem] font-medium tracking-[0.24em] text-[#e0dcd2] uppercase">Abogada</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-[#e0dcd2]">© {new Date().getFullYear()} Estudio Jurídico Mendiara.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
