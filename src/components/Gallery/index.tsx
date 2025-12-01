"use client";
import { useState } from "react";
import HalloweenGalleryComponent from "./2024-Halloween-marche";
import ChristmasGalleryComponent from "./2025-Christmas-marche";

const GalleryComponent = () => {
  const [activeTab, setActiveTab] = useState<"halloween" | "christmas">(
    "christmas"
  );

  return (
    <div className="bg-gray-900">
      <div className="flex justify-center gap-4 mb-8 pt-8">
        <button
          type="button"
          onClick={() => setActiveTab("halloween")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === "halloween"
              ? "bg-orange-600 text-white"
              : "bg-gray-900 text-white hover:bg-gray-800 border border-gray-700"
          }`}
        >
          Halloween 2024
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("christmas")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === "christmas"
              ? "bg-red-600 text-white"
              : "bg-gray-900 text-white hover:bg-gray-800 border border-gray-700"
          }`}
        >
          Christmas 2025
        </button>
      </div>
      {activeTab === "halloween" ? (
        <HalloweenGalleryComponent />
      ) : (
        <ChristmasGalleryComponent />
      )}
    </div>
  );
};

export default GalleryComponent;
