import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import NavBar from '../NavBar'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

//test testcase
it('fake test',() =>{
    expect(true).toBeTruthy()
})

//checking the component is loading without crashing
it('renders without crashing',() =>{
    const div = document.createElement('div')
    const navbar_items  = [{url : 'kbcsd',item : 'cdc',_id : 'dads'}];
    ReactDOM.render(
            <BrowserRouter>
                <NavBar items={navbar_items} />
            </BrowserRouter>
    ,div)

})