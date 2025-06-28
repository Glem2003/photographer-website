// type
export interface selectResponsiveValueType<T> {
    isTablet: boolean;
    isMobile: boolean;
    tableValue: T;
    mobileValue: T;
    laptopValue: T;
}