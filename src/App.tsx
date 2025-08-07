// components
import {
  Box,
  Grid,
  Divider,
} from "@mui/material";
import NavBar from './components/NavBar/NavBar'
import HeroSection from "./components/Section/HeroSection";
import PortfolioSection from "./components/Section/PortfolioSection";
import AboutSection from "./components/Section/AboutSection";
import ServicesSection from './components/Section/ServicesSection'
import ContactSection from './components/Section/ContactSection'
import { useRef } from "react";
import ScrollButton from "./components/ScrollButton/ScrollButton";

// data
import { navItems } from './data/navItems'

// style
import './assets/style/root.sass'

// hooks
import useNavBar from "./hooks/useNavBar";

const App = () => {

  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    About: useRef<HTMLElement | null>(null),
    Portfolio: useRef<HTMLElement | null>(null),
    Services: useRef<HTMLElement | null>(null),
    Contact: useRef<HTMLElement | null>(null),
    Home: useRef<HTMLElement | null>(null)
  }


  const { handleNavClick } = useNavBar()

  return (
    <Box>
      <Grid container size={12}>
        <Grid size={12}>
          <Box component={'header'}>
            <NavBar navItems={navItems} sectionRefs={sectionRefs} />
          </Box>
        </Grid>
        <Grid size={12}>
          <Box component={'main'} sx={{ mt: { xs: 7, sm: 8 } }}>
            <HeroSection ref={sectionRefs.Home} />

            <PortfolioSection ref={sectionRefs.Portfolio} />

            <AboutSection ref={sectionRefs.About} />

            <Divider variant='middle' sx={{ background: '#D4A373' }} />

            <ServicesSection ref={sectionRefs.Services} />

            <ContactSection ref={sectionRefs.Contact} />

          </Box>
        </Grid>
        <Grid size={12} mt={6}>
          <Box component={'footer'} sx={{ height: 60 }} textAlign={'center'}>
            Copyright © 2025. All rights reserved.
          </Box>
        </Grid>

        <ScrollButton onClick={() => handleNavClick('Home', sectionRefs.Home?.current || null)} />

      </Grid>

    </Box >
  );
}

export default App;
