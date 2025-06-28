// type
import { selectResponsiveValueType } from './selectResponsiveValue.type'

const selectResponsiveValue = <T,>({
    isTablet,
    isMobile,
    tableValue,
    mobileValue,
    laptopValue,
}: selectResponsiveValueType<T>): T => {

    if (isTablet && !isMobile) return tableValue
    if (isMobile) return mobileValue
    return laptopValue

}

export default selectResponsiveValue