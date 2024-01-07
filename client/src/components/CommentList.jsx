import React from "react";

const CommentList = ({ comments }) => {
  return (
    <>
      <h3 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">
        Comments :{" "}
      </h3>

      {comments.map((comment, index) => (
        <div key={index} className="px-8">
          <h4 className=" text-xl text-gray-600">{comment.username}</h4>
          <p className="mt-1 mb-4 px-3 ">{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default CommentList;
