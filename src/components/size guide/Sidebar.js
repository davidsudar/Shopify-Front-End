export default function SideBar() {
  return (
    <div className=" hidden lg:block my-4 ml-4 shadow-lg relative w-80">
      <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
        <div className="flex items-center justify-center pt-6">
            <p className="text-2xl">Guide</p>
        </div>
        <nav className="mt-6">
          <div>
            <button
              className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 "
              
            >
              <span className="mx-4 text-sm font-normal">T-Shirt</span>
            </button>
            <button
              className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
              href="/#"
            >
              <span className="mx-4 text-sm font-normal">Leggings</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
