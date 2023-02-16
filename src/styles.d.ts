import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      button: string
      placeholder: string
      Title: string
    }
    font: {
      default: string
    }
    sizes: {
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    media: {
      lteMedium: string
    }
  }
}