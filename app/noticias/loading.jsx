import Image from 'next/image';

export default function NoticiasLoading() {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Cargando noticias"
    >
      <Image
        src="/03_logo-completo_un-color-bordo.svg"
        alt=""
        width={230}
        height={182}
        priority
        className="brand-loader h-auto w-40 sm:w-48"
      />
    </div>
  );
}
