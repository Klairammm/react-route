import style from "./styles/styleUser.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GrHomeRounded } from "react-icons/gr";

export default function User() {
  let { user } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`http://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  const onClickPrev = () => navigate(`/users/${parseInt(user) - 1}`);
  const onClickNext = () => navigate(`/users/${parseInt(user) + 1}`);

  return (
    <div className={style.User} id={userData.id}>
      <h2>Users</h2>

      <div className={style.container}>
        <img src={userData.image} alt={userData.lastName} />
        <div className={style.text__container}>
          <h3>{userData.firstName}</h3>
          <h3>{userData.lastName}</h3>
        </div>
      </div>
      <div className={style.PrevNext}>
        <button onClick={onClickPrev}>Prev</button>
        <button onClick={onClickNext}>Next</button>
      </div>
      <div className={style.toHome}>
        <GrHomeRounded />
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
}
