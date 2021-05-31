import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';
import ReviewersCard from '../ReviewersCard';



afterEach(()=>cleanup())


it('create a snapshot of Reviewers card', () =>{
    const tree = renderer.create(
        <ReviewersCard/>
    ).toJSON();

    expectExport(tree).toMatchSnapshot();
})


//Rendering Admin Navigation Bar
test('Make sure Add button is there', () => {
    render(<ReviewersCard />);
  
    screen.debug();
  
    expect(screen.getByText('Add new')).toBeInTheDocument();
  });