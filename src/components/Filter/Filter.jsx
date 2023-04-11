import { useDispatch } from 'react-redux';
import { Label } from './Filter.styled';
import { capitalLetter } from 'helpers';
import { setFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      {capitalLetter('find contact by name')}
      <input
        type="text"
        onChange={e => dispatch(setFilterValue(e.target.value))}
      />
    </Label>
  );
};
