import React from "react";
import "./Style.css";
import Blog1 from "../img/blog_1.jpg";
import Blog2 from "../img/blog_2.jpg";
import Blog3 from "../img/blog_3.jpg";
import Blog4 from "../img/blog_4.jpg";
import { Fade } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const Blog = () => {
  return (
    <div>
      <Fade duration={1000}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 mt-5 container mb-10 mx-auto">
          <div className="col-span-1 sm:col-span-1 flex items-center justify-center rounded overflow-hidden">
            <img src={Blog1} alt="blog utama" className="blog_utama_img" />
          </div>
          <div className="col-span-1 sm:col-span-2 p-4">
            <p className="date_blog_utama">Jumat, 15 April 2023</p>
            <p className="mt-3 mb-2 judul_blog">
              Museum Galeri Nasional: Sejarah, Koleksi, & Jam Operasional
            </p>
            <p className="mb-5 text_blog">
              sebagai salah satu kota yang menyimpan banyak nilai sejarah,
              Jakarta memiliki banyak sekali tempat dan bangunan bersejarah.
              Salah satunya adalah Museum Galeri Nasional yang berfokus pada
              karya seni rupa modern dan kontemporer...
            </p>
            <div className="icon_link blog_side mb-5">
              <div className="flex flex-col">
                <div className="flex items-center box_icon">
                  <a
                    href="https://instagram.com/galerinasional/"
                    target="_blank"
                    className="flex items-center mb-3 icon_link"
                  >
                    <div className="icon_bg_blog">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-person icon_kontak_blog"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    </div>
                    <div className="icon_text ml-2 mx-1">
                      <span className="text_blog_icon flex flex-col align-items-start nama_penulis">
                        AlaCASA
                      </span>
                      <p className="pekerjaan_penulis">Admin</p>
                    </div>
                  </a>
                </div>
                <div className="flex justify-end">
                  <a
                    href="https://alacasa.id/article/read/4/2023/6065/museum-galeri-nasional-sejarah-koleksi-jam-operasional"
                    target="_blank"
                    className="button"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 container mx-auto mb-30">
        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden mt-5">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Blog2})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-5 date_blog_utama">Jumat, 13 Mei 2022</p>
            <p className="mt-1 judul_blog mb-3">
              Menjelajahi Keunikan Seni Indonesia di Galeri Nasional
            </p>
            <p className="mb-5 text_blog">
              Galeri Nasional Indonesia adalah salah satu art space yang ada di
              Ibukota Jakarta. Terdapat banyak sekali karya seni rupa...
            </p>
            <a
              href="https://www.ef.co.id/englishfirst/kids/blog/menjelajahi-keunikan-seni-indonesia-di-galeri-nasional/"
              target="_blank"
              className="button flex"
              style={{ width: "112px" }}
            >
              Read More
            </a>
          </div>
        </Fade>
        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden mt-5">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Blog3})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-5 date_blog_utama">Minggu, 4 Juni 2023</p>
            <p className="mt-1 judul_blog mb-3">
              Galeri Naisonal Indonesia Tiket, Pameran & Ekshibisi Juli 2023
            </p>
            <p className="mb-5 text_blog">
              Pada tanggal 8 Mei 1999, Galeri Nasional Indonesia (GNI) resmi
              beroperasi yang disahkan oleh Menteri...
            </p>
            <a
              href="https://travelspromo.com/htm-wisata/galeri-nasional-indonesia/"
              target="_blank"
              className="button flex"
              style={{ width: "112px" }}
            >
              Read More
            </a>
          </div>
        </Fade>
        <Fade duration={1000}>
          <div className="card w-full max-w-sm rounded overflow-hidden mt-5">
            <div
              className="p-4 relative"
              style={{
                backgroundImage: `url(${Blog4})`,
                backgroundSize: "cover",
                paddingTop: "60%",
              }}
            ></div>
            <p className="mt-5 date_blog_utama">Rabu, 31 Agustus 2022</p>
            <p className="mt-1 judul_blog mb-3">
              Cara ke Galeri Nasional Naik KRL dan MRT
            </p>
            <p className="mb-5 text_blog">
              Cara ke Galeri Nasional bisa ditempuh dengan transportasi umum,
              seperti KRL Commuter Line dan MRT...
            </p>
            <a
              href="https://news.detik.com/berita/d-6265256/cara-ke-galeri-nasional-naik-krl-dan-mrt"
              target="_blank"
              className="button flex"
              style={{ width: "112px" }}
            >
              Read More
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Blog;
