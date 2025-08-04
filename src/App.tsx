// components
import {
  Box,
  Grid,
  Divider
} from "@mui/material";
import NavBar from './components/NavBar/NavBar'
import HeroSection from "./components/Section/HeroSection";
import PortfolioSection from "./components/Section/PortfolioSection";
import AboutSection from "./components/Section/AboutSection";
import ServicesSection from './components/Section/ServicesSection'
import ContactSection from './components/Section/ContactSection'

// data
import { navItems } from './data/navItems'

const App = () => {
  return (
    <Box>
      <Grid container size={12}>
        <Grid size={12}>
          <Box component={'header'}>
            <NavBar navItems={navItems} />
          </Box>
        </Grid>
        <Grid size={12}>
          <Box component={'main'} sx={{ mt: { xs: 7, sm: 8 } }}>
            <HeroSection />

            <PortfolioSection />

            <AboutSection />

            <Divider variant='middle' sx={{ background: '#D4A373' }} />

            <ServicesSection />

            <ContactSection />

          </Box>
        </Grid>
        <Grid size={12} mt={6}>
          <Box component={'footer'} sx={{ height: 60 }} textAlign={'center'}>
            Copyright © 2025. All rights reserved.
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
}

export default App;
