import PropTypes from 'prop-types';
// import styles from '../styles/styles.module.css';

export const Filter = ({value, onChange}) => {
    return(
        <label>
            <p>Find contact by name</p>
            <input 
            type="text" 
            value={value}
            onChange={onChange}
            ></input>
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };