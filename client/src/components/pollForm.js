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
<Header createPoll={this.createPoll} regModal={this.regModal}/>
{/*POLL MODAL*/}
<Modal show={this.state.showPollModal} onHide={this.closePollModal}>
<Modal.Header>
    <Modal.Title>Create your Poll!</Modal.Title>
</Modal.Header>
<Modal.Body>
    <FormGroup>
        <ControlLabel>Poll Name:</ControlLabel>
        <FormControl 
            type="text"
            value={this.state.pollName}
            placeholder="Enter poll name"
            onChange={this.handlePollName}>
        </FormControl>

        <ControlLabel>Poll values:</ControlLabel>
        <FormControl 
            type="text"
            value={this.state.pollValue}
            placeholder="Enter poll value"
            onChange={this.handlePollValue}>
        </FormControl>
        
    </FormGroup>
    <fieldset>
        <legend>Options</legend>
        <ul id="options"></ul>
    </fieldset>
</Modal.Body>
<Modal.Footer>
        <ButtonToolbar>
            <Button
                onClick={this.closePollModal}>Close</Button>
            <Button
                bsStyle="primary"
                onClick={this.handleAddNewOption}>
            Add option
            </Button>
            <Button
                type="submit"
                bsStyle="primary">
            submit
            </Button>
        </ButtonToolbar>
</Modal.Footer>
</Modal>