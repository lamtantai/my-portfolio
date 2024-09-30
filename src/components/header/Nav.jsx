import { Link, useLocation } from 'react-router-dom';

import { links } from './links';

export default function Nav() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ul className='flex justify-between items-center gap-8 text-xl sm:text-3xl capitalize text-primary w-full'>
      {links.map((link) => (
        <li
          className={`relative ${
            pathname === link.path && 'pointer-events-none'
          }`}
          key={link.name}
        >
          <Link to={link.path}>
            <span className='relative group block overflow-hidden'>
              <span className='relative group-hover:-translate-y-[125%] inline-block duration-500'>
                {link.name}
              </span>
              <span className='absolute left-0 translate-y-[125%] group-hover:translate-y-[0%] duration-500'>
                {link.name}
              </span>
              <span className='absolute bottom-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 origin-bottom-right transition-transform group-hover:origin-bottom-left group-hover:scale-x-100 duration-500 '></span>
            </span>
          </Link>
          {pathname === link.path && (
            <span className='absolute -bottom-0 left-[50%] -translate-x-1/2 w-full h-[2px] bg-primary'></span>
          )}
        </li>
      ))}
    </ul>
  );
}
