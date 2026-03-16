export default function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
          Data to enrich your online business
        </h1>

        <p className="mt-6 text-gray-400 text-sm sm:text-lg">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md">
            Get Started
          </button>

          <button className="text-gray-300">Learn More →</button>
        </div>
      </div>
    </section>
  );
}
