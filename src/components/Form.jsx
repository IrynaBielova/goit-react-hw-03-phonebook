import { Component } from "react";
import PropTypes from 'prop-types'

export class Form extends Component {
    state = {    
        name: '',
        number: '',
    }

    handleChange = evt => {
      const { name, value } = evt.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = evt => {
      evt.preventDefault();
      const { name, number } = this.state;
      console.log(`Login: ${name}, Email: ${number}`);
      this.props.onSubmit({ ...this.state });
      this.reset();
    };
  
    reset = () => {
      this.setState ({ name: '', number: '',});
    };
  
    render() {
      
      return (
        <form 
        style={{
            display: "flex",
            flexDirection: "column",
            width: "100hw",
            margin: "7px",
            textAlign: "center",
            paddingTop: "6px",
            paddingBottom: "6px",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px 2px rgba(174,183,227,1)",
        }}

        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        >

            <p 
            style={{
                marginBottom: "10px",
                color: "rgba(174,183,227,1)"
              }}>Name</p>
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            style={{
                marginRight: "auto",
                marginLeft: "auto",
                textAlign: "center",
                width: "200px",
                border: "none",
                borderRadius: "10px",
                color: "rgba(174,183,37,1)",
                boxShadow: "0px 0px 5px 2px rgba(174,183,227,1)",
              }}
            />
            <p
            style={{
                marginBottom: "10px",
                color: "rgba(174,183,227,1)"
              }}>Phone number</p>
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            style={{
                marginRight: "auto",
                marginLeft: "auto",
                textAlign: "center",
                width: "200px",
                border: "none",
                borderRadius: "10px",
                color: "rgba(174,183,37,1)",
                boxShadow: "0px 0px 5px 2px rgba(174,183,227,1)",
                marginBottom: "20px",
              }}
            />
        <button
                type="submit"
                style={{
                    width: "10vw",
                    marginRight: "auto",
                    marginLeft: "auto",
                    textAlign: "center",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "10px",
                    color: "rgba(174,183,37,1)",
                    boxShadow: "0px 0px 5px 2px rgba(174,183,227,1)",
                }}>Add contact
        </button>
        </form>
      );
    }
  }

  Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };