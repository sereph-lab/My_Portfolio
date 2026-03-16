export default function Page_02() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Image */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src="/image/outdoor-tennis-court-facility-in-the-evening.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10 bg-gray-900 text-white">
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">My Portfolio</h2>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            corrupti cum nulla atque voluptate vero.
          </p>

          <div className="mt-6">
            <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md">
              Inspiration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
