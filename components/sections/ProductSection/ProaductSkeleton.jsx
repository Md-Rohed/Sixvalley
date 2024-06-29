import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="p-2.5 border-t border-gray-300 shadow rounded-md">
      <div className="h-full overflow-hidden rounded-lg">
        <div className="w-full bg-gray-200 max-h-52 min-h-52"></div>
        <div className="flex flex-col items-center justify-center py-4 space-y-2">
          <div className="w-1/4 h-4 bg-gray-200 animate-pulse"></div>
          <div className="w-1/4 h-4 bg-gray-200 animate-pulse"></div>
          <div className="w-1/2 h-3 bg-gray-200 animate-pulse"></div>
          <div className="w-1/4 h-3 bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
