// icon
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

// components
import {
    IconButton
} from "@mui/material";

// type
import { scrollButtonType } from './ScrollButton.type';

// hooks
import { useEffect, useState } from 'react';

const ScrollButton: React.FC<scrollButtonType> = (props) => {

    const { onClick } = props

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    if(!showButton) return null

    return (
        <IconButton
            aria-label="scroll_top"
            sx={{
                display: !showButton ? 'none' : 'block',
                width: 65,
                height: 65,
                zIndex: 99,
                background: '#D4A373',
                position: 'fixed',
                bottom: 36,
                right: 36,
                '&:hover': {
                    background: '#D4A373',
                    opacity: .8
                }
            }}
            onClick={onClick}
        >
            <ExpandLessRoundedIcon sx={{ width: '100%', height: '100%' }} />
        </IconButton>
    )
}

export default ScrollButton