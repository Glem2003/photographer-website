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
import { People } from '../../assets/images/index'

const AboutSection = () => {

    const { t } = useTranslation()

    return (
        <Box className="About" component={'section'}>
            <ResponsiveTitle title={t('About')} />
            <Grid container size={12} p={2}>
                <Grid
                    size={{ xs: 12, sm: 4 }}
                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <img
                            src={People}
                            alt='Author'
                            title="Author"
                            style={{
                                clipPath: 'circle(40% at 50% 50%)',
                                border: '2px solid white',
                                maxWidth: useResponsiveValue<string>({
                                    tableValue: '100%',
                                    laptopValue: '100%',
                                    mobileValue: '60%'
                                }),
                                maxHeight: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 8 }}>
                    <Box
                        className='About_text_wrapper'
                        sx={{
                            height: '100%',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            p: 2,
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Typography
                            variant={useResponsiveValue<TypographyVariant>({
                                tableValue: 'h4',
                                mobileValue: 'h5',
                                laptopValue: 'h3'
                            })}
                        >
                            {t('Portfolio_text.0')}
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
                            {t('Portfolio_text.2')}
                        </Typography>
                        <Typography
                            variant={useResponsiveValue<TypographyVariant>({
                                tableValue: 'h6',
                                mobileValue: 'body1',
                                laptopValue: 'h5'
                            })}
                            sx={{ mt: 2 }}
                        >
                            {t('Portfolio_text.3')}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutSection