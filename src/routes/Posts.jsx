import style from "./styles/stylePosts.module.scss";
import { GET } from "./utils/api";
import { useState, useEffect } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Post from "./Post";

export default function Posts() {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GET("posts").then(({ posts }) => setPostList(posts));
  }, []);
  return (
    <div className={style.Posts}>
      <h1>Explore Posts</h1>
      <div className={style.container}>
        {postList.map((post) => (
          <Post postData={post} />
        ))}
      </div>
      <div className={style.toHome}>
        <GrHomeRounded />
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
}
