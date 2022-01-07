const basis = {
  shadow: 'rgba(2,12,27,0.7)',
  breakpoint: {
    s: 480,
    m: 768,
    l: 992,
    xl: 1200,
  },
  borderRadius: 4,
  main: '#00a07f',
}
export const lightTheme = {
  ...basis,
  body: '#fff',
  text: '#0a192f',
  toggleBorder: '#FFF',
  background: '#fff',
  mainBackground: '#80DFB8',
  mainLight: '#80DFB8',
}
export const darkTheme = {
  ...basis,
  body: '#0a192f',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#0a192f',
  mainBackground: '#00a07f',
  mainLight: '#6F8C80',
}
