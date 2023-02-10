import React, { Component } from 'react'
import { DarkThemeButton } from './DarkThemeButton'
import { LightThemeButton } from './LightThemeButton'

const themes = {
    dark: "dark",
    light: "light",
}

export class ThemeControl extends Component<{}, { selectedTheme?: keyof typeof themes }> {

    componentDidMount(): void {
        this.setState({
            selectedTheme: "dark"
        })
    }

    componentDidUpdate() {
        document.documentElement.className = "theme-" + this.state.selectedTheme;
    }

    mountDarkButton() {
        if (this.state?.selectedTheme == themes.dark) {
            return <div onClick={() => {
                this.setState({ selectedTheme: "light" })
            }}><LightThemeButton></LightThemeButton></div>
        }
    }
    mountLightButton() {
        if (this.state?.selectedTheme == themes.light) {
            return <div onClick={() => {
                this.setState({ selectedTheme: "dark" })
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