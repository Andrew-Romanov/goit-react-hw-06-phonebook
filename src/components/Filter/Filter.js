import { connect } from 'react-redux';
import styles from './Filter.module.scss';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const Filter = ({ filterValue, whenChangeFilter }) => {
  const handleFilter = event => {
    whenChangeFilter(event.target.value);
  };

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

const mapStateToProps = state => ({
  filterValue: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  whenChangeFilter: newFilterValue => dispatch(changeFilter(newFilterValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
