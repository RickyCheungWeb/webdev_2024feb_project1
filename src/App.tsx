import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '@/scences/navbar';
import Home from '@/scences/home';
import About from '@/scences/about';
import Connect from '@/scences/connect';
import ContactUs from '@/scences/contactUs';
import Footer from '@/scences/footer';
import { useEffect, useState } from 'react';
import { SelectedPage } from './shared/types';
import AboutMain from '@/pages/about/AboutMain';
import Beliefs from '@/pages/about/beliefs/index';
import Vision from '@/pages/about/vision';
import ServicesMain from '@/pages/churchservices/ServicesMain';
import ChineseMain from '@/pages/chinese/ChineseMain';
import ChineseIntro from '@/pages/chinese/chineseintro';
import ResourcesMain from '@/pages/churchresources/ResourcesMain';
import Sermons from '@/pages/churchresources/sermons';
import EightAm from '@/pages/churchservices/eightam';
import TenAm from '@/pages/churchservices/tenam';
import SixPm from '@/pages/churchservices/sixpm';
import ContactUsMain from '@/pages/contactus/ContactUsMain';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=' bg-gray-20'>
      <BrowserRouter>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Home setSelectedPage={setSelectedPage} />
                <About setSelectedPage={setSelectedPage} />
                <Connect setSelectedPage={setSelectedPage} />
                <ContactUs setSelectedPage={setSelectedPage} />
              </>
            }
          />
          <Route path='/aboutmain'>
            <Route
              path='/aboutmain'
              element={<AboutMain setSelectedPage={setSelectedPage} />}
            />
            <Route
              path='/aboutmain/beliefs'
              element={<Beliefs setSelectedPage={setSelectedPage} />}
            />
            <Route
              path='/aboutmain/vision'
              element={<Vision setSelectedPage={setSelectedPage} />}
            />
          </Route>

          {/* SERVICES */}
          <Route path='servicesmain'>
            <Route
              path='/servicesmain'
              element={<ServicesMain setSelectedPage={setSelectedPage} />}
            />
            <Route
              path='/servicesmain/eightam'
              element={<EightAm setSelectedPage={setSelectedPage} />}
            />
            <Route
              path='/servicesmain/tenam'
              element={<TenAm setSelectedPage={setSelectedPage} />}
            />
            <Route
              path='/servicesmain/sixpm'
              element={<SixPm setSelectedPage={setSelectedPage} />}
            />
          </Route>

          {/* CHINESE */}
          <Route path='/chinesemain'>
            <Route
              path='/chinesemain'
              element={<ChineseMain setSelectedPage={setSelectedPage} />}
            />
            <Route
              path='/chinesemain/chineseintro'
              element={<ChineseIntro setSelectedPage={setSelectedPage} />}
            />
          </Route>
          <Route path='/resourcesmain'>
            <Route
              path='/resourcesmain'
              element={<ResourcesMain setSelectedPage={setSelectedPage} />}
            />
            <Route
              path='/resourcesmain/sermons'
              element={<Sermons setSelectedPage={setSelectedPage} />}
            />
          </Route>

          <Route
            path='/contactusmain'
            element={<ContactUsMain setSelectedPage={setSelectedPage} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
