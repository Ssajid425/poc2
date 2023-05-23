
import { createTheme } from '@mui/material/styles';

const arcWhite = "#FFFFFF";
const arcLight = "#FBFCFD";
const darkBlue = "#1353A1";
const paleBlue = "#B4C5D7";
export default createTheme({
    palette:{
        common:{
          white: `${arcWhite}`,
          lightPalle :`${arcLight}`  
        },
        primary :{
            main:`${arcLight}`,
            blue:`${darkBlue}`
        },
        secondary :{
            main:`${paleBlue}`
        }
    },
    typography: {
        tab:{
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            color:"#ffffff",
            fontSize:"1rem"
        },
        estimate:{
            fontFamily : "pacifico",
            fontSize : "1rem",
            textTransform:"none",
            color:"white"
        }
    }
}
)