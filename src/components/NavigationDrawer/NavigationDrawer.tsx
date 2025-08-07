// hooks
import { useTranslation } from "react-i18next";
import useNavBar from "../../hooks/useNavBar";

// components
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";

// type
import { NavigationDrawerType } from './NavigationDrawer.type'

const NavigationDrawer: React.FC<NavigationDrawerType> = (props) => {

    const { t } = useTranslation()
    const { open, onClose, navItems, children, sectionRefs } = props

    const { handleNavClick } = useNavBar()

    return (
        <Drawer
            open={open}
            onClose={onClose}
            slotProps={{
                paper: {
                    sx: {
                        backgroundColor: '#D4A373'
                    }
                }
            }}
        >
            <List sx={{ color: 'black' }}>
                {navItems.map((item) => {
                    return (
                        <ListItem>
                            <ListItemButton
                                onClick={() => { handleNavClick(item, sectionRefs[item]?.current || null) }}
                                sx={{
                                    borderRadius: '8px'
                                }}
                            >
                                <ListItemText sx={{ textAlign: 'center' }}>{t(item)}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
            {children && (
                <List sx={{ color: 'black' }}>
                    {children}
                </List>
            )}
        </Drawer>
    )
}

export default NavigationDrawer