import { Component } from "react";
import "../Styles/styles.css";
import myAjax from "../AJAX";
import extensionMethods from "../ExtensionMethods";


class AddContactForm extends Component{

    constructor(){
        super()
        this.addContact = this.addContact.bind(this);
    }

    async addContact(event) {
        event.preventDefault();
        const phoneNumber = event.target.elements.input7.value;
        if (extensionMethods.validatePhone(phoneNumber)) {
            const contactObj = {
                "name": event.target.elements.input1.value,
                "role": event.target.elements.input2.value,
                "location": event.target.elements.input3.value,
                "company": event.target.elements.input4.value,
                "address": event.target.elements.input5.value,
                "state": event.target.elements.input6.value,
                "phone": phoneNumber
            }
            await myAjax.AjaxAddContact(contactObj);
            alert("New contact successfully added!");
            window.location.href = "/";
        }
        else
            alert("Phone number invalid. Please make sure only numbers or the '( ) +' signs are provided");
    }

    render(){
        return (
            <div>
                <h1 id="addHeadline"> Add a new contact </h1>
                <form className="addForm" onSubmit={ this.addContact }>
                    <input id="input1" type="text" required placeholder="New contact's name"/>
                    <input id="input2" type="text" required placeholder="New contact's role"/>
                    <input id="input3" type="text" required placeholder="New contact's location"/>
                    <input id="input4" type="text" required placeholder="New contact's company"/>
                    <input id="input5" type="text" required placeholder="New contact's address"/>
                    <input id="input6" type="text" required placeholder="New contact's state"/>
                    <input id="input7" type="text" required placeholder="New contact's phone"/>
                    <button id="addButton" type="submit">Send</button>
                </form>
            </div>);
    }

}

export default AddContactForm;