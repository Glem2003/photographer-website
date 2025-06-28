// components
import {
    Dialog,
    DialogContent
} from "@mui/material";

// type
import { ImagePreviewDialogType } from "./ImagePreviewDialog.type";

const ImagePreviewDialog: React.FC<ImagePreviewDialogType> = (props) => {

    const { open, onClose, src, alt } = props

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogContent sx={{
                height: "90vh",
                overflow: 'hidden'
            }}>
                <img
                    srcSet={src}
                    src={src}
                    alt={alt}
                    loading="lazy"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        aspectRatio: '4/3',
                        borderRadius: '4px',
                    }}
                />
            </DialogContent>
        </Dialog>
    )
}

export default ImagePreviewDialog