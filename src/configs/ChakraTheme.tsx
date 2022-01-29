import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakPoints = createBreakpoints({
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '960px',
    xl: '1024px',
    '2xl': '1200px',
    '3xl': '1400px'
});

const ChakraTheme = {
    styles: {
        global: {
            'html, body': {
                backgroundColor: 'white',
                color: '#56565A',
                fontFamily: 'Montserrat'
            }
        }
    },
    fonts: {
        heading: 'Yu gothic',
        body: 'Yu gothic'
    },
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '30px',
        '5xl': '36px',
        '6xl': '60px'
    },
    colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#ffffff',
        lightGray: '#F6F6F7',
        blue: {
            100: '#b7fbfb',
            500: '#45E3FF'
        }
    },
    breakPoints
};

export default ChakraTheme;
