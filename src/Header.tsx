const Header = () => {
    return (
        <>
   <header>
   <nav className="bg-blue-500 dark:bg-gray-800">
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-4 py-3 mx-auto">
    <a href="#" className="text-white text-2xl font-bold">Shopping Cart</a>
      <div className="flex items-center space-x-4">
       <ul className="flex space-x-6">
      <li>
      <a href="#" className="text-white dark:text-gray-300 hover:text-yellow-300">Home</a>
       </li>
          <li>
          <a href="#" className="text-white dark:text-gray-300 hover:text-yellow-300">Link</a>
           </li>
          <li className="relative group">
            <a href="#" className="text-white dark:text-gray-300 hover:text-yellow-300">Dropdown</a>
            <ul className="absolute hidden group-hover:block bg-blue-500 dark:bg-gray-800 mt-2 space-y-2 p-2 rounded-md shadow-lg">
             <li>
              <a href="#" className="block text-white dark:text-gray-300 hover:text-yellow-300">Action</a>
                </li>
                <li>
               <a href="#" className="block text-white dark:text-gray-300 hover:text-yellow-300">Another action</a>
                </li>
                   <li>
                        <hr className="border-gray-300"/>
                       </li>
                       <li>
                       <a href="#" className="block text-white dark:text-gray-300 hover:text-yellow-300">Something else here</a>
                      </li>
                       </ul>
                      </li>
                      <li>
                  <a href="#" className="text-gray-500 cursor-not-allowed">Disabled</a>
                     </li>
                  </ul>
                   <form className="flex items-center space-x-2">
                   <input className="px-2 py-1 rounded-md focus:outline-none" type="text" placeholder="Search..." />
                   <button className="px-4 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">Search</button>
                  </form>
               </div>
              </div>
            </nav>
          </header>
        </>
    );
  }
  
  export default Header;