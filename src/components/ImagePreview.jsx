import Loading from "./Loading";

// const ImagePreview = (props) => {
//     return (
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
//             {/* Original Image */}
//             <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//                 <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
//                     Original Image
//                 </h2>

//                 {props.uploaded ? (
//                     <img
//                         src={props.uploaded}
//                         alt=""
//                         className="w-full h-full object-cover"
//                     />
//                 ) : (
//                     <div className="flex items-center justify-center h-80 bg-gray-200">
//                         No Image Selected
//                     </div>
//                 )}
//             </div>

//             {/* Enhanced Image Image */}
//             <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//                 <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
//                     Enhanced Image
//                 </h2>

//                 {props.enhanced && !props.loading && (
//                     <img
//                         src={props.enhanced}
//                         alt=""
//                         className="w-full h-full object-cover"
//                     />
//                 )}

//                 {props.loading ? (
//                     <Loading />
//                 ) : (
//                     <div className="flex items-center justify-center h-80 bg-gray-200">
//                         No Enhanced Image
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
const ImagePreview = (props) => {
    const downloadImage = async (imageUrl, filename) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            // Fallback for same-origin URLs
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = filename;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* Original Image */}
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-4">
                    <h2 className="text-xl font-bold text-white flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        Original Image
                    </h2>
                </div>

                <div className="relative">
                    {props.uploaded ? (
                        <div className="relative overflow-hidden">
                            <img
                                src={props.uploaded}
                                alt="Original"
                                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-80 bg-gradient-to-br from-gray-50 to-gray-100">
                            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-400 font-medium">No Image Selected</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Enhanced Image */}
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Enhanced Image
                    </h2>
                    {props.enhanced && !props.loading && (
                        <button
                            onClick={() => downloadImage(props.enhanced, 'enhanced-image.jpg')}
                            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm animate-pulse hover:animate-none"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download
                        </button>
                    )}
                </div>

                <div className="relative">
                    {props.enhanced && !props.loading ? (
                        <div className="relative overflow-hidden">
                            <img
                                src={props.enhanced}
                                alt="Enhanced"
                                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-4 right-4">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                    ✨ Enhanced
                                </span>
                            </div>
                        </div>
                    ) : props.loading ? (
                        <Loading />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-80 bg-gradient-to-br from-blue-50 to-purple-50">
                            <svg className="w-16 h-16 text-blue-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <p className="text-blue-400 font-medium">AI Enhancement Ready</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImagePreview;