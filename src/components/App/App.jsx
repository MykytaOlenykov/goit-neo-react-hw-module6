import ContactForm from "../ContactForm";
import SearchBox from "../SearchBox";
import ContactList from "../ContactList";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
