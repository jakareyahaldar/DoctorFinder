import { useEffect, useRef } from "react"


export default function UploadWidget({callback}) {

    const cloudinaryRef = useRef(null)
    const widgetRef = useRef(null)

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'jakareya',
            uploadPreset: 'doctors_image'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                callback(result.info)
                widgetRef.current?.close();
            }
            if(error){
                alert("Got an error on uploading!.")
                console.log(error)
            }
        }
        )

    }, [])

    function handleUpload(){
        widgetRef.current.open()
    }

    return (
        <>
            <button type="button" className="px-3 py-2 shadow rounded-md bg-blue-500" onClick={handleUpload}>Upload</button>
        </>
    )
}
