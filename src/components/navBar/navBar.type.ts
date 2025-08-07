export interface NavBarType {
    navItems: string[]
    sectionRefs: Record<string, React.RefObject<HTMLElement | null>>
}