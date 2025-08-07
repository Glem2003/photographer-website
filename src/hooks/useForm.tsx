import { useState } from "react";

// hooks
import { useTranslation } from "react-i18next"

const useForm = () => {

    const { t } = useTranslation()

    const [isForm, setForm] = useState<{
        name: string,
        gender: string,
        email: string,
        phone: string,
        information: string
    }>({
        name: '',
        gender: 'male',
        email: '',
        phone: '',
        information: ''
    })

    const handleReset = () => {
        setForm({
            name: '',
            gender: 'male',
            email: '',
            phone: '',
            information: ''
        })
    }

    const handleSubmit = () => {
        alert(t('Submit_message'))
        setForm({
            name: '',
            gender: 'male',
            email: '',
            phone: '',
            information: ''
        })
    }

    return {
        isForm,
        setForm,
        handleReset,
        handleSubmit
    }
}

export default useForm