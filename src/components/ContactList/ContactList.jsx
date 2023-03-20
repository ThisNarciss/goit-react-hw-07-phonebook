import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const getFilteredContacts = useSelector(selectFilterContacts);

  return (
    <List>
      {getFilteredContacts.map(contact => {
        return <ContactItem key={contact.id} {...contact} />;
      })}
    </List>
  );
};
