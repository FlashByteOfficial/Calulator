import inputStyles from "../styles/Input.module.css";
// import { IoIosSearch } from "react-icons/io";

const Input = ({ val }) => {
  return (
    <>
      <input type="text" className={inputStyles.input} value={val} readOnly />{" "}
      {/* <IoIosSearch /> */}
    </>
  );
};

export default Input;
