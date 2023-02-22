import Constants from '@portfoliods/foundation/src/Constants';
import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import { ThemeControl } from './ThemeControl'

describe("html class is change when click light or dark theme button", () => {

  it("html class theme changed to dark", () => {

    const { container, getByTestId } = render(
      <ThemeControl></ThemeControl>
    );

    //arrange
    const darkThemeClassName = "theme-" + Constants.Themes.dark;

    //act
    fireEvent.click(getByTestId("darkthemebutton-test"));

    //assert
    const htmlElementClassName = container.parentElement?.parentElement?.className;
    expect(htmlElementClassName).toBe(darkThemeClassName);
  })

  it("html class theme changed to light", () => {

    const { container, getByTestId } = render(
      <ThemeControl></ThemeControl>
    );

    //arrange
    const lightThemeClassName = "theme-" + Constants.Themes.light;

    //act
    fireEvent.click(getByTestId("lightthemebutton-test"));

    //assert
    const htmlElementClassName = container.parentElement?.parentElement?.className;
    expect(htmlElementClassName).toBe(lightThemeClassName);
  })
})
