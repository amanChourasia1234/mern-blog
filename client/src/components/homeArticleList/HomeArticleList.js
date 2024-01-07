import React from "react";
import { Link } from "react-router-dom";
import "./homeArticleList.css";
const HomeArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="p-4">
          <div className="card h-full border-2 py-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Link key={index} to={`/article/${article.name}`}>
              <h3 className="text-lg font-medium text-gray-900 mb-3 px-4">
                {article.title}
              </h3>
            </Link>
            <p className="px-4">Posted on : 23 dec 2023 , by Aman Chourasia</p>
            <div className="list-body">
              <div className="list-body-img">
                <Link to={`/article/${article.name}`}>
                  <img
                    className="list-img py-3 md:h-36 w-full object-cover object-center"
                    src={article.thumbnail}
                    alt="blog"
                  />
                </Link>
              </div>
              <div className="list-body-content">
                <p className="leading-relaxed mb-3">
                  {article.content[0].substring(0, 315)}
                </p>
                <div className="flex item-center flex-wrap">
                  <Link
                    className="text-indigo-500 inline-flex item-center md:mb-2 lg:mb-0"
                    to={`/article/${article.name}`}
                  >
                    Learn More ...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeArticleList;
