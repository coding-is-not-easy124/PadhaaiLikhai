import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    
    <div className="pb-14 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
        Testimonials
      </h2>
      <p className="md:text-base text-gray-500 mt-3 text-center max-w-2xl mx-auto">
        Hear from our learners as they share their journeys of transformation, success, 
        and how our platform has made a difference in their lives.
      </p>

      <div className="grid ml-72 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col justify-between min-h-[360px] text-left border border-gray-200 
            rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h1>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mt-5">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(testimonial.rating)
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="star"
                  className="h-5"
                />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-600 mt-4 line-clamp-4">
              {testimonial.feedback}
            </p>

            {/* Read More */}
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection