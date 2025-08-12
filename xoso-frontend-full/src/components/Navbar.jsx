import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const items = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Kết quả', path: '/ket-qua' },
    { name: 'Blog', path: '/blog' },
    { name: 'Thống kê', path: '/thong-ke' },
    { name: 'Soi cầu', path: '/soi-cau' }
  ];

  return (
    <nav className="bg-yellow-300 overflow-x-auto shadow-sm">
      <ul className="flex whitespace-nowrap px-4 py-2 text-sm">
        {items.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `px-3 py-1 rounded ${
                  isActive 
                    ? 'bg-yellow-500 font-bold' 
                    : 'hover:bg-yellow-400'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;