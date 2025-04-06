import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.userList}>
      {contacts.map((userContact) => (
        <Contact
          key={userContact.id}
          id={userContact.id}
          name={userContact.name}
          number={userContact.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
