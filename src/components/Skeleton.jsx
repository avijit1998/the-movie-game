import React from "react";

const Skeleton = () => {
    return (
        <>
        <div className="w-1/2 rounded-lg bg-white shadow-lg m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <div className="rounded-lg bg-gray-300 h-48 w-full animate-pulse"></div>
            <div className="p-4">
                <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                <div className="mt-6 h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
            </div>
        </div>
        </>
    );
}

export default Skeleton;