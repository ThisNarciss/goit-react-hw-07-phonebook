import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ChildrenBox, Container, Notification } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { errorNotify } from 'utils/notification';
import { Loader } from './Loader/Loader';

export function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <ChildrenBox>
            <Filter />
            <ContactList />
          </ChildrenBox>
        ) : (
          <Notification>There are no contacts in the phone book</Notification>
        )}
        {isLoading && !error && <Loader />}
      </Section>
      {error && errorNotify(error)}
    </Container>
  );
}
