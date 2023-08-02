import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import Container from 'components/Container/Container';
import StyledSection from './StyledSection';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/Slice/phonebookSlice';
import {
  addUser,
  getContacts,
  removeContact,
} from 'redux/Thunk/phonebookThunk';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectLoading,
  selectUserData,
} from 'redux/selectors';

import { errorInfo, warningInfo } from 'services/report';

function ContactsPage() {
  const users = useSelector(selectContacts);
  const userData = useSelector(selectUserData);
  const isLoading = useSelector(selectLoading);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData) return;
    dispatch(getContacts());
  }, [dispatch, userData]);

  const onAddContact = contactData => {
    const isAlready = users.some(user => user.name === contactData.name);
    isAlready ? warningInfo(contactData.name) : dispatch(addUser(contactData));
  };

  const onRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const filterContacts = () => {
    const filteredContacts = users?.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  return (
    userData && (
      <StyledSection>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={onAddContact} />
          {users.length ? (
            <>
              <h2>Contacts</h2>
              <Filter handleChangeFilter={handleChangeFilter} />
            </>
          ) : (
            <p className="message">No contacts in the phonebook</p>
          )}
          {isLoading && <Loader />}
          {error && <>{errorInfo(error)}</>}
          {users.length > 0 && !isLoading && (
            <Contacts
              contacts={filterContacts()}
              onRemoveContact={onRemoveContact}
            />
          )}
        </Container>
      </StyledSection>
    )
  );
}

export default ContactsPage;
