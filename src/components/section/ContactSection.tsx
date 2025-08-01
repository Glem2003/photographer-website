// components
import {
    Box,
    Grid,
    Typography
} from "@mui/material"
import ResponsiveTitle from "../ResponsiveTitle/ResponsiveTitle"

// hooks
import useResponsiveValue from "../../hooks/useResponsiveValue"

const ContactSection = () => {
    return (
        <Box className="Contact" component={'section'}>
            <ResponsiveTitle title='title' />
            <Typography
                ml={2}
                variant={useResponsiveValue({
                    tableValue: 'h5',
                    mobileValue: 'h6',
                    laptopValue: 'h4',
                })}>
                subtitle
            </Typography>
            <Grid container size={12} height="80vh" p={2}>
                <Grid border={'1px solid white'} size={4}>
                    介紹區
                </Grid>
                <Grid border={'1px solid white'} size={8}>
                    聯絡表單
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContactSection