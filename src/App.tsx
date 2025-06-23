// hooks
import { useTranslation } from "react-i18next";
import useBreakPoint from "./hooks/useBreakpoint";

// components
import {
  Box,
  Grid,
  Typography,
  Button
} from "@mui/material";
import NavBar from './components/navBar/navBar'
import HeroSection from "./components/section/heroSection";

// data
import { navItems } from './data/navItems'

const App = () => {

  const { t } = useTranslation()
  const { isTablet, isMobile } = useBreakPoint()

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
            <Box className="Portfolio" component={'section'} sx={{ height: '100vh', position: 'relative' }}>

            </Box>
          </Box>
        </Grid>
        <Grid size={12}>
          <Box component={'footer'} sx={{ height: 60 }}>
            Footer
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
}

export default App;
