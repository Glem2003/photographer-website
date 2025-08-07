// components
import { Typography } from "@mui/material"

// hooks
import useResponsiveValue from "../../hooks/useResponsiveValue"

// type
import { TypographyVariant } from "@mui/material"

const ResponsiveTitle = ({ title }: { title: string }) => {

    return (
        <Typography
            variant={
                useResponsiveValue<TypographyVariant>({
                    tableValue: 'h3',
                    mobileValue: 'h4',
                    laptopValue: 'h2',
                })}
            mt={2}
            ml={2}
            fontWeight={600}
        >
            {title}
        </Typography>
    )
}

export default ResponsiveTitle