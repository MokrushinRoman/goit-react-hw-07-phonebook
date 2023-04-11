import { capitalLetter } from 'helpers';

import { Contact, ContactsList, DeleteButton } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsList } from 'redux/seloctors';
import { deleteContact } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  return (
    <ContactsList>
      {contacts.map(({ id, name, phone }) => {
        return (
          <Contact key={id}>
            {name}: {phone}
            <DeleteButton
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              {capitalLetter('delete')}
            </DeleteButton>
          </Contact>
        );
      })}
    </ContactsList>
  );
};
