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
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";

// icons
import { Menu } from "@mui/icons-material";

// type
import { NavBarType } from "./NavBar.type";
import i18n from "../../i18n";

const NavBar: React.FC<NavBarType> = (props) => {

    const { navItems, sectionRefs } = props
    const { t } = useTranslation()

    const {
        isActive,
        isLoading,
        handleActive,
        handleLangChange,
        handleNavClick
    } = useNavBar()

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
                            <Button
                                key={item}
                                color="inherit"
                                size="large"
                                onClick={() => handleNavClick(item, sectionRefs[item]?.current || null)}
                            >
                                {t(item)}
                            </Button>
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
                        {i18n.language === 'en-US' ? '中' : 'en'}
                    </Button>
                </Box>
            </Toolbar>
            <NavigationDrawer
                open={isActive}
                onClose={handleActive}
                navItems={navItems}
                sectionRefs={sectionRefs}
            >
                <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
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
                        {i18n.language === 'en-US' ? '中' : 'en'}
                    </Button>
                </ListItem>
            </NavigationDrawer>
        </AppBar>
    )
}

export default NavBar