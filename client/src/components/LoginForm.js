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

<Modal show={this.state.showRegModal} onHide={this.closeRegModal}>
                                
                                        {/*LOGIN TAB BEGIN*/}
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
                                        
</Modal>
