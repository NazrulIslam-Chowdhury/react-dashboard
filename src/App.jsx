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
import Form from './scenes/form';
import Calendar from './scenes/calendar';
import Faq from './scenes/faq';
import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Line from './scenes/line';

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
              <Route path='/form' element={<Form />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/faq' element={<Faq />} />
              <Route path='/geography' element={<Dashboard />} />
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
