import { useDispatch } from 'react-redux';
import { Item, ButtonDel, Text } from './ContactItem.styled';
import { BiUser } from 'react-icons/bi';
import { deleteContact } from 'redux/contacts/operations';
import { LoaderBtn } from 'components/Loader/Loader';
import { useState } from 'react';

export function ContactItem({ id, name, phone }) {
  const [delBtnId, setDelBtnId] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const onBtnDeleteClick = id => {
    setDelBtnId(id);
    setIsDeleting(true);
    dispatch(deleteContact(id))
      .unwrap()
      .finally(() => setIsDeleting(false));
  };

  return (
    <Item>
      <BiUser />
      <Text>
        {name}: {phone}
      </Text>
      <ButtonDel
        type="button"
        onClick={() => {
          onBtnDeleteClick(id);
        }}
        disabled={isDeleting}
      >
        Delete
        {isDeleting && delBtnId === id && <LoaderBtn />}
      </ButtonDel>
    </Item>
  );
}
