import React from 'react'

const NavbarDown = () => {
  return (
    <div>
      <nav className='hidden xl:block mx-auto my-auto xl:my-4 xl2:my-4'>
        <ul className='flex gap-10  text-customgray text-xl items-center justify-center xl:gap-7 xl:text-lg xl2:text-xl xl2:gap-8'>
          <li><a href="/">Home</a></li>
          <li><a href="/ShopAllPage">Shop All</a></li>
          <li><a href="/">Flower</a></li>
          <li><a href="/">Edibles</a></li>
          <li><a href="/">Concentrates</a></li>
          <li><a href="/">Mushrooms</a></li>
          <li><a href="/">Promotions/Bundles</a></li>
          <li><a href="/">Support</a></li>
          <li><a href="/">Rewards</a></li>
          <li><a href="/">Blog</a></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavbarDown