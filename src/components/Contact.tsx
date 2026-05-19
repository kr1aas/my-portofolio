import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) {
      alert("Form belum siap!");
      return;
    }

    const nameInput = form.current.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.current.elements.namedItem('email') as HTMLInputElement;
    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();

    if (!name) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please enter your name!',
      });
      return;
    }

    if (!email) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please enter your email address!',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please enter a valid email address!',
      });
      return;
    }

    emailjs
      .sendForm(
        "service_lovrhkc",
        "template_9y2ddk9",
        form.current,
        "-A4SnbYSSNQT_46sg"
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Message sent successfully!',
          }).then(() => window.location.reload());
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Failed!',
            text: 'Failed to send: ' + error.text,
          });
        }
      );
  };

  return (
    <section id="contact" className="px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-slate-50">
      <div className="bg-portfolio-dark rounded-t-2xl md:rounded-t-3xl p-6 md:p-12 lg:p-16 -mx-4 md:-mx-8 lg:-mx-16 -mb-10 md:-mb-16 lg:-mb-20 pb-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-8 lg:mb-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-portfolio-orange text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold italic mb-4">Contact Me!</h2>
            <p className="text-white text-lg md:text-xl lg:text-2xl italic font-medium mb-8 md:mb-12">Let's Work Together</p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                <a href="mailto:krisnaastika71@gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-gray-300 border border-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 28 28" fill="none">
                      <path d="M23.3333 4.66675H4.66668C3.38334 4.66675 2.34501 5.71675 2.34501 7.00008L2.33334 21.0001C2.33334 22.2834 3.38334 23.3334 4.66668 23.3334H23.3333C24.6167 23.3334 25.6667 22.2834 25.6667 21.0001V7.00008C25.6667 5.71675 24.6167 4.66675 23.3333 4.66675ZM23.3333 9.33341L14 15.1667L4.66668 9.33341V7.00008L14 12.8334L23.3333 7.00008V9.33341Z" fill="black" />
                    </svg>
                  </div>
                </a>
                <span className="text-white text-sm md:text-lg lg:text-xl font-light break-all">krisnaastika71@gmail.com</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                <a href="https://github.com/kr1aas">
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-gray-300 border border-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 29 29" fill="none">
                      <path d="M8.48733 2.79113C9.39517 3.09748 10.2585 3.52247 11.055 4.05505C12.1806 3.76695 13.3381 3.62241 14.5 3.62488C15.6999 3.62488 16.8575 3.77471 17.9425 4.05384C18.7387 3.52178 19.6017 3.0972 20.509 2.79113C21.3512 2.50476 22.5511 2.04076 23.264 2.8298C23.7474 3.3663 23.8682 4.2653 23.954 4.95163C24.0507 5.71772 24.0736 6.7158 23.8199 7.70663C24.7902 8.95967 25.375 10.4544 25.375 12.0832C25.375 14.5506 24.0386 16.693 22.0605 18.1768C21.1081 18.8812 20.0524 19.4339 18.931 19.8153C19.1895 20.4074 19.3333 21.0623 19.3333 21.7499V25.3749C19.3333 25.6954 19.206 26.0027 18.9794 26.2293C18.7528 26.4559 18.4455 26.5832 18.125 26.5832H10.875C10.5545 26.5832 10.2472 26.4559 10.0206 26.2293C9.79397 26.0027 9.66666 25.6954 9.66666 25.3749V24.1774C8.5127 24.3188 7.54483 24.1931 6.72195 23.8439C5.86162 23.479 5.26228 22.9135 4.81158 22.3722C4.38383 21.8598 3.91741 20.7047 3.24316 20.4799C3.09257 20.4298 2.95333 20.3505 2.8334 20.2465C2.71346 20.1426 2.61518 20.016 2.54415 19.8741C2.40071 19.5874 2.37702 19.2555 2.47828 18.9514C2.57955 18.6473 2.79749 18.3958 3.08414 18.2524C3.3708 18.1089 3.7027 18.0852 4.00683 18.1865C4.81158 18.4548 5.33599 19.0348 5.69487 19.5012C6.27487 20.2503 6.74612 21.2291 7.66445 21.6194C8.04266 21.7801 8.59728 21.8852 9.46487 21.7668L9.66666 21.7257C9.66944 21.0682 9.80636 20.4181 10.069 19.8153C8.94755 19.4339 7.89186 18.8812 6.93945 18.1768C4.96141 16.693 3.62499 14.5518 3.62499 12.0832C3.62499 10.4568 4.20862 8.9633 5.17649 7.71146C4.92274 6.72063 4.94449 5.72013 5.04116 4.95284L5.0472 4.90692C5.13541 4.20367 5.23812 3.37596 5.73112 2.8298C6.44403 2.04076 7.64512 2.50596 8.48612 2.79234L8.48733 2.79113Z" fill="black" />
                    </svg>
                  </div>
                </a>
                <span className="text-white text-sm md:text-lg lg:text-xl font-light">Kr1aas</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                <a href="https://www.linkedin.com/in/krisna-astika-53284a22a/">
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-gray-300 border border-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 33 33" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M24.75 4.125C25.844 4.125 26.8932 4.5596 27.6668 5.33318C28.4404 6.10677 28.875 7.15598 28.875 8.25V24.75C28.875 25.844 28.4404 26.8932 27.6668 27.6668C26.8932 28.4404 25.844 28.875 24.75 28.875H8.25C7.15598 28.875 6.10677 28.4404 5.33318 27.6668C4.5596 26.8932 4.125 25.844 4.125 24.75V8.25C4.125 7.15598 4.5596 6.10677 5.33318 5.33318C6.10677 4.5596 7.15598 4.125 8.25 4.125H24.75ZM11 13.75C10.6353 13.75 10.2856 13.8949 10.0277 14.1527C9.76987 14.4106 9.625 14.7603 9.625 15.125V22C9.625 22.3647 9.76987 22.7144 10.0277 22.9723C10.2856 23.2301 10.6353 23.375 11 23.375C11.3647 23.375 11.7144 23.2301 11.9723 22.9723C12.2301 22.7144 12.375 22.3647 12.375 22V15.125C12.375 14.7603 12.2301 14.4106 11.9723 14.1527C11.7144 13.8949 11.3647 13.75 11 13.75ZM15.125 12.375C14.7603 12.375 14.4106 12.5199 14.1527 12.7777C13.8949 13.0356 13.75 13.3853 13.75 13.75V22C13.75 22.3647 13.8949 22.7144 14.1527 22.9723C14.4106 23.2301 14.7603 23.375 15.125 23.375C15.4897 23.375 15.8394 23.2301 16.0973 22.9723C16.3551 22.7144 16.5 22.3647 16.5 22V16.9675C16.9194 16.4945 17.6275 15.939 18.4154 15.6021C18.8732 15.4069 19.5621 15.3271 20.0406 15.4784C20.1994 15.5186 20.3407 15.6094 20.4435 15.7369C20.515 15.8331 20.625 16.0476 20.625 16.5V22C20.625 22.3647 20.7699 22.7144 21.0277 22.9723C21.2856 23.2301 21.6353 23.375 22 23.375C22.3647 23.375 22.7144 23.2301 22.9723 22.9723C23.2301 22.7144 23.375 22.3647 23.375 22V16.5C23.375 15.5787 23.1413 14.7592 22.6545 14.102C22.2066 13.506 21.5797 13.069 20.8656 12.8549C19.6254 12.4657 18.2518 12.6816 17.3346 13.0749C17.041 13.2012 16.755 13.3444 16.478 13.5039C16.4204 13.1871 16.2534 12.9005 16.0061 12.6942C15.7588 12.4879 15.447 12.375 15.125 12.375ZM11 9.625C10.6353 9.625 10.2856 9.76987 10.0277 10.0277C9.76987 10.2856 9.625 10.6353 9.625 11C9.625 11.3647 9.76987 11.7144 10.0277 11.9723C10.2856 12.2301 10.6353 12.375 11 12.375C11.3647 12.375 11.7144 12.2301 11.9723 11.9723C12.2301 11.7144 12.375 11.3647 12.375 11C12.375 10.6353 12.2301 10.2856 11.9723 10.0277C11.7144 9.76987 11.3647 9.625 11 9.625Z" fill="black" />
                    </svg>
                  </div>
                </a>
                <span className="text-white text-sm md:text-lg lg:text-xl font-light">Krisna Astika</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                <a href="https://www.instagram.com/krisnaastika?igsh=bGR4Zjh5NmpsdjZt">
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-gray-300 border border-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 25 25" fill="none">
                      <path d="M12.5 8.33325C11.3949 8.33325 10.3351 8.77224 9.55373 9.55364C8.77233 10.335 8.33334 11.3949 8.33334 12.4999C8.33334 13.605 8.77233 14.6648 9.55373 15.4462C10.3351 16.2276 11.3949 16.6666 12.5 16.6666C13.6051 16.6666 14.6649 16.2276 15.4463 15.4462C16.2277 14.6648 16.6667 13.605 16.6667 12.4999C16.6667 11.3949 16.2277 10.335 15.4463 9.55364C14.6649 8.77224 13.6051 8.33325 12.5 8.33325Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5L0 17.5C0 19.4891 0.790176 21.3968 2.1967 22.8033C3.60322 24.2098 5.51088 25 7.5 25H17.5C19.4891 25 21.3968 24.2098 22.8033 22.8033C24.2098 21.3968 25 19.4891 25 17.5V7.5C25 5.51088 24.2098 3.60322 22.8033 2.1967C21.3968 0.790176 19.4891 0 17.5 0L7.5 0ZM6.66667 12.5C6.66667 10.9529 7.28125 9.46917 8.37521 8.37521C9.46917 7.28125 10.9529 6.66667 12.5 6.66667C14.0471 6.66667 15.5308 7.28125 16.6248 8.37521C17.7188 9.46917 18.3333 10.9529 18.3333 12.5C18.3333 14.0471 17.7188 15.5308 16.6248 16.6248C15.5308 17.7188 14.0471 18.3333 12.5 18.3333C10.9529 18.3333 9.46917 17.7188 8.37521 16.6248C7.28125 15.5308 6.66667 14.0471 6.66667 12.5ZM18.3333 6.66667H20V5H18.3333V6.66667Z" fill="black" />
                    </svg>
                  </div>
                </a>
                <span className="text-white text-sm md:text-lg lg:text-xl font-light">krisnaastika</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail} className="space-y-3 md:space-y-4 mt-12">
              <div>
                <input
                  type="text"
                  name='name'
                  placeholder="Your Name"
                  className="w-full h-10 md:h-12 border border-black rounded-lg px-3 md:px-4 bg-gray-300 text-black text-sm md:text-lg lg:text-xl italic placeholder-black"
                />
              </div>
              <div>
                <input
                  type="email"
                  name='email'
                  placeholder="Email address"
                  className="w-full h-10 md:h-12 border border-black rounded-lg px-3 md:px-4 bg-gray-300 text-black text-sm md:text-lg lg:text-xl italic placeholder-black"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  name='message'
                  rows={4}
                  className="w-full border border-black rounded-lg p-3 md:p-4 bg-gray-300 text-black text-sm md:text-lg lg:text-xl italic placeholder-black resize-none md:rows-6"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-lg md:text-xl lg:text-2xl font-bold 
               hover:bg-opacity-90 hover:scale-105 hover:shadow-lg
               active:scale-95 active:bg-opacity-80
               transition-all duration-200 ease-in-out
               flex items-center justify-center gap-2 w-full md:w-auto
               focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
              >
                Send
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 transition-transform duration-200 ease-in-out hover:translate-x-1"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M5.62502 13.5001L4.94552 7.38349C4.7509 5.63299 6.55315 4.34712 8.14502 5.10199L21.582 11.4672C23.2976 12.2795 23.2976 14.7207 21.582 15.533L8.14502 21.8994C6.55315 22.6531 4.7509 21.3684 4.94552 19.6179L5.62502 13.5001ZM5.62502 13.5001H13.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 pb-2">
          <div className="text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2024 Krisna Astika. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
