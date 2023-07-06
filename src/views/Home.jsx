import React from "react";
import "./Style.css";
import Intro from "../videos/intro.mp4";
import Ilustrasi from "../img/ilustrasi.jpg";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="fullscreen-bg">
          <video className="fullscreen-bg__video" autoPlay loop muted>
            <source src={Intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <div className="content-container">
              <h1 className="text-4xl text-content font-bold text-white mb-8">
                Museum Galeri Nasional Indonesia
              </h1>
              <a href="/kontak" target="_blank" className="button mt-5">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="box mx-auto flex items-center justify-center container max-w-[600px]">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trophy icon_home mx-auto flex items-center justify-center"
              viewBox="0 0 16 16"
            >
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
            </svg>
            <p className="text-center text_box">100+</p>
            <p className="text-center text_box_2">Penghargaan</p>
          </div>

          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bar-chart icon_home mx-auto flex items-center justify-center"
              viewBox="0 0 16 16"
            >
              <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
            </svg>
            <p className="text-center text_box">10000+</p>
            <p className="text-center text_box_2">Pengunjung</p>
          </div>

          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-right-dots icon_home mx-auto flex items-center justify-center"
              viewBox="0 0 16 16"
            >
              <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            <p className="text-center text_box">5000+</p>
            <p className="text-center text_box_2">Ulasan</p>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-10 judul_about">Tentang Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 container mx-auto">
        <div className="p-4 flex items-center justify-center">
          <img
            src={Ilustrasi}
            alt="image ilustrasi"
            className="image_ilustrasi"
          />
        </div>
        <div className="p-4 text_home">
          <p>
            Museum Galeri Indonesia adalah sebuah tempat yang memamerkan beragam
            karya seni dan budaya Indonesia. Dengan koleksi yang kaya dan
            beragam, museum ini menawarkan pengalaman unik dalam mengapresiasi
            seni dan warisan budaya Indonesia. Dalam Museum Galeri Indonesia,
            pengunjung dapat menjelajahi berbagai bentuk seni, seperti lukisan,
            patung, karya kerajinan tangan, dan masih banyak lagi. Setiap karya
            seni memiliki cerita dan makna yang mendalam, mencerminkan keindahan
            dan kekayaan budaya Indonesia.
          </p>
          <p className="mb-5">
            Dengan suasana yang inspiratif dan koleksi seni yang menarik, Museum
            Galeri Indonesia adalah destinasi yang menawarkan pengalaman budaya
            yang tak terlupakan. Ini adalah tempat yang mempromosikan
            keberagaman seni Indonesia dan menjadi wadah bagi para seniman untuk
            berekspresi serta menghubungkan masyarakat dengan keindahan budaya
            negara ini.
          </p>
          <a
            href="https://gni.kemdikbud.go.id/kunjungi-kami/"
            target="_blank"
            className="button"
          >
            Jelajahi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
