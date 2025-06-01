import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import enhancedImageAPI  from "../utils/enhancedImageAPI.js";

// const Home = () => {
//     const [uploadImage, setUploadImage] = useState(null);
//     const [enhancedImage, setEnhancedImage] = useState(null);
//     const [loading, setloading] = useState(false);

//     const UploadImageHandler = async (file) => {
//         setUploadImage(URL.createObjectURL(file));
//         setloading(true);
//         try {
//             const enhancedURL = await enhancedImageAPI(file);
//             setEnhancedImage(enhancedURL);
//             setloading(false);
//         } catch (error) {
//             console.log(error);
//             alert("Error while enhancing the image. Please try again later.");
//         }
//     };

//     return (
//         <>
//             <ImageUpload UploadImageHandler={UploadImageHandler} />
//             <ImagePreview
//                 loading={loading}
//                 uploaded={uploadImage}
//                 enhanced={enhancedImage?.image}
//             />
//         </>
//     );
// };

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // const enhancedImageAPI = async (file) => {

    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve({ image: URL.createObjectURL(file) });
    //         }, 3000);
    //     });
    // };

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);
        try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setLoading(false);
        } catch (error) {
            console.log(error);
            alert("Error while enhancing the image. Please try again later.");
            setLoading(false);
        }
    };

    return (
        <>
            <ImageUpload UploadImageHandler={UploadImageHandler} />
            <ImagePreview
            download={enhancedImage?.download}
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage?.image}
            />
        </>
    );
};


export default Home;