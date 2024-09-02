const BackGroundWithMessage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tl via-emerald-700/30 from-yellow-200/40 to-white dark:bg-gradient-to-tr dark:from-black dark:to-gray-600">
      {/* <!-- SUN --> */}
      <div className="dark:hidden block w-[10rem] h-[10rem] rounded-full grid place-items-center absolute left-4 top-2  cursor-pointer [transition:all_400ms_ease] hover:-translate-y-[1rem]">
        <div className="w-[5rem] h-[5rem] brightness-150 absolute bg-yellow-200/60 blur z-50 rounded-full rotate-[68deg]"></div>
        <div className="w-[6rem] h-[6rem] brightness-150 absolute bg-white/60 blur-sm brightness-200 contrast-200 z-40 rounded-full rotate-[68deg]"></div>
        <div className="w-[7rem] h-[7rem] brightness-150 absolute bg-gray-100 brightness-200 contrast-200 blur-sm z-30 -lg rounded-full"></div>
        <div className="w-[8rem] h-[8rem] absolute bg-yellow-300/10 brightness-200 contrast-200 blur-lg z-20 rounded-full shadow-2xl shadow-yellow-700/10"></div>
        <div className="w-[9rem] h-[9rem] brightness-200 contrast-200 absolute bg-white blur-sm z-10 rounded-full shadow-3xl"></div>
        <div className="brightness-200 contrast-200 blur-sm [box-shadow:0_0px_30px_30px_#fff] rounded-full w-[10rem] h-[10rem]"></div>
      </div>

      {/* <!-- Moon --> */}
      <div className="hidden dark:block w-[10rem] h-[10rem] rounded-full shadow-2xl shadow-white grid place-items-center absolute right-2 top-2  cursor-pointer [transition:all_400ms_ease] hover:shadow-2xl hover:shadow-gray-900 hover:-translate-y-[1rem]">
        <div className="w-[6rem] h-[6rem] absolute bg-gradient-to-r from-black to-gray-900 blur-lg rounded-full animate-[spinIn_10s_linear_infinite]"></div>
        <div className="w-[7rem] h-[7rem] absolute bg-gradient-to-tr via-gray-900 from-black to-gray-900 blur-lg z-30 rounded-full"></div>
        <div className="w-[8rem] h-[8rem] absolute bg-gradient-to-tl via-black/90 from-white to-gray-100 z-20 blur-sm rounded-full"></div>
        <div className="w-[9rem] h-[9rem] absolute bg-gradient-to-tr via-gray-100 from-gray-50 to-white z-10 blur-lg rounded-full animate-[spinIn_80s_linear_infinite]"></div>
        <p className="bg-gradient-to-r from-white to-white shadow-2xl shadow-white brightness-200 contrast-200 rounded-full w-[10rem] h-[10rem]"></p>
      </div>

      {/* <!-- Message1 --> */}
      <div className="dark:block w-[10rem] h-[6rem] rounded-sm shadow-2xl shadow-gray-400 grid place-items-center absolute right-32 bottom-52  cursor-pointer [transition:all_400ms_ease] hover:shadow-2xl hover:shadow-gray-900 hover:-translate-y-[1rem] text-gray-500 dark:text-gray-100 bg-gray-50/50 dark:bg-gray-500/50 text-center">
        今日も・・・・
        <br />
        素敵なことが・
        <br />
        ありますように
      </div>
      {/* <!-- Message2 --> */}
      <div className="dark:block w-[10rem] h-[6rem] rounded-sm shadow-2xl shadow-gray-400 grid place-items-center absolute left-32 top-60  cursor-pointer [transition:all_400ms_ease] hover:shadow-2xl hover:shadow-gray-900 hover:-translate-y-[1rem] text-gray-500 dark:text-gray-100 bg-gray-50/50 dark:bg-gray-500/50 text-center animate-pulse">
        ♪　ページ準備中　♪
      </div>
    </div>
  );
};

export default BackGroundWithMessage;
