const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Reach out to us for inquiries, custom orders, or collaborations.
            We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6 bg-white dark:bg-neutral-800 shadow-lg p-8 rounded-lg">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-neutral-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-neutral-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message"
                  className="w-full mt-2 px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-neutral-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-teal-600 text-white text-lg font-bold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                Our Location
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                123 Calligraphy Lane, Creativity City, Artistan
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                Email Us
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                contact@snehacalligraphy.com
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                Call Us
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                +123-456-7890
              </p>
            </div>

            {/* Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345092745!2d144.95592581546088!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sCreative+Lane!5e0!3m2!1sen!2s!4v1644728042934!5m2!1sen!2s"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
