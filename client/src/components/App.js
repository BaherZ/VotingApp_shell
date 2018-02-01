//react imports
import React,{Component} from 'react';
import {BrowserRouter,Route,Router} from 'react-router-dom';
import GoogleButton from 'react-google-button'

//component imports
import Header from './Header';
import Layout from './Layout';
//Bootstrap and style imports
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Tab,Tabs} from 'react-bootstrap';
var styles = {
    GoogleButton:{
        display:'inline-block',
        color:'black'
    }
}

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            //POLL 
            showPollModal:false,
            pollName:'',
            pollValue:'',
            elements:[],
            //LOGIN 
            showRegModal:false,
            loginEmail:'',
            loginPassword:'',
            //SignUp
            signUpEmail:'',
            signUpPassword:'',
            userName:''     

        } 
        //Poll functions binding
        this.createPoll = this.createPoll.bind(this);        
        this.openPollModal = this.openPollModal.bind(this);
        this.closePollModal = this.closePollModal.bind(this);
        this.handlePollName = this.handlePollName.bind(this);
        this.handlePollValue = this.handlePollValue.bind(this);
        this.handleAddNewOption = this.handleAddNewOption.bind(this);
        //general regestrartion forms functions binding
        this.regModal = this.regModal.bind(this);
        this.openRegModal = this.openRegModal.bind(this);
        this.closeRegModal = this.closeRegModal.bind(this);
        //login functions binding
        this.handleLoginEmail = this.handleLoginEmail.bind(this);
        this.handleLoginPassword = this.handleLoginPassword.bind(this);
        //signup functions binding
        this.handleSignUpEmail = this.handleSignUpEmail.bind(this);
        this.handleSignUpPassword = this.handleSignUpPassword.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
    }
    //REGISTRATION FORM FUNCTIONS BEGIN
    openRegModal(){
        this.setState({showRegModal:true});
    }
    closeRegModal(){
        this.setState({showRegModal:false});
    }
    regModal(e){
        e.preventDefault();
        if(this.state.showRegModal==false)
            this.openRegModal();       
        else
            this.closeRegModal();
    }
    //SIGN UP FUNCTIONS BEGIN
    handleSignUpEmail(e){
        this.setState({signUpEmail:e.target.value});
    }
    handleSignUpPassword(e){
        this.setState({signUpPassword:e.target.value});
    }
    handleUserName(e){
        this.setState({userName:e.target.value});
    }
    //LOGIN FUNCTIONS
    handleUserName(e){
        this.setState({userName:e.target.value});
    }
    
    handleLoginEmail(e){
        this.setState({loginEmail:e.target.value});
    }
    handleLoginPassword(e){
        this.setState({loginPassword:e.target.value});
    }
    //POLL FUNCTIONS
    //when user clicks add option
    handleAddNewOption(e){
        if(this.state.pollValue!=''){
            //append option to UI option list
            var ul = document.getElementById("options");
            var li = document.createElement("li");
            var children = ul.children.length + 1;
            li.setAttribute("id", "element"+children);
            li.appendChild(document.createTextNode(this.state.pollValue));
            ul.appendChild(li);
            //append item to array state
            var telements = this.state.elements;
            telements.push(this.state.pollValue);
            this.setState({elements:telements});
            console.log(this.state.elements);
        }
        this.setState({pollValue:''});

    }
    //when user submits the form
    handleSubmit(e){

        this.setState({pollValue:'',pollName:'',elements:[]});
    }
    //when user is entering the option
    handlePollValue(e){
        this.setState({pollValue:e.target.value});
    }
    //when user is entering the poll name
    handlePollName(e){
        this.setState({pollName:e.target.value});
    }
    openPollModal(){
        this.setState({showPollModal:true});
    }
    closePollModal(){
        this.setState({showPollModal:false});
    }
    createPoll(e){
        e.preventDefault();
        if(this.state.showPollModal==false)
            this.openPollModal();       
        else
            this.closePollModal();
    }
    //POLL FUNCTIONS END
    render(){
        return(
            <div>
                <div>
                    <BrowserRouter>
                        
                        
                        <div className="container">
                            {/*POLL MODAL*/}
                            
                            {/*POLL MODAL END*/}
                            {/*REGISTRATION MODAL BEGIN*/}
                            <Modal show={this.state.showRegModal} onHide={this.closeRegModal}>
                                
                                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                        {/*LOGIN TAB BEGIN*/}
                                        <Tab eventKey={1} title="Login">
                                            <Modal.Body>
                                                <FormGroup action="/login" method="POST">
                                                    <ControlLabel>Email</ControlLabel>
                                                    <FormControl 
                                                        type="text"
                                                        value={this.state.loginEmail}
                                                        placeholder="Enter poll name"
                                                        onChange={this.handleLoginEmail}>
                                                    </FormControl>
                                                    
                                                    <ControlLabel>Password</ControlLabel>
                                                    <FormControl 
                                                        type="text"
                                                        value={this.state.loginPassword}
                                                        placeholder="Enter poll value"
                                                        onChange={this.handleLoginPassword}>
                                                    </FormControl>
                                                    
                                                </FormGroup>
                                            </Modal.Body>
                                        
                                            <Modal.Footer>
                                            <GoogleButton
                                                    type="dark"
                                                    onClick={() => {console.log("hello")}}
                                                    id="google"
                                                    style={styles.GoogleButton}/>
                                                <Button type="submit">SignIn</Button>         
                                            </Modal.Footer>
                                        </Tab>
                                        {/*SIGN UP TAB BEGIN*/}
                                        <Tab eventKey={2} title="SignUp">
                                            <Modal.Body>
                                                <FormGroup>

                                                        <ControlLabel>userName</ControlLabel>
                                                        <FormControl 
                                                            type="text"
                                                            value={this.state.userName}
                                                            placeholder="Enter poll name"
                                                            onChange={this.handleUserName}>
                                                        </FormControl>

                                                        <ControlLabel>Email</ControlLabel>
                                                        <FormControl 
                                                            type="text"
                                                            value={this.state.signUpEmail}
                                                            placeholder="Enter poll name"
                                                            onChange={this.handleSignUpEmail}>
                                                        </FormControl>
                                                        
                                                        <ControlLabel>Password</ControlLabel>
                                                        <FormControl 
                                                            type="text"
                                                            value={this.state.signUpPassword}
                                                            placeholder="Enter poll value"
                                                            onChange={this.handleSignUpPassword}>
                                                        </FormControl>                        
                                                </FormGroup>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button>SignUp</Button>
                                            </Modal.Footer>
                                        </Tab>
                                    </Tabs>                         
                            </Modal>
                            {/*REGISTRATION MODAL END*/}
                            <div className="row">
                                <div className="card">
                                    <div className="card-block">
                                        <h4 className="card-title"></h4>
                                    </div>                
                                </div>
                            </div>
                        </div>
                    </BrowserRouter>
                </div>       
            </div>
        )
    }
    
}
export default App;