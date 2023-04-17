import { Component } from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Main from "./Components/Main"
import AddContactForm from "./Components/AddContactForm";
import ModifyContactForm from "./Components/ModifyContactForm";

class AppRouter extends Component{

    componentDidMount(){
        document.title = "TravelSki - Contacts";
    }
    
    render(){
        return <div>
                <BrowserRouter>
                <Routes>
                <Route exact path="/" element = {<Main/>}/>
                <Route path="/addcontact" element = {<AddContactForm/>}/>
                <Route path="/modifycontact" element = {<ModifyContactForm/>}/>
                </Routes>
                </BrowserRouter>
                </div>
    }

}

export default AppRouter;