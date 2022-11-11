import PropTypes from 'prop-types'
// import styles from '../styles/styles.module.css';

export const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
        {contacts.map(({id, name, number}) => (
                <li
                key={id} >
             <label>{`${name}: ${number}`}</label>
             <button
                    type="button"
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