import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { DarkMode, LightMode } from '@mui/icons-material';

import { Button, createTheme, CssBaseline, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';
import { useMemo, useState } from 'react';
import EnhancedTable from './component/Table';

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
      <Button variant="contained" onClick={handleClick}>
        { mode === 'light' ? <LightMode /> : <DarkMode />}
      </Button>
      <EnhancedTable />
    </ThemeProvider>
  )
}

export default App
