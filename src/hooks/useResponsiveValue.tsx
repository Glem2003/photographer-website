// type
import selectResponsiveValue from "../utils/selectResponsiveValue";

// utils
import { selectResponsiveValueType } from "../utils/selectResponsiveValue.type"

// hooks
import useBreakPoint from "./useBreakpoint";

const useResponsiveValue = <T,>({
    tableValue,
    mobileValue,
    laptopValue,
}: Omit<selectResponsiveValueType<T>, 'isTablet' | 'isMobile'>): T => {

    const { isTablet, isMobile } = useBreakPoint();

    return selectResponsiveValue({
        isTablet,
        isMobile,
        tableValue,
        mobileValue,
        laptopValue,
    });
}

export default useResponsiveValue