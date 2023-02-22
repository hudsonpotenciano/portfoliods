import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Languages } from './Languages'

const mockCallback = jest.fn();

describe("language change", () => {
  it("pt-br change language function called", () => {

    const { getByTestId } = render(
      <Languages changeLanguageFunc={mockCallback}></Languages>
    );

    //act
    fireEvent.click(getByTestId("pt-lang-button"));

    //assert
    expect(mockCallback).toBeCalled();
  })

  it("en-us change language function called", () => {

    const { getByTestId } = render(
      <Languages changeLanguageFunc={mockCallback}></Languages>
    );

    //act
    fireEvent.click(getByTestId("en-lang-button"));

    //assert
    expect(mockCallback).toBeCalled();
  })

})