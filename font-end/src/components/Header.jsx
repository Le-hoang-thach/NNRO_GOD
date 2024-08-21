import { useAudio } from './AudioContext';
import { Link } from 'react-router-dom';
import '../styles/css/LogoComponent.css';

const Header = () => {
  const { isPlaying, playAudio, pauseAudio } = useAudio();
  const menuItems = [
    { name: 'Trang chủ', path: '/home' },
    { name: 'Đăng kí', path: '/register' },
    { name: 'Đăng nhập', path: '/login' }, 
    { name: 'Tải game', path: '/dowload' },
  ];

  return (
    <div className="bg-custom-rgba flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-10">
      <h1 className="p-1 animated-gradient">
        <img src='../src/assets/icon/logo.png' alt='logo' className="w-[260px] h-[120px]" />
      </h1>

      <div className="md:pl-40 flex items-center space-x-5 font-bold">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="text-white text-lg md:text-xl hover:text-red-600">
            {item.name}
          </Link>
        ))}
      </div>

      <button onClick={isPlaying ? pauseAudio : playAudio} className="text-white text-2xl">
        <i className={`fa ${isPlaying ? 'fa-volume-xmark' : 'fa-volume-up'}`}></i>
      </button>
    </div>
  );
};

export default Header;
