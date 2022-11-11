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

    reset = () => {
      this.setState ({ name: '', number: ''});
    };
  
    handleSubmit = evt => {
      evt.preventDefault();
      const { name, number } = this.state;
      // console.log(`name: ${name}, number: ${number}`);
      this.props.onSubmit({ name, number });
      this.reset();
    };
    
    // handleClear = () =>  {
    //   this.preventDefault()
    //   this.setState ({ name: '', number: '',});
    // }

    // handleClear = (evt) => {
    //   evt.preventDefault()
    //   this.current.value = ''
    // }
  
      
    render() {
      const { name, number } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>

            <p>Name</p>
        <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
            <p>Phone number</p>
        <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required/>
        <button 
                type="submit">Add contact</button>
        </form>
      );
    }
  }

  Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };