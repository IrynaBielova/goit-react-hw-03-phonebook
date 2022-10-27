import PropTypes from 'prop-types';

export const Filter = ({value, onChange}) => {
    return(
        <label
        style={{
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
            width: "200px",
            marginBottom: "20px",
          }}>
            <p
             style={{
                marginBottom: "10px",
                color: "rgba(174,183,227,1)"
              }}>Find contact by name</p>
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