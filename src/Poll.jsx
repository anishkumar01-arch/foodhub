import React, { useState } from "react";

function Poll() {
  let [likes, setLikes] = useState(0);
  let [disLikes, setDisLikes] = useState(0);

  let likesLogics = () => {
    setLikes(likes + 1);
  };
  let disLikesLogics = () => {
    setDisLikes(disLikes + 1);
  };
  let ResetLogics = () => {
    setLikes(0);
    setDisLikes(0);
  };
  return (
    <>
      <h1>***Polling Example....***</h1>
      <h2>The React Likes: {likes}</h2>
      <h2>The React DisLikes: {disLikes}</h2>
      <button onClick={likesLogics}>Likes</button>
      <button onClick={disLikesLogics}>disLikes</button>
      <button onClick={ResetLogics}>reset</button>
    </>
  );
}

export default Poll;