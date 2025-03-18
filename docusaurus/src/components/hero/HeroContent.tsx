export default function HeroContent() {
  return (
    <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
      <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
        We're changing the way people connect
      </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
        amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
      </p>
      <div className="mt-10 flex items-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Live demo <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}