const basis = {
  shadow: 'rgba(2,12,27,0.7)',
  breakpoint: {
    s: 480,
    m: 768,
    l: 992,
  },
  borderRadius: 4,
}
export const lightTheme = {
  ...basis,
  body: '#fff',
  text: '#0a192f',
  toggleBorder: '#FFF',
  background: '#fff',
  main: '#01bf71',
  mainBackground: '#80DFB8',
  mainLight: '#80DFB8',
  shadow: 'rgba(2,12,27,0.7)',
}
export const darkTheme = {
  ...basis,
  body: '#0a192f',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#0a192f',
  main: '#01bf71',
  mainBackground: '#008950',
  mainLight: '#80DFB8',
  shadow: 'rgba(150, 200, 150,0.7)',
}
