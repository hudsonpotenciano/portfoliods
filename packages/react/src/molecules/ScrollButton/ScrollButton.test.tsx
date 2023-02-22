import Constants from '@portfoliods/foundation/src/Constants';
import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import { ScrollButton } from './ScrollButton'

const mockCallback = jest.fn();

it("scroll button click is calling scroll page function", () => {

  const { getByTestId } = render(
    <ScrollButton onclick={mockCallback}></ScrollButton>
  );

  //act
  fireEvent.click(getByTestId("scrollbutton-test"));

  //assert
  expect(mockCallback).toBeCalled();
})
