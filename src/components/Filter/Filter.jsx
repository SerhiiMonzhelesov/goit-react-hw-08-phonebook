import PropTypes from 'prop-types';

function Filter({ handleChangeFilter }) {
  return (
    <label className="filter-label">
      Find contacts by name
      <input
        type="text"
        onChange={handleChangeFilter}
        className="filter-input"
      ></input>
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
};
