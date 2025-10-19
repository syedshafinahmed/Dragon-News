import React from "react";
import { FaStar, FaRegEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    id,
    thumbnail_url,
    details,
    rating,
    total_view,
    author,
    tags,
  } = news;

  // Format date nicely
  const formattedDate = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md border border-gray-300 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-x-3">
          <button className="btn btn-ghost btn-xs text-gray-500 hover:text-gray-700">
            <FaRegBookmark />
          </button>
          <button className="btn btn-ghost btn-xs text-gray-500 hover:text-gray-700">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold leading-snug">{title}</h2>

        <p className="text-sm text-gray-600 line-clamp-4">
          {details}{" "}
        </p>
        <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer">
          Read More
        </Link>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="badge badge-outline text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="card-actions justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-1 text-secondary">
            <FaStar />
            <span className="font-medium">{rating.number}</span>
            <span className="badge badge-sm badge-secondary ml-3 text-white">
              {rating.badge}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
