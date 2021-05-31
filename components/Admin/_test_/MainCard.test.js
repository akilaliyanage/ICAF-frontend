import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react';
import MainCard from '../MainCard';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import expectExport from 'expect';



afterEach(()=>cleanup());

it('create a snapshot of MainCard', () =>{
    const tree = renderer.create(
        <MainCard/>
    ).toJSON();
  
    expectExport(tree).toMatchSnapshot();
  })

test('Make sure Add button is there', () => {
    render(<MainCard />);
  
    screen.debug();
  
    expect(screen.getByText('Updates are Pending')).toBeInTheDocument();
  });

