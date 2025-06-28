// hooks
import { useTranslation } from "react-i18next";
import useBreakPoint from "../../hooks/useBreakpoint";
import useImagesDialog from "../../hooks/useImagesDialog";
import useResponsiveValue from "../../hooks/useResponsiveValue";

//components
import {
    Box,
    Typography,
    ImageList,
    ImageListItem,
} from "@mui/material";
import ImagePreviewDialog from "../ImagePreviewDialog/ImagePreviewDialog";
import ResponsiveTitle from "../ResponsiveTitle/ResponsiveTitle";

// data
import { imagesData } from "../../data/imagesData";

const PortfolioSection = () => {

    const { t } = useTranslation()
    const { isTablet, isMobile } = useBreakPoint()

    const { dialogActive, handleActive, handleClose } = useImagesDialog()

    return (
        <Box className="Portfolio" component={'section'} sx={{ height: 'max-content' }}>
            <ResponsiveTitle title={t('Portfolio')} />
            <Typography variant="subtitle1" ml={2} mb={3}>
                {t('Portfolio_Subtitle')}
            </Typography>
            <ImageList
                sx={{ width: '100%', height: '100%' }}
                cols={useResponsiveValue({
                    tableValue: 2,
                    mobileValue: 1,
                    laptopValue: 3,
                })}
                rowHeight={isTablet && !isMobile ? 300 : 450}
            >
                {imagesData.map((item, index) => {
                    return (
                        <ImageListItem
                            key={index}
                            sx={{
                                cursor: 'pointer',
                                transform: 'scale(0.9)',
                                opacity: .5,
                                transition: 'all 0.8s ease',
                                ':hover': {
                                    opacity: 1,
                                    transform: 'scale(1)'
                                }
                            }}>
                            <img
                                onClick={() => handleActive(item.src, item.title)}
                                srcSet={item.src}
                                src={item.src}
                                alt={item.title}
                                loading="lazy"
                                title={t('Click')}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    aspectRatio: '4/3'
                                }}
                            />
                        </ImageListItem>
                    )
                })}
            </ImageList>
            <ImagePreviewDialog
                open={dialogActive.open}
                onClose={handleClose}
                src={dialogActive.image || ''}
                alt={dialogActive.title || ''}
            />
        </Box>
    )
}

export default PortfolioSection