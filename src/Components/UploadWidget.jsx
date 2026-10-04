import { useEffect, useRef } from "react"
const cloudName = import.meta.env.VITE_CLOUDINARY_NAME
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET_NAME


export default function UploadWidget({ callback }) {

    if (!cloudName) console.log("Please add VITE_CLOUDINARY_NAME env veriable.")
    if (!uploadPreset) console.log("Please add VITE_UPLOAD_PRESET_NAME env veriable.")

    const cloudinaryRef = useRef(null)
    const widgetRef = useRef(null)


    if (!navigator.onLine) {
        console.log("You are offline! The cloudnary upload widget not work properly.");
        return null
    }


    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName,
            uploadPreset
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                callback(result.info)
                widgetRef.current?.close();
            }
            if (error) {
                alert("Got an error on uploading!.")
                console.log(error)
            }
        }
        )

    }, [])

    function handleUpload() {
        widgetRef.current.open()
    }

    return (
        <>
            <button type="button" className="px-3 py-2 shadow rounded-md bg-blue-500" onClick={handleUpload}>Upload</button>
        </>
    )
}
