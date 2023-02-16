import Constants from '@portfoliods/foundation/src/Constants';
import React, { Component, useEffect } from 'react'
import { DarkThemeButton } from './DarkThemeButton'
import { LightThemeButton } from './LightThemeButton'

export class ThemeControl extends Component<{}, { selectedTheme?: string }> {

    componentDidMount(): void {
        const localStorageData = localStorage.getItem(Constants.ThemeKey);

        const selectedTheme =
            localStorageData === Constants.Themes.dark ? Constants.Themes.dark
                : localStorageData === Constants.Themes.light ? Constants.Themes.light : Constants.Themes.light;

        this.setState({
            selectedTheme: selectedTheme
        })

        this.changeTheme(selectedTheme);
    }

    changeTheme(theme: string) {
        document.documentElement.className = "theme-" + theme;
    }

    mountDarkButton() {
        if (this.state?.selectedTheme == Constants.Themes.dark) {
            return <div onClick={() => {
                this.setState({ selectedTheme: "light" })
                localStorage.setItem(Constants.ThemeKey, Constants.Themes.light);
                this.changeTheme(Constants.Themes.light);
            }}><LightThemeButton></LightThemeButton></div>
        }
    }
    mountLightButton() {
        if (this.state?.selectedTheme == Constants.Themes.light) {
            return <div onClick={() => {
                this.setState({ selectedTheme: "dark" })
                localStorage.setItem(Constants.ThemeKey, Constants.Themes.dark);
                this.changeTheme(Constants.Themes.dark);
            }}><DarkThemeButton></DarkThemeButton></div>
        }
    }

    render() {

        return (
            <div className='portfoliods-themecontrol'>
                <div className='portfoliods-themecontrol-line'></div>
                {this.mountDarkButton()}
                {this.mountLightButton()}
            </div>
        )
    }
}