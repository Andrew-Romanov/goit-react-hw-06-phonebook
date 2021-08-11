import styles from './Filter.module.scss';
import PropTypes from 'prop-types';

const Filter = ({ filterValue, whenChange }) => {
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
        onChange={whenChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  whenChange: PropTypes.func.isRequired,
};

export default Filter;
