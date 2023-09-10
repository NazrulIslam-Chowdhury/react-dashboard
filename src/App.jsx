import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css'
import { ColorModeContext, useMode } from './theme'
import Topbar from './scenes/global/Topbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import SidebarMenu from './scenes/global/SidebarMenu';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <SidebarMenu />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Dashboard />} />
              <Route path='/bar' element={<Dashboard />} />
              <Route path='/pie' element={<Dashboard />} />
              <Route path='/line' element={<Dashboard />} />
              <Route path='/faq' element={<Dashboard />} />
              <Route path='/geography' element={<Dashboard />} />
              <Route path='/calendar' element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
