// import { useState } from 'react';
import { connect } from 'react-redux';
import styles from './Filter.module.scss';
// import PropTypes from 'prop-types';
// import store from '../../redux/store';
import { changeFilter } from '../../redux/actions';

// const Filter = ({ filterValue, whenChange }) => {
const Filter = ({ filterValue, whenChangeFilter }) => {
  // const [filterValue, setFilter] = useState('');

  const handleFilter = event => {
    whenChangeFilter(event.target.value);
    // setFilter(event.target.value);
  };

  // console.log(filterValue);
  // console.log(store.getState());

  return (
    <label>
      {`Find by Name: `}
      <input
        className={styles.Filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={filterValue}
        onChange={handleFilter}
      />
    </label>
  );
};

// Filter.propTypes = {
//   filterValue: PropTypes.string.isRequired,
//   whenChange: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  filterValue: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  whenChangeFilter: newFilterValue => dispatch(changeFilter(newFilterValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
