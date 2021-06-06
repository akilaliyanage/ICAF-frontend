import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import AdminNavBar from '../AdminNavBar'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';



afterEach(()=>cleanup())

it('create a snapshot of Admin Nav Bar', () =>{
  const tree = renderer.create(
      <AdminNavBar/>
  ).toJSON();

  expectExport(tree).toMatchSnapshot();
})


//Rendering Admin Navigation Bar
test('Render Admin Nav Bar', () => {
    render(<AdminNavBar />);
  
    screen.debug();
  
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

