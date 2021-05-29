import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'

//test testcase
it('fake test',() =>{
    expect(true).toBeTruthy()
})

//checking the component is loading without crashing
it('renders without crashing',() =>{
    const div = document.createElement('div')
    ReactDOM.render(<NavBar/>,div)
})