import { useState } from "react";
// const ImageUpload = (props) => {
//     const ShowImageHandler = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             props.UploadImageHandler(file);
//         }
//     };

//     return (
//         <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
//             <label
//                 htmlFor="fileInput"
//                 className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
//             >
//                 <input
//                     type="file"
//                     id="fileInput"
//                     className="hidden"
//                     onChange={ShowImageHandler}
//                 />
//                 <span className="text-lg font-medium text-gray-600">
//                     Click and drag to upload your image
//                 </span>
//             </label>
//         </div>
//     );
// };

const ImageUpload = (props) => {
    const [isDragOver, setIsDragOver] = useState(false);

    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
            <label
                htmlFor="fileInput"
                className={`block w-full cursor-pointer border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                    isDragOver 
                        ? 'border-blue-500 bg-blue-50 scale-105' 
                        : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                    accept="image/*"
                />
                <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-700 mb-2">
                            Drop your image here
                        </p>
                        <p className="text-sm text-gray-500">
                            or click to browse • PNG, JPG, JPEG up to 10MB
                        </p>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default ImageUpload;