import React from "react";
import "./Style.css";
import Intro from "../videos/intro.mp4";
import Fasilitas1 from "../img/perpustakaan.jpg";
import Fasilitas2 from "../img/ruang_seminar.jpg";
import Fasilitas3 from "../img/ruang_pameran.jpg";
import Fasilitas4 from "../img/ruang_laboratorium.jpg";
import Fasilitas5 from "../img/toilet.jpg";
import Fasilitas6 from "../img/tempat_ibadah.jpg";
import Koleksi1 from "../img/koleksi_1.jpg";
import Koleksi2 from "../img/koleksi_2.jpg";
import Koleksi3 from "../img/koleksi_3.jpg";
import Pameran1 from "../img/pameran_1.jpg";
import Pameran2 from "../img/pameran_2.jpg";
import Pameran3 from "../img/pameran_3.jpg";
import { Fade } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const Museum = () => {
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

      <Fade duration={1000}>
        <h1 className="text-center mt-10 judul_about mb-10">
          Fasilitas Museum
        </h1>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Fasilitas1})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-1 judul_blog">Perpustakaan</p>
          </div>
        </Fade>

        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Fasilitas2})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-1 judul_blog">Ruang Seminar</p>
          </div>
        </Fade>

        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Fasilitas3})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-1 judul_blog">Ruang Pameran Temporer</p>
          </div>
        </Fade>

        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden mt-10">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Fasilitas4})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-1 judul_blog">Ruang Laboratorium</p>
          </div>
        </Fade>

        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden mt-10">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Fasilitas5})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-1 judul_blog">Toilet Umum</p>
          </div>
        </Fade>

        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden mt-10">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Fasilitas6})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-1 judul_blog">Tempat Ibadah</p>
          </div>
        </Fade>
      </div>

      <Fade duration={1000}>
        <h1 className="text-center mt-10 judul_about mb-10">Koleksi Museum</h1>
      </Fade>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto">
        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Koleksi1})`,
                backgroundSize: "cover",
                paddingTop: "100%",
              }}
            ></div>
          </div>
        </Fade>

        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Koleksi2})`,
                backgroundSize: "cover",
                paddingTop: "100%",
              }}
            ></div>
          </div>
        </Fade>

        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Koleksi3})`,
                backgroundSize: "cover",
                paddingTop: "100%",
              }}
            ></div>
          </div>
        </Fade>
      </div>

      <Fade duration={1000}>
        <h1 className="text-center mt-10 judul_about mb-10">Pameran Museum</h1>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 container mx-auto mb-20 text-center">
        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden shadow-lg mt-5">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Pameran1})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-1 judul_blog mb-2">Pameran Seni Kontemporer</p>
            <p className="mb-5 text_blog">
              Museum Galeri Nasional Indonesia sering mengadakan pameran seni
              kontemporer yang menampilkan karya-karya seniman Indonesia
              terkemuka. Pameran ini biasanya menampilkan berbagai medium
              seperti lukisan, patung, instalasi, dan karya seni baru lainnya.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUI4OsimUrqzc5GKWAuuph8IJ4yF7-psvwZ9bUwI_gn9o5Cw/viewform?pli=1"
              target="_blank"
              className="button flex justify-center"
            >
              Daftar Pameran
            </a>
          </div>
        </Fade>

        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden shadow-lg mt-5">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Pameran2})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-1 judul_blog mb-2">
              Pameran Seni Rupa Tradisional
            </p>
            <p className="mb-5 text_blog">
              Museum Galeri Nasional Indonesia juga sering menggelar pameran
              seni rupa tradisional untuk memperkenalkan seni tradisional
              Indonesia kepada masyarakat. Pameran ini dapat mencakup karya seni
              batik, ukiran kayu, seni kriya, dan banyak lagi.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUI4OsimUrqzc5GKWAuuph8IJ4yF7-psvwZ9bUwI_gn9o5Cw/viewform?pli=1"
              target="_blank"
              className="button flex justify-center"
            >
              Daftar Pameran
            </a>
          </div>
        </Fade>

        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden shadow-lg mt-5">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Pameran3})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-1 judul_blog mb-2">Pameran Fotografi</p>
            <p className="mb-5 text_blog">
              Pameran ini bisa menampilkan karya-karya fotografer Indonesia yang
              meliputi berbagai genre seperti dokumenter, potret, lanskap, dan
              lain-lain. Pameran fotografi menjadi ajang untuk memperlihatkan
              perkembangan dan inovasi dalam dunia fotografi.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUI4OsimUrqzc5GKWAuuph8IJ4yF7-psvwZ9bUwI_gn9o5Cw/viewform?pli=1"
              target="_blank"
              className="button flex justify-center"
            >
              Daftar Pameran
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Museum;
