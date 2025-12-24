import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Loader } from 'lucide-react';

import Swal from 'sweetalert2';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Must enter all the fields!')
      return;
    }

    const serviceId = 'service_o9bqitg'
    const templateId = 'template_adx41fr'
    const publicKey = '_wTrZthGtB6nxGnxf'

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        alert('Email sent successfully, we will reach out to you soon!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          message: ''
        })
        console.log('SUCCESS!', response.status)
        setLoading(false)
      })
      .catch((error) => {
        console.log('ERROR!', error)
        setLoading(false)
      })
  };

  return (
    <>
      <div className="flex h-full items-center justify-center bg-gradient-to-tl from-slate-50 via-slate-100 to-slate-200 p-10">
        <div className="flex h-full w-full shadow-lg lg:shadow-none">
          <div className="flex w-full items-center justify-center bg-gradient-to-br from-emerald-500 via-emerald-600 to-purple-700 bg-cover bg-bottom bg-no-repeat shadow-xl shadow-emerald-600 hidden md:block">
            <div className="items-center justify-center mt-20 h-fit w-full text-center mx-auto">
              <h1 className="font-serif text-2xl font-semibold text-white">
                Contact Info
              </h1>
              <h1 className="mt-5 text-base text-slate-100 font-medium">
                Safar Andaman is your one-stop destination for an
                unforgettable trip to Andaman Islands
              </h1>
              <div className="mt-5 flex gap-2 text-white mx-auto text-center">
                <h1 className="text-base font-medium text-center mx-auto">
                  safarandaman@gmail.com
                </h1>
              </div>
              <div className="mt-5 flex flex-col gap-2 text-white mx-auto text-center underline">
                <Link
                  to="tel:+917063516120"
                  className="text-base font-medium text-center mx-auto"
                >
                  +91 7063516120
                </Link>
                <Link
                  to="tel:++919679597655"
                  className="text-base font-medium text-center mx-auto"
                >
                  +91 9679597655
                </Link>
              </div>
              <div className="mt-5 flex gap-2 text-white mx-auto text-center">
                <h1 className="text-base font-medium text-center mx-auto">
                  Port Blair, South Andaman, 744101
                </h1>
              </div>
            </div>
          </div>
          <div className="relative h-fit w-full shadow-lg shadow-emerald-600 drop-shadow-xl lg:h-fit lg:w-full">
            <h1 className="mt-28 md:mt-20 px-5 text-center text-3xl font-semibold text-black">
              Contact Us
            </h1>
            <form className="w-full p-2 md:p-5" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between flex-col lg:items-start">
                <div className="grow px-5 py-2 w-full lg:p-0">
                  <label
                    htmlFor="name"
                    className="block w-[] font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Your Name"
                    onChange={(e) => handleChange('name', e.target.value)}
                    className=" w-full rounded-md border bg-white p-2 font-medium text-gray-700"
                    required
                  />
                </div>
                <div className="grow px-5 py-2 w-full lg:p-0 lg:pt-3">
                  <label
                    htmlFor="email"
                    className="block font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Your Email ID"
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full rounded-md border bg-white p-2 text-gray-700"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between flex-col lg:items-start">
                <div className="grow px-5 py-2 w-full lg:p-0">
                  <label
                    htmlFor="phoneNumber"
                    className="block font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone Number"
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full rounded-md border bg-white p-2 text-gray-700"
                    required
                  />
                </div>
                <div className="grow px-5 py-2 w-full lg:p-0 lg:pt-3">
                  <label
                    htmlFor="date"
                    className="block font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="arrival"
                    name="date"
                    value={formData.date}
                    placeholder="Today's Date"
                    onChange={(e) => handleChange('date', e.target.value)}
                    className="w-full rounded-md border bg-white p-2  text-gray-700"
                    required
                  />
                </div>
              </div>
              <div className="grow px-5 py-2 lg:px-0">
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Type here your query or request for more information on packages"
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="h-[7rem] w-full rounded-md border bg-white p-2 text-gray-700"
                  required
                ></textarea>
              </div>

              <div className="lg:mt- mt-3 px-5 lg:flex-col lg:items-start lg:px-0">
                <button
                  // onClick={() => (formData.message ? success() : alert())}
                  type="submit"
                  className="flex items-center gap-4 w-fit rounded-md bg-gradient-to-br from-emerald-500 via-emerald-600 to-purple-700 py-2 px-4 text-white duration-300 ease-in-out hover:scale-105"
                  disabled={loading}
                >
                  {loading && <span className='animate-spin '><Loader /></span>}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
