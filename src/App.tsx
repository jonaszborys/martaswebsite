import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className='app'>
        <Header />
        <main className='app__main'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
