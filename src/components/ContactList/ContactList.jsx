import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = (filterName, contacts) =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    );

  const filteredContacts = getFilteredContacts(filter, contacts);

  return (
    <List>
      {filteredContacts.map(contact => {
        return <ContactItem key={contact.id} {...contact} />;
      })}
    </List>
  );
};
