export interface NavDrawerType {
    open: boolean,
    onClose: () => void,
    navItems: string[],
    children?: React.ReactNode
}