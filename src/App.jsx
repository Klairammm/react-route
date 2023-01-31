import logo from "./logo.svg";
import style from "./styleApp.module.scss";
import { Link } from "react-router-dom"; //metodo che si trasforma in un componente

function App() {
  return (
    <div className={style.App}>
      <header className={style.App__header}>
        <img src={logo} className={style.App__logo} alt="logo" />
        <h1>React Router</h1>
      </header>
      <div className={style.explore}>
        <Link to="/messages">Messages</Link>
        <Link to="/users">Meet our Users!</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/error">Ooops..?!</Link>
      </div>
    </div>
  );
}

export default App;
