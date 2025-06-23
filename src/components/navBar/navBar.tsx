// hooks
import useNavBar from "../../hooks/useNavBar";
import { useTranslation } from "react-i18next";

// components
import {
    Box,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Typography,
    ListItem,
    CircularProgress
} from "@mui/material";
import NavDrawer from "../navDrawer/navDrawer";

// icons
import { Menu } from "@mui/icons-material";

// type
import { NavBarType } from "./navBar.type";
import i18n from "../../i18n";

const NavBar: React.FC<NavBarType> = (props) => {

    const { navItems } = props
    const { t } = useTranslation()

    const { isActive, isLoading, handleActive, handleLangChange } = useNavBar()

    return (
        <AppBar component={'nav'}>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'black',
                    color: '#D4A373'
                }}
            >
                <IconButton
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                    onClick={handleActive}
                >
                    <Menu
                        fontSize="large"
                        color='primary'
                    />
                </IconButton>
                <Typography variant="h6">LOGO</Typography>
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },
                    gap: { sm: 1, md: 4, lg: 6 }
                }}
                >
                    {navItems.map((item) => {
                        return (
                            <Button key={item} color="inherit" size="large">{t(item)}</Button>
                        )
                    })}
                    <Button
                        color="inherit"
                        size="large"
                        variant="outlined"
                        onClick={handleLangChange}
                        loading={isLoading}
                        loadingIndicator={
                            <CircularProgress
                                size={20}
                                sx={{ color: '#D4A373' }}
                                thickness={5}
                            />
                        }
                    >
                        {i18n.language === 'en' ? '中' : 'en'}
                    </Button>
                </Box>
            </Toolbar>
            <NavDrawer open={isActive} onClose={handleActive} navItems={navItems}>
                <ListItem>
                    <Button
                        color="inherit"
                        size="large"
                        variant="outlined"
                        onClick={handleLangChange}
                        loading={isLoading}
                        loadingIndicator={
                            <CircularProgress
                                size={20}
                                sx={{ color: 'black' }}
                                thickness={5}
                            />
                        }
                    >
                        {i18n.language === 'en' ? '中' : 'en'}
                    </Button>
                </ListItem>
            </NavDrawer>
        </AppBar>
    )
}

export default NavBar