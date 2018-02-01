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
{/*SIGN UP TAB BEGIN*/}
<Modal>
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
</Modal>