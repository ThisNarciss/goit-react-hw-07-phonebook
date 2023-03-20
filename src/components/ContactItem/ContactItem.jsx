import { useDispatch, useSelector } from 'react-redux';
import { Item, ButtonDel, Text } from './ContactItem.styled';
import { BiUser } from 'react-icons/bi';
import { deleteContact } from 'redux/contacts/operations';
import { LoaderBtn } from 'components/Loader/Loader';
import { useState } from 'react';
import { selectIsDeleting } from 'redux/contacts/selectors';

export function ContactItem({ id, name, phone }) {
  const [delBtnId, setDelBtnId] = useState(0);
  const isDeleting = useSelector(selectIsDeleting);
  const dispatch = useDispatch();

  const onBtnDeleteClick = id => {
    setDelBtnId(id);
    dispatch(deleteContact(id));
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
