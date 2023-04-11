import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsList } from 'redux/seloctors';
import { BiXCircle } from 'react-icons/bi';
import { errorNotification } from 'helpers';
import {
  PhonebookForm,
  Label,
  Input,
  AddContactButton,
  CloseButton,
} from './Phonebook.styled';
import { Box } from 'components/Box';
import { addContact } from 'redux/operations';

export const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const onInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return new Error("Such field wasn't found ");
    }
  };

  const onClearInput = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName('');
        break;
      case 'number':
        setNumber('');
        break;
      default:
        return new Error("Such field wasn't found ");
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    if (dublicateFinder(name)) {
      errorNotification(name);
    } else {
      const contact = { name, phone: number };
      dispatch(addContact(contact));
      formReset();
    }
  };

  const dublicateFinder = name => {
    const normalizedName = name.toLowerCase().trim();
    return contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName.toLowerCase()
    );
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <PhonebookForm onSubmit={onSubmit}>
      <Box position="relative">
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={onInputChange}
            required
          />
        </Label>

        <CloseButton type="button" onClick={onClearInput} name="name">
          <BiXCircle />
        </CloseButton>
      </Box>

      <Box position="relative">
        <Label>
          Number
          <Input
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={onInputChange}
            required
          />
        </Label>

        <CloseButton type="button" onClick={onClearInput} name="number">
          <BiXCircle />
        </CloseButton>
      </Box>

      <AddContactButton type="submit">Add contacts</AddContactButton>
    </PhonebookForm>
  );
};
