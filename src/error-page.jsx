import { useRouteError, useNavigate } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import style from "./routes/styles/styleErrorPage.module.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  return (
    <div className={style.ErrorPage} id="error-page">
      <h1>Oops!</h1>
      <p>
        <i>404: {error.statusText || error.message}</i>
      </p>
      <img
        src="https://cdn-img-p.facciabuco.com/292/q35ova9h3r-dante-i-navigatori-non-c-erano-vaccata_b.jpg"
        alt="dante"
      />
      <div className={style.toHome}>
        <GrHomeRounded />
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
}
