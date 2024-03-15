import "./reset.css";
import Styles from "./App.module.css";
import Calculator from "./components/Calculator.jsx";

const App = () => {
  return (
    <div className={Styles.appContainer}>
      <h1 className={Styles.title}>Calculator 😎</h1>
      <Calculator />
    </div>
  );
};

export default App;
