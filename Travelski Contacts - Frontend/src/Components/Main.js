import { Component } from "react";
import "../Styles/styles.css";
import ContactCard from "./ContactCard";
import myAjax from "../AJAX";
import plus from "../Pictures/plus.PNG";
import { useNavigate } from 'react-router-dom';

// A component function for the add contact plus image
function PlusImg() {
    const nav = useNavigate();
    return (
        <img className="plus" src = { plus } onClick = { () => nav('/addcontact')}/>
    );
  }

class Main extends Component{

    constructor(){
        super()
        this.getAllContacts = this.getAllContacts.bind(this);
        this.state = {
            contacts: []
        }
    }


    getAllContacts(){
        myAjax.AjaxGetAllContacts().then(data => {
            let elementsArr = [];
            data.forEach((contactObj, index) => {
                elementsArr.push(<ContactCard
                    key = { index }
                    Id = { contactObj.id }
                    name = { contactObj.name }
                    role = { contactObj.role }
                    location = { contactObj.location }
                    image = { contactObj.image }
                    address = { contactObj.address }
                    state = { contactObj.state }
                    company = { contactObj.company }
                    phone = { contactObj.phone } />);
            });
            this.setState({contacts: elementsArr});
        }).catch(error => console.log(error));
    }

    componentDidMount(){
        this.getAllContacts();
    }

    render(){
        return <div id="allCards">
                { this.state.contacts }
                <div id="plusContainer">
                    <PlusImg />
                </div>
            </div>
    }
}

export default Main;