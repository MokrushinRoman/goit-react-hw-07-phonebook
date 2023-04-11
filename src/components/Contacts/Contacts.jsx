import { useDispatch, useSelector } from 'react-redux';
import { capitalLetter } from 'helpers';
import { Contact, ContactsList, DeleteButton } from './Contacts.styled';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/seloctors';

export const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);

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
