// hooks
import { useTranslation } from "react-i18next";
import useResponsiveValue from "../../hooks/useResponsiveValue";

// type
import { TypographyVariant } from "@mui/material";

// components
import {
    Box,
    Typography,
    Button
} from "@mui/material";

// images
import { Nature } from "../../assets/images";

const HeroSection = () => {

    const { t } = useTranslation()

    return (
        <Box
            className="HeroSection"
            component={'section'}
            sx={{ height: '100vh', position: 'relative' }}
        >
            <Box
                className='HeroSection_background'
                sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${Nature})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1
                }}
            />
            <Box
                className='HeroSection_wrapper'
                sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: -1,
                }}
            />
            <Box
                className='HeroSection_container'
                sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    display: 'grid',
                    placeContent: 'center',
                    gap: 6,
                    textAlign: 'center'
                }}
            >
                <Typography
                    className="HeroSection_Title"
                    variant={useResponsiveValue<TypographyVariant>({
                        tableValue: 'h3',
                        mobileValue: 'h4',
                        laptopValue: 'h2'
                    })}
                    sx={{ fontWeight: 550 }}
                >
                    {t('Hero_Section_Title')}
                </Typography>
                <Typography
                    className="HeroSection_Subtitle"
                    variant={useResponsiveValue<TypographyVariant>({
                        tableValue: 'h4',
                        mobileValue: 'h5',
                        laptopValue: 'h3'
                    })}
                >
                    {t('Hero_Section_Subtitle')}
                </Typography>
                <Box
                    className="HeroSection_btnArea"
                    sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', gap: 6 }}
                >
                    <Button variant="contained" size="large">{(t('Reserve'))}</Button>
                    <Button variant="outlined" size="large" color="secondary">{t('Browse')}</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default HeroSection