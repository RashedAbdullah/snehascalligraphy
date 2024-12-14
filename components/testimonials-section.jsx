import React from 'react'

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            What Our Customers Say
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example testimonial */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-500 dark:text-neutral-400">
                  &quot;The calligraphy piece I ordered exceeded all
                  expectations. It&apos;s now the highlight of my living
                  room!&quot;
                </p>
                <h3 className="mt-4 font-semibold text-teal-600 dark:text-teal-400">
                  - Customer Name {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TestimonialsSection