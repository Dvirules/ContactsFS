import { Component } from "react";
import "../Styles/styles.css";
import Location from "../Pictures/Location.PNG";
import Bin from "../Pictures/Bin.PNG";
import Pencil from "../Pictures/Pencil.PNG";
import { useNavigate } from 'react-router-dom';
import myAjax from "../AJAX";


function PencilImg(props) {
    const nav = useNavigate();
    return (
        <img className="clickableImg" src = { Pencil } onClick = { () => nav('/modifycontact', {state: {name: props.name, id: props.Id}})}/>
    );
  }

class ContactCard extends Component{

    constructor(props){
        super(props)
        this.deleteContact = this.deleteContact.bind(this);
        this.state = {
            id: this.props.Id,
        }
    }

    async deleteContact(id){
        await myAjax.AjaxDeleteContact(id);
        window.location.href = "/";
    }

    render(){
        const image = require(`../Pictures/${this.props.image}`);
        return <div className="card">
                <div className="cardImgContainer">
                    <img src = { image } className="cardImgPic" />
                    <span> { this.props.role } </span>
                </div>

                <div className="cardDetails">
                    <h3> { this.props.name } </h3>
                    <img src = { Location } className = "location"/>
                    <span> { this.props.location } </span>
                    <br/> <br/>
                    <span> { this.props.company } </span>
                    <br/>
                    <span> { this.props.address } </span>
                    <br/>
                    <span> { this.props.state } </span>
                    <br/>
                    <span> { this.props.phone } </span>
                </div>

                <div className="buttons">
                    <PencilImg name = { this.props.name } Id = { this.state.id }/>
                    <img src = { Bin } className = "clickableImg" onClick = { () => this.deleteContact(this.state.id) } />
                </div>
            </div>
    }

}

export default ContactCard;