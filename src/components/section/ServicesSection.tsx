// components
import {
    Box,
} from "@mui/material";
import ResponsiveTitle from "../ResponsiveTitle/ResponsiveTitle";
import ServiceItem from '../../components/ServiceItem/ServiceItem'

// hooks
import { useTranslation } from "react-i18next";

// data
import { serviceItemData } from "../../data/serviceItemData";

const ServicesSection = () => {

    const { t } = useTranslation()

    return (
        <Box className="Services" component={'section'}>
            <ResponsiveTitle title={t('Services')} />
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={3} mt={4}>
                {serviceItemData.map((item, index) => {
                    return (
                        <ServiceItem
                            key={index}
                            title={t(item.title)}
                            subtitle={t(item.subtitle)}
                            text={t(item.text)}
                            lists={item.lists.map((list) => (t(list)))}
                            wrapper={item.wrapper}
                            btn={t(item.btn)}
                            reverse={item.reverse}
                        />
                    )
                })}
            </Box>
        </Box>
    )
}

export default ServicesSection