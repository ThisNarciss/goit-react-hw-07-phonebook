import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ChildrenBox, Container, Notification } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContact } from 'redux/operations';

export function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  console.log(error);

  useEffect(() => {
    dispatch(fetchContact());
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
        {isLoading && !error && <b>Request in progress...</b>}
      </Section>
    </Container>
  );
}
