import { BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { Item, List, ButtonDel, Text } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onBtnDeleteClick = id => dispatch(deleteContact(id));

  const getFilteredContacts = (filterName, contacts) =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    );

  const filteredContacts = getFilteredContacts(filter, contacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            <BiUser />
            <Text>
              {name}: {phone}
            </Text>
            <ButtonDel
              type="button"
              onClick={() => {
                onBtnDeleteClick(id);
              }}
            >
              Delete
            </ButtonDel>
          </Item>
        );
      })}
    </List>
  );
};
