import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPostCard = ({
  title,
  description,
  author,
  date,
  coverImage,
  slug,
  category,
}) => {
  return (
    <div className="space-y-8 bg-white rounded-2xl hover:scale-105 duration-400">
      <article className="border-1 border-[#e3e3ff]  py-4 px-3 rounded-2xl ">
        <div className="flex flex-col md:flex-row gap-14 items-center">
          <Link href={`/${slug}`} className="block md:w-1/3">
            <div className="aspect-[16/8] w-80 h-60 relative rounded-lg overflow-hidden ">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover "
              />
              <span className=" absolute left-2 top-3 px-3 py-1 text-sm bg-[#e3e3ff] text-black text-center rounded-full">
                {category}
              </span>
            </div>
          </Link>
          <div className="md:w-2/3 pr-5">
            <Link href={`/${slug}`} className="group">
              <h2 className="text-3xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-3">{description}</p>
            <div className="text-sm text-gray-500">
              {author} - {date}
            </div>
            <button className="px-5 py-2 cursor-pointer mt-2 border-2 border-amber-500 text-amber-500 rounded-lg font-medium hover:bg-amber-50 transition-colors text-center">
              Read More
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostCard;
