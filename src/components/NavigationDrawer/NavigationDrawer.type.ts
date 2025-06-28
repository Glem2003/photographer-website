export interface NavigationDrawerType {
    open: boolean,
    onClose: () => void,
    navItems: string[],
    children?: React.ReactNode
}