import style from "./styles/stylePost.module.scss";

const Post = ({ postData }) => {
  const { title, body, reactions } = postData;

  return (
    <div className={style.Post}>
      <h3>{`${title}`}</h3>
      <p className={style.Post__body}>{`${body}`}</p>
      <p className={style.Post__reactions}>Reactions: {`${reactions}`}</p>
    </div>
  );
};

export default Post;
