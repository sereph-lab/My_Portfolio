const page = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <img
          src="/image/outdoor-tennis-court-facility-in-the-evening.jpg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/5 bg-gray-400 flex items-center justify-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold mb-4">My Portfolio</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            corrupti cum nulla atque voluptate vero numquam iste dolores, neque
            expedita eaque, incidunt quas temporibus voluptates rem dolore
            dolorem rerum? Similique deserunt doloremque animi natus corrupti
            quod dolores, temporibus cum porro impedit vero mollitia ut placeat
            itaque. Accusamus, quam deserunt? Nostrum aut modi vitae suscipit
            fuga itaque distinctio pariatur dolore? Sequi atque in maiores sint
            iure repudiandae doloribus nulla culpa, recusandae, explicabo fuga
            tempore labore aspernatur? Inventore, iusto tempora! Est quia magni
            facilis architecto, molestiae expedita maiores a quisquam voluptates
            sint soluta fugit. Accusantium magni sint laudantium maiores iste
            quidem odio?
          </p>
          <div className="py-4 flex gap-4">
            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Inspriration
            </button>
            <button className="rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">
              Non Inspiration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
