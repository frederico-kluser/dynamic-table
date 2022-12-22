import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Button, createTheme, CssBaseline, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';
import { useMemo, useState } from 'react';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode? 'dark' : 'light');

  const handleClick = () => setMode(mode === 'dark'? 'light' : 'dark');

  console.log('mode :', mode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode, prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" onClick={handleClick}>Hello World</Button>
    </ThemeProvider>
  )
}

export default App
