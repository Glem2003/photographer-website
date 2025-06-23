import { useState } from "react"
import i18n from "../i18n";

const useNavBar = () => {

    const [isActive, setActive] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)

    const handleActive = () => {
        setActive(prev => !prev)
    }

    const handleLangChange = () => {
        setLoading(true)
        setTimeout(() => {
            const newLang = i18n.language === 'en' ? 'zh-TW' : 'en'
            i18n.changeLanguage(newLang)
            setLoading(false)
        }, 1000)
    }

    return {
        isLoading,
        isActive,
        handleActive,
        handleLangChange
    }
}

export default useNavBar