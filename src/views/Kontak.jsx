import React, { useState } from "react";
import "./Style.css";
import { Fade } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const Kontak = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    // Reset form fields
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 2000); // Menghilangkan pesan setelah 2 detik (2000 milidetik)
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
        <Fade duration={1000}>
          <div className="p-4 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 shadow-lg sm:w-full md:w-3/4">
              <form onSubmit={handleFormSubmit}>
                <h1 className="judul_form mb-5">Hubungi Kami</h1>
                {/* Form input fields */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-semibold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-semibold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-semibold mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full h-32 resize-none focus:outline-none focus"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="button">
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </Fade>

        <div className="p-4 flex flex-col justify-center md:w-3/4 sm:w-full">
          <Fade duration={1000}>
            <h1 className="semi_judul mb-5">Informasi Kontak</h1>
          </Fade>

          <Fade duration={1000}>
            <p className="text_kontak mb-5">
              Kami menghargai setiap interaksi dengan pengunjung kami. Jika Anda
              memiliki pertanyaan, masukan, atau sekadar ingin berbagi
              pengalaman, jangan ragu untuk menghubungi kami. Tim kami siap
              memberikan bantuan dan menjawab pertanyaan Anda sebaik mungkin.
            </p>
          </Fade>
          <div className="">
            <Fade duration={1000}>
              <div className="icon_link">
                <a
                  href="mailto:galeri.nasional@kemdikbud.go.id"
                  target="_blank"
                  className="flex items-center mb-3 icon_link"
                >
                  <div className="icon_bg mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope-open icon_kontak"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text_kontak_icon ml-3">
                      galeri.nasional@kemdikbud.go.id
                    </span>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade duration={1000}>
              <div className="icon_link">
                <a
                  href="https://wa.me/085718793077/"
                  target="_blank"
                  className="flex items-center mb-3 icon_link"
                >
                  <div className="icon_bg mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telephone icon_kontak"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text_kontak_icon ml-3">
                      +62 85718793077
                    </span>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade duration={1000}>
              <div className="icon_link">
                <a
                  href="https://intsagram.com/galerinasional/"
                  target="_blank"
                  className="flex items-center mb-3 icon_link"
                >
                  <div className="icon_bg mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram icon_kontak"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text_kontak_icon ml-3">
                      museumgaleriindonesia
                    </span>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
          {isFormSubmitted && (
            <div className="fixed top-14 right-0 p-4 bg-green-500 text-white z-10">
              Terima kasih telah menghubungi kami!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kontak;
