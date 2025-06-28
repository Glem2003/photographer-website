// components
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

// hooks
import useResponsiveValue from "../../hooks/useResponsiveValue";

// hooks
import useBreakPoint from "../../hooks/useBreakpoint";

// type
import { TypographyVariant } from "@mui/material";
import { ServiceItemType } from "./ServiceItem.type";

const ServiceItem: React.FC<ServiceItemType> = (props) => {

    const { btn, title, subtitle, text, lists, wrapper, reverse = false } = props

    const { isMobile, isTablet } = useBreakPoint()

    return (
        <Card
            className="ServiceItem"
            sx={{
                maxWidth: 1000,
                border: '1px solid white',
                color: "primary.contrastText",
                backgroundColor: 'primary.main'
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: { xs: 'column', sm: !reverse ? 'row' : 'row-reverse' },
                    gap: 4,
                    p: 4
                }}
            >
                <Box
                    className='ServiceItem_wrapper'
                    flex={isTablet && !isMobile ? .7 : isMobile ? 1 : .5}
                    sx={{
                        backgroundImage: `url(${wrapper})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        flexBasis: { xs: 300, sm: 'auto' }
                    }}
                    borderRadius={2}
                />
                <Box
                    className='ServiceItem_text'
                    flex={1}
                >
                    <Typography
                        variant={useResponsiveValue<TypographyVariant>({
                            tableValue: 'h5',
                            mobileValue: 'h6',
                            laptopValue: 'h4',
                        })}
                        className="title"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant={useResponsiveValue<TypographyVariant>({
                            tableValue: 'h6',
                            mobileValue: 'body1',
                            laptopValue: 'h5',
                        })}
                        className="subtitle"
                        gutterBottom
                    >
                        {subtitle}
                    </Typography>
                    <Typography
                        variant="body1"
                        className="text"
                    >
                        {text}
                    </Typography>
                    <List dense>
                        {lists && lists.map((item) => {
                            return (
                                <ListItem>
                                    <ListItemText primary={item} />
                                </ListItem>
                            )
                        })}
                    </List>
                    <CardActions sx={{ mt: 2 }}>
                        <Button
                            color="secondary"
                            variant="contained"
                            size={useResponsiveValue({
                                tableValue: 'medium',
                                mobileValue: 'small',
                                laptopValue: 'large',
                            })}
                        >
                            {btn}
                        </Button>
                    </CardActions>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ServiceItem