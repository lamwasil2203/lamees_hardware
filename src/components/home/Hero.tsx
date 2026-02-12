export function Hero() {
  return (
    <header className="min-h-[35vh] flex items-center justify-center relative pt-24 pb-12 px-12 border-b-2 border-border max-md:px-8 max-md:pt-24 max-md:pb-16">
      <div className="max-w-[900px] mx-auto text-left">
        <div className="flex gap-4 mb-6 font-mono text-[0.75rem] tracking-[1px]">
          <span className="text-accent font-bold">[SYSTEM]</span>
          <span className="text-secondary">ONLINE</span>
        </div>
        <h1 className="font-mono text-5xl font-bold mb-2 text-text tracking-[4px] max-sm:text-[2rem] max-sm:tracking-[2px]">
          LAMEES_
        </h1>
        <p className="font-mono text-[0.85rem] text-secondary font-normal tracking-[3px] max-sm:text-[0.75rem]">
          HARDWARE &times; SOFTWARE ENGINEERING
        </p>
      </div>
    </header>
  );
}
