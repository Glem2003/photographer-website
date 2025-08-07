import { useState } from "react"
import i18n from "../i18n";

const useNavBar = () => {

    const [isActive, setActive] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)

    const [isNavMenu, setNavMenu] = useState<string>('Portfolio')

    const scrollToSection = (Ref: HTMLElement | null) => {
        Ref?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleNavClick = (value: string,Ref: HTMLElement | null) => {
        setNavMenu(value)
        Ref?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleActive = () => {
        setActive(prev => !prev)
    }

    const handleLangChange = () => {
        setLoading(true)
        setTimeout(() => {
            const newLang = i18n.language === 'en-US' ? 'zh-TW' : 'en-US'
            i18n.changeLanguage(newLang)
            setLoading(false)
        }, 1000)
    }

    return {
        isLoading,
        isActive,
        handleActive,
        handleLangChange,
        isNavMenu,
        setNavMenu,
        handleNavClick,
        scrollToSection,
    }
}

export default useNavBar