import PropTypes from 'prop-types'

export const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <ul
        style={{
            margin:"10px",
            textAlign: "left",
            color: "rgba(174,183,227,1)",
        }}>
        {contacts.map(({id, name, number}) => (
                <li
                key={id} >
             <label>{`${name}: ${number}`}</label>
             <button
                    type="button"
                    style={{
                    width:"auto",
                    marginLeft: "10px",
                    textAlign: "right",
                    height:"16px",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "30%",
                    padding: 0,
                    color: "rgba(174,183,37,1)",
                    boxShadow: "0px 0px 5px 2px rgba(174,183,227,1)",
                    }}

                    onClick={() => onDeleteContact(id)}
                    >Delete
              </button>
           </li>
           ))}
        </ul>  
    )}
    
  ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired),
  onDeleteContact: PropTypes.func.isRequired,
};