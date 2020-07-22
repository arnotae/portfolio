const { ThemeManager, Theme } = require('tailwindcss-theming/api');

const base = new Theme()
  .setDefault()
  .targetable()
  .setName('light')
  .addColors({
    primary: '#FFF',
    'on-primary': '#2900d8',
    secondary: '#fd565c',
    'on-secondary': '#fd565c',
    inverse: '#2900d8',
    'on-inverse': '#FFF',
    back: '#FFF',
    'on-back': '#2900d8',
  });

const dark = new Theme()
  .setName('dark')
  .addColors({
    primary: '#e6e6e6',
    'on-primary': '#120061',
    secondary: '#fd565c',
    'on-secondary': '#fd565c',
    inverse: '#120061',
    'on-inverse': '#e6e6e6',
    back: '#2500C2',
    'on-back': '#e6e6e6',
  });

module.exports = new ThemeManager()
  .asDataThemeAttributes()
  .setDefaultTheme(base)
  .setDefaultDarkTheme(dark);
