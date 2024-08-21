import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import '../styles/css/LogoComponent.css';
function DownloadSection() {
  return (
    <>
      <Header/>
      <Banner/>
      <div className="flex justify-center items-center mt-8 ">
        <h1 className="text-5xl font-extrabold text-red-600 drop-shadow-lg text-center mb-8 animated-gradient">
          TẢI GAME
        </h1>
      </div>
      <div id="columns" className="text-center flex flex-wrap justify-center space-x-4">

        <figure className="m-4">
          <a href="http://dlworld.teamobi.com/?type=1" target="_blank" rel="noopener noreferrer">
            <img
              height="35"
              src="https://ngocrongonline.com/images/jar.png"
              alt="CHÚ BÉ RỒNG ONLINE"
              className="mx-auto"
            />
          </a>
          <figcaption className="mt-2 text-red-600">
            <span> Tính năng chưa làm<br/>(phá lỗi đừng hú tao)<br/>240</span> -{' '}
            <a href="#"  title="CHÚ BÉ RỒNG ONLINE">
              
              JAD
            </a>
          </figcaption>
        </figure>

        <figure className="m-4">
          <a href="https://www.mediafire.com/file/3fg7o7tvuqmof5h/Ng%25E1%25BB%258Dc_R%25E1%25BB%2593ng_God_1.apk/file" title="CHÚ BÉ RỒNG ONLINE">
            <img
              height="35"
              src="https://ngocrongonline.com/images/android.png"
              alt="CHÚ BÉ RỒNG ONLINE"
              className="mx-auto"
            />
          </a>
          <figcaption className="mt-2 text-red-600">
            <span>240</span>
            <br />
            <a href="https://ngocrongonline.com/?c=huong-dan">Hướng dẫn cài</a>
          </figcaption>
        </figure>

        <figure className="m-4">
          <a
            href="#"
            title="CHÚ BÉ RỒNG ONLINE"
          >
            <img
              height="35"
              src="https://ngocrongonline.com/images/play.png"
              alt="CHÚ BÉ RỒNG ONLINE"
              className="mx-auto"
            />
          </a>
          <figcaption className="mt-2 text-red-600">
            <span> Tính năng chưa làm<br/>(phá lỗi đừng hú tao)<br/>240</span>
          </figcaption>
        </figure>

        <figure className="m-4">
          <a href="https://www.mediafire.com/file/gyd5g81ac49pk4n/NroGod.zip/file" title="CHÚ BÉ RỒNG ONLINE">
            <img
              height="35"
              src="https://ngocrongonline.com/images/pc.png"
              alt="CHÚ BÉ RỒNG ONLINE"
              className="mx-auto"
            />
          </a>
          <figcaption className="mt-2 text-red-600">
            <span>240</span>
          </figcaption>
        </figure>

        

        <figure className="m-4">
          <a
            href="#"
            title="CHÚ BÉ RỒNG ONLINE"
          >
            <img
              style={{ marginBottom: '0px' }}
              height="35"
              src="https://ngocrongonline.com/images/ip.png"
              alt="CHÚ BÉ RỒNG ONLINE"
              className="mx-auto"
            />
          </a>
          <figcaption className="mt-2">
            <a className="mt-2 text-red-600" href="#">
            Tính năng chưa làm<br/>(phá lỗi đừng hú tao)<br/>
              App Center
            </a>
          </figcaption>
        </figure>

        <figure className="m-4">
          <a href="#" title="CHÚ BÉ RỒNG ONLINE">
            <img
              src="https://ngocrongonline.com/images/napngoc.png"
              height="35"
              alt="CHÚ BÉ RỒNG ONLINE"
              className="mx-auto"
            />
          </a>
          <figcaption className="mt-2 text-red-600">
            <a
              href="#"
              className="block"
            >
              Tính năng chưa làm<br/>(phá lỗi đừng hú tao)<br/>
              Báo Lỗi SMS
            </a>
            <a
              href="#"
              className="block"
            >
              Báo Lỗi thẻ
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default DownloadSection;
