// hooks
import { useTranslation } from "react-i18next";

// components
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";

// type
import { NavDrawerType } from './navDrawer.type'

const NavDrawer: React.FC<NavDrawerType> = (props) => {

    const { t } = useTranslation()
    const { open, onClose, navItems, children } = props

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
                            <ListItemButton>
                                <ListItemText>{t(item)}</ListItemText>
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

export default NavDrawer