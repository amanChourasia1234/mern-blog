import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleContent, NotFound } from "./";
import { Articles } from "../components";
import CommentList from "../components/CommentList";
import AddComment from "../components/AddComment";
const Article = () => {
  const { name } = useParams();
  const article = ArticleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFound />;
  const otherArticles = ArticleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      <p className="py-6 px-3">Author : Aman Chourasia</p>
      <p className="py-6 px-3">Date : 22/04/2023</p>

      <div>
        <img src={article.thumbnail}></img>
      </div>
      {article.content.map((content, index) => (
        <p className="max-auto leading-relaxed text-base mb-4" key={index}>
          {content}
        </p>
      ))}
      <CommentList comments={articleInfo.comments} />
      <AddComment articleName={name} setArticleInfo={setArticleInfo} />
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
};

export default Article;
