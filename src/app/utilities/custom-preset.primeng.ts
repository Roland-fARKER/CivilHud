import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';

const customPreset = definePreset(Lara, {
  semantic: {
    primary: {
      50: '#EAF6E3',
      100: '#DEF1D3',
      200: '#C7E7B4',
      300: '#B0DE95',
      400: '#99D476',
      500: '#82CA57',
      600: '#65B138',
      700: '#4D862A',
      800: '#345C1D',
      900: '#1C310F',
      950: '#101C09',
    },
  },
});

export default customPreset;