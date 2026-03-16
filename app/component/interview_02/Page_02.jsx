const page = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Image */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src="/image/outdoor-tennis-court-facility-in-the-evening.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 bg-gray-400 flex items-center justify-center px-6 py-10">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4">
            My Portfolio
          </h1>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            corrupti cum nulla atque voluptate vero numquam iste dolores.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
              Inspiration
            </button>

            <button className="rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-500">
              Non Inspiration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
