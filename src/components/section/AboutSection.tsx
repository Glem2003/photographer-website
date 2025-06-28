// hooks
import { useTranslation } from "react-i18next";
import useResponsiveValue from "../../hooks/useResponsiveValue";

// components
import {
    Box,
    Grid,
    Typography,
} from "@mui/material";
import ResponsiveTitle from "../ResponsiveTitle/ResponsiveTitle";

// type
import { TypographyVariant } from "@mui/material";

// images
import { Paper, People } from '../../assets/images/index'

const AboutSection = () => {

    const { t } = useTranslation()

    return (
        <Box className="About" component={'section'}>
            <ResponsiveTitle title={t('About')} />
            <Grid container size={12} p={2}>
                <Grid
                    size={{ xs: 10, sm: 4 }}
                    pr={{ xs: 0, sm: 2 }}
                    pb={{ xs: 4, sm: 0 }}
                >
                    <img
                        src={People}
                        alt='Author'
                        title="Author"
                        style={{
                            borderRadius: '6px',
                            border: '2px solid white',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 8 }}>
                    <Box
                        className='About_text_wrapper'
                        sx={{
                            backgroundImage: `url(${Paper})`,
                            height: 'max-content',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            p: 2,
                            borderRadius: '8px',
                            color: 'black',
                            opacity: .7
                        }}>
                        <Typography
                            variant={useResponsiveValue<TypographyVariant>({
                                tableValue: 'h4',
                                mobileValue: 'h5',
                                laptopValue: 'h3'
                            })}
                        >
                            👋{t('Portfolio_text.0')}
                        </Typography>
                        <Typography
                            variant={useResponsiveValue<TypographyVariant>({
                                tableValue: 'h5',
                                mobileValue: 'h6',
                                laptopValue: 'h4'
                            })}
                            sx={{ mt: 2 }}
                        >
                            {t('Portfolio_text.1')}
                        </Typography>
                        <Typography
                            variant={useResponsiveValue<TypographyVariant>({
                                tableValue: 'h6',
                                mobileValue: 'body1',
                                laptopValue: 'h5'
                            })}
                            sx={{ mt: 2 }}
                        >
                            🌿{t('Portfolio_text.2')}
                        </Typography>
                        <Typography
                            variant={useResponsiveValue<TypographyVariant>({
                                tableValue: 'h6',
                                mobileValue: 'body1',
                                laptopValue: 'h5'
                            })}
                            sx={{ mt: 2 }}
                        >
                            🏔️{t('Portfolio_text.3')}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutSection