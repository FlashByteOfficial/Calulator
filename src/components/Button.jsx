import buttonStyles from "../styles/Button.module.css";

const Button = ({ btns, funcHandleClick: handleClick }) => {
  const obj = { name: "gojo", age: 78 };

  return (
    <>
      {btns.map((btn) => (
        <button key={btn} className={buttonStyles.button} onClick={handleClick}>
          {btn}
        </button>
      ))}

      <button className={buttonStyles.button} key="equal" onClick={handleClick}>
        =
      </button>

      <button className={buttonStyles.button} key="clear" onClick={handleClick}>
        Clear
      </button>
    </>
  );
};

export default Button;
