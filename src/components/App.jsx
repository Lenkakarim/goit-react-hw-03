import { useState, useEffect } from "react";
import initialContacts from "../assets/contacts.json";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : initialContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "contacts",
      JSON.stringify(contacts)
    );
  }, [contacts]);

  const handleAddUser = (newUser) => {
    setContacts((newContacts) => {
      return [...newContacts, newUser];
    });
  };

  const handleDelete = (userId) => {
    setContacts((newContact) => {
      return newContact.filter(
        (user) => user.id !== userId
      );
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddUser} />

      {/* <SearchBox /> */}
      <ContactList
        contacts={contacts}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

// function App() {
//   const [contacts, setContacts] = useState(() => {
//     try {
//       const savedContacts =
//         localStorage.getItem("contacts");
//       return savedContacts
//         ? JSON.parse(savedContacts)
//         : initialContacts;
//     } catch (e) {
//       console.error(
//         "Помилка при читанні з localStorage",
//         e
//       );
//       return initialContacts;
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(
//       "contacts",
//       JSON.stringify(contacts)
//     );
//   }, [contacts]);

//   const handleAddUser = (newUser) => {
//     setContacts((prev) => [...prev, newUser]);
//   };

//   const handleDelete = (userId) => {
//     setContacts((prev) =>
//       prev.filter((user) => user.id !== userId)
//     );
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAdd={handleAddUser} />
//       {/* <SearchBox /> */}
//       <ContactList
//         contacts={contacts}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }

// export default App;
