import TopPostCard from "../ui/TopPostCard";

const TopPosts = () => {
  const topPosts = [
    {
      id: 1,
      title: "100+ Frontend Projects to Level up Your Skills",
      coverImage: "/img/frontendbg.png",
      description:
        "AxdlmrbklJh7KXNHr8X wLsTjrOE5KSlHen8E_AxdlmrbklJh7KXNHr8Xio85byQCHuiO5iN26ZXY",
      author: "Uvals Codes",
      date: "October 31, 2024",
      category: "project",
    },
    {
      id: 2,
      title: "100+ Frontend Projects to Level up Your Skills",
      coverImage: "/img/frontendbg.png",
      description:
        "AxdlmrbklJh7KXNHr8X wLsTjrOE5KSlHen8E_AxdlmrbklJh7KXNHr8Xio85byQCHuiO5iN26ZXY",
      author: "Uvals Codes",
      date: "October 31, 2024",
      category: "frontend",
    },
    {
      id: 3,
      title: "100+ Frontend Projects to Level up Your Skills",
      coverImage: "/img/frontendbg.png",
      description:
        "AxdlmrbklJh7KXNHr8X wLsTjrOE5KSlHen8E_AxdlmrbklJh7KXNHr8Xio85byQCHuiO5iN26ZXY",
      author: "Uvals Codes",
      date: "October 31, 2024",
      category: "code",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 mt-16 md:mt-24 lg:mt-32">
      <div className="grid grid-cols-1  gap-6">
        {topPosts.map((project, index) => (
          <TopPostCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
