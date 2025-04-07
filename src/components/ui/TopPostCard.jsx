const TopPostCard = ({ category, title, author, date, coverImage }) => {
  return (
    <div
      className="cursor-pointer relative bg-gray-500 h-44 lg:h-80 flex items-end justify-center rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundPosition: "center",
      }}
    >
      <div className="p-6">
        <span className="absolute top-3 px-3 py-1 text-sm bg-indigo-600 text-white rounded-full">
          {category}
        </span>
        <h2 className="mt-4 text-2xl font-bold text-white leading-tight">
          {title}
        </h2>
        <div className="mt-4 flex items-center text-gray-400 text-sm">
          <span>{author}</span>
          <span className="mx-2">-</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default TopPostCard;
