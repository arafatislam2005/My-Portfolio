const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">

            <div className="mb-4 text-4xl font-mono font-bold flex items-center">
                Hello World
                <span className="ml-2 w-[20px] h-[30px] bg-blue-500 animate-blink"></span>
            </div>


            <div className="w-[200px] h-1 bg-gray-800 rounded relative overflow-hidden">

                <div className="absolute inset-0 w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar" />
            </div>
        </div>
    );
};

export default LoadingScreen;