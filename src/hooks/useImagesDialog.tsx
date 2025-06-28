// hooks
import { useState } from "react";

interface DialogStateType { open: boolean, image: string | null, title: string | null }

const useImagesDialog = () => {

    const [dialogActive, setDialogActive] = useState<DialogStateType>({
        open: false,
        image: null,
        title: null
    })

    const handleActive = (images: string, title: string) => {
        console.log(dialogActive)
        setDialogActive({
            open: true,
            image: images,
            title: title
        })
    }

    const handleClose = () => {
        setDialogActive({ ...dialogActive, open: false })
    }

    return { dialogActive, handleActive, handleClose }
}

export default useImagesDialog