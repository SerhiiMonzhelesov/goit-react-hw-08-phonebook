// import Container from './Container/Container';
// import ContactForm from './ContactForm/ContactForm';
// import Contacts from './Contacts/Contacts';
// import Filter from './Filter/Filter';
// import Loader from './Loader/Loader';

import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUserThunk } from 'redux/authThunk';

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

// import { setFilter } from 'redux/phonebookSlice';
// import { addUser, getContacts, removeContact } from 'redux/phonebookThunk';
// import {
//   selectContacts,
//   selectError,
//   selectFilter,
//   selectLoading,
// } from 'redux/selectors';
// import { errorInfo, warningInfo } from './services/report';

function App() {
  // const users = useSelector(selectContacts);
  // const isLoading = useSelector(selectLoading);
  // const filter = useSelector(selectFilter);
  // const error = useSelector(selectError);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContacts());
  // }, [dispatch]);

  // const onAddContact = contactData => {
  //   const isAlready = users.some(user => user.name === contactData.name);
  //   isAlready ? warningInfo(contactData.name) : dispatch(addUser(contactData));
  // };

  // const onRemoveContact = contactId => {
  //   dispatch(removeContact(contactId));
  // };

  // const handleChangeFilter = e => {
  //   dispatch(setFilter(e.target.value));
  // };

  // const filterContacts = () => {
  //   const filteredContacts = users?.filter(user =>
  //     user.name.toLowerCase().includes(filter.toLowerCase().trim())
  //   );
  //   return filteredContacts;
  // };
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    if (!token) return;
    dispatch(refreshUserThunk(token));
  }, [token, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    // <Container>
    //   <h1>Phonebook</h1>
    //   <ContactForm onAddContact={onAddContact} />
    //   {users.length ? (
    //     <>
    //       <h2>Contacts</h2>
    //       <Filter handleChangeFilter={handleChangeFilter} />
    //     </>
    //   ) : (
    //     <p className="message">No contacts in the phonebook</p>
    //   )}
    //   {isLoading && <Loader />}
    //   {error && <>{errorInfo(error)}</>}
    //   {users.length > 0 && !isLoading && (
    //     <Contacts
    //       contacts={filterContacts()}
    //       onRemoveContact={onRemoveContact}
    //     />
    //   )}
    // </Container>
  );
}

export default App;
