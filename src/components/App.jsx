import { useState, useEffect } from "react";
import initialContacts from "../assets/contacts.json";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";

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
  const visibleContacts = contacts.filter((contact) =>
    contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddUser} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList
        contacts={visibleContacts}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
