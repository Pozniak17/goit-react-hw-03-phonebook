import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onSubmit }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={value}
        onChange={onSubmit}
        type="text"
        name="filter"
        placeholder="Filter"
      />
    </FilterLabel>
  );
};
