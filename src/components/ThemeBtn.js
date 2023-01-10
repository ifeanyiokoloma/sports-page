import { IconButton, useTheme } from '@mui/material';
import { useContext } from 'react'
import { ColorModeContext } from '../context';
import { Brightness7, Brightness4 } from "@mui/icons-material";

const ThemeBtn = () => {
    const theme = useTheme;
    const colorMode = useContext(ColorModeContext);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7 />
      ) : (
        <Brightness4 />
      )}
    </IconButton>
  );
}

export default ThemeBtn