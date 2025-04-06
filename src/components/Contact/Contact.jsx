import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={s.item}>
      <div className={s.card}>
        <p className={s.name}>
          <span>
            <FaUser size={20} />
          </span>
          {name}
        </p>
        <p className={s.phone}>
          <span>
            <FaPhone size={20} />
          </span>
          {number}
        </p>
      </div>
      <button
        type="button"
        className={s.btn}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
