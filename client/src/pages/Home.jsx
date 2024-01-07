import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Articles } from "../components";
import { ArticleContent } from ".";
import HomeArticleList from "../components/homeArticleList/HomeArticleList";
const Home = ({ articles }) => {
  const { name } = useParams();

  const otherArticles = ArticleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <HomeArticleList articles={otherArticles} />
    </>
  );
};

export default Home;
