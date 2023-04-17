import { Component } from "react";
import "../Styles/styles.css";
import myAjax from "../AJAX";
import extensionMethods from "../ExtensionMethods";
import { useLocation } from 'react-router-dom';

let idToModify = 0;

function ModificationTitle() {
    const location = useLocation();
    idToModify = location.state.id;
    return (
        <div>
            <h1 id="addHeadline"> Modify contact ID { idToModify }: </h1>
            <h2 id="nameToModify">{ location.state.name }</h2>
        </div>
    );
  }

class ModifyContactForm extends Component{

    constructor(){
        super()
        this.modifyContact = this.modifyContact.bind(this);
    }

    async modifyContact(event) {
        event.preventDefault();
        const phoneNumber = event.target.elements.input7.value;
        if (phoneNumber.length === 0 || extensionMethods.validatePhone(phoneNumber)) {
            const contactObj = {
                "name": event.target.elements.input1.value,
                "role": event.target.elements.input2.value,
                "location": event.target.elements.input3.value,
                "company": event.target.elements.input4.value,
                "address": event.target.elements.input5.value,
                "state": event.target.elements.input6.value,
                "phone": phoneNumber
            }
            await myAjax.AjaxModifyContact(contactObj, idToModify);
            alert("Chosen contact successfully modified!");
            window.location.href = "/";
        }
        else
            alert("Phone number invalid. Please make sure only numbers or the '( ) +' signs are provided");
    }

    render(){
        return (
            <div>
                <ModificationTitle />
                <form className="addForm" onSubmit={ this.modifyContact }>
                    <input id="input1" type="text" placeholder="Name to modify to"/>
                    <input id="input2" type="text" placeholder="Role to modify to"/>
                    <input id="input3" type="text" placeholder="Location to modify to"/>
                    <input id="input4" type="text" placeholder="Company to modify to"/>
                    <input id="input5" type="text" placeholder="Address to modify to"/>
                    <input id="input6" type="text" placeholder="State to modify to"/>
                    <input id="input7" type="text" placeholder="Phone to modify to"/>
                    <button id="addButton" type="submit">Send</button>
                </form>
            </div>);
    }

}

export default ModifyContactForm;