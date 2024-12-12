import React from 'react'

const NavbarDown = () => {
  return (
    <div>
      <nav className='hidden xl:block mx-auto my-auto '>
        <ul className='flex gap-10  text-customgray text-xl items-center justify-center'>
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