// components
import {
    Box,
    Grid,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextareaAutosize,
    Button
} from "@mui/material"
import ResponsiveTitle from "../ResponsiveTitle/ResponsiveTitle"

// hooks
import { useTranslation } from "react-i18next"
import useResponsiveValue from "../../hooks/useResponsiveValue"

const ContactSection = () => {

    const { t } = useTranslation()

    return (
        <Box className="Contact" component={'section'}>
            <ResponsiveTitle title={t('Contact')} />
            <Grid
                container
                size={12}
                p={2}
                display={'flex'}
                justifyContent={'center'}
                mt={2}
            >
                <Box
                    width={useResponsiveValue<string>({ tableValue: '60%', mobileValue: '100%', laptopValue: "60%" })}
                    border={'1px solid white'}
                    className='contact_form'
                    display={'flex'}
                    flexDirection={'column'}
                    gap={4}
                    sx={{
                        backgroundColor: 'white',
                        opacity: .8,
                        borderRadius: '28px',
                        padding: 2,
                        color: 'primary.contrastText'
                    }}
                >
                    <TextField
                        label={t('Name')}
                        variant="standard"
                        sx={{ width: useResponsiveValue<string>({ tableValue: '40%', mobileValue: '80%', laptopValue: "40%" }) }}
                        slotProps={{
                            input: {
                                sx: {
                                    color: 'black'
                                }
                            }
                        }}
                    />
                    <FormControl>
                        <FormLabel>{t('Gender')}</FormLabel>
                        <RadioGroup row>
                            <FormControlLabel label={t('Male')} value={'male'} control={<Radio />} />
                            <FormControlLabel label={t('Female')} value={'female'} control={<Radio />} />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        label={t('Email')}
                        variant="standard"
                        sx={{ width: useResponsiveValue<string>({ tableValue: '70%', mobileValue: '90%', laptopValue: "70%" }) }}
                        slotProps={{
                            input: {
                                sx: {
                                    color: 'black'
                                }
                            }
                        }}
                    />
                    <TextField
                        label={t('Phone')}
                        variant="standard"
                        sx={{ width: useResponsiveValue<string>({ tableValue: '70%', mobileValue: '90%', laptopValue: "70%" }) }}
                        slotProps={{
                            input: {
                                sx: {
                                    color: 'black'
                                }
                            }
                        }}
                    />
                    <FormControl>
                        <FormLabel sx={{ mb: 2 }}>{t('Information_for_us')}</FormLabel>
                        <TextareaAutosize
                            minRows={5}
                            style={{
                                minWidth: '40%',
                                width: useResponsiveValue<string>({ tableValue: '60%', mobileValue: '90%', laptopValue: "60%" }),
                                maxWidth: '100%'
                            }}
                        />
                    </FormControl>

                    <Box width={'100%'} display={'flex'} justifyContent={'center'} gap={4}>
                        <Button>{t('Submit')}</Button>
                        <Button>{t('Reset')}</Button>
                    </Box>
                </Box>
            </Grid >
        </Box >
    )
}

export default ContactSection