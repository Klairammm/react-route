import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GrHomeRounded } from "react-icons/gr";
import style from "./styles/styleQuote.module.scss";

export default function Quote() {
  let { quote } = useParams();
  const navigate = useNavigate();

  const [quoteData, setQuoteData] = useState({});

  useEffect(() => {
    fetch(`http://dummyjson.com/quotes/${quote}`)
      .then((res) => res.json())
      .then((data) => setQuoteData(data));
  }, [quote]);

  const onClickPrev = () => navigate(`/messages/${parseInt(quote) - 1}`);
  const onClickNext = () => navigate(`/messages/${parseInt(quote) + 1}`);

  return (
    <div className={style.Quote} id={quoteData.id}>
      <div className={style.Quote__container}>
        <p>#{quoteData.id}</p>
        <h3>{quoteData.quote}</h3>
        <p>{quoteData.author}</p>
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
