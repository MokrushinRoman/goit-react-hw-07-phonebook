import { useDispatch } from 'react-redux';
import { Box } from '../Box';
import { Title, Contacts, Phonebook, Filter } from 'components';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      mx="auto"
      my="100px"
      p={3}
      width="500px"
      border="1px solid rgba(0, 0, 0, 0.2)"
      borderRadius="5px"
      boxShadow="0 3px 7px rgba(0, 0, 0, 0.3)"
    >
      <h1 className="visually-hidden">Phonebook</h1>

      <Box>
        <Title text="phonebook" />

        <Phonebook />
      </Box>

      <Box mt={3}>
        <Title text="contacts" />

        <Filter />

        <Contacts />
      </Box>
    </Box>
  );
};
