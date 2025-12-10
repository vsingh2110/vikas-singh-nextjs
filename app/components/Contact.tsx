'use client'

import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const [phone, setPhone] = useState<string | undefined>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Add phone number to form data
    if (phone) {
      formData.append('phone', phone)
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setFormStatus('success')
        setFormMessage('Thank you! Your message has been sent successfully. You will receive a confirmation email shortly.')
        form.reset()
        setPhone('')
        setTimeout(() => {
          setFormStatus('idle')
          setFormMessage('')
        }, 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setFormStatus('error')
      setFormMessage('Oops! Something went wrong. Please try again or email me directly at vsingh2110@gmail.com')
      setTimeout(() => {
        setFormStatus('idle')
        setFormMessage('')
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-medium font-heading mb-12 md:mb-16 relative pb-5">
          Contact me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 md:w-64 h-0.5 bg-gray-800"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-base sm:text-lg md:text-xl text-brand-crimson bg-[#F3F4F6] px-2">
            get in touch
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-medium mb-4">Get in Touch</h3>
            <p className="text-gray-700 text-base md:text-lg lg:text-[22px] xl:text-[26px] 2xl:text-[30px] mb-8">
              Please email or call me for any queries or requests related to Drupal, Wordpress, Paid Ads on
              Google/FB/Linkedin, or any Digital Marketing Support.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-brand-crimson text-2xl lg:text-3xl xl:text-4xl mt-1"></i>
                <div>
                  <h4 className="text-lg lg:text-xl xl:text-2xl font-medium mb-1">Address</h4>
                  <p className="text-gray-600 lg:text-lg xl:text-xl">Faridabad, Delhi(NCR) Haryana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fa fa-phone text-brand-crimson text-2xl lg:text-3xl xl:text-4xl mt-1"></i>
                <div>
                  <h4 className="text-lg lg:text-xl xl:text-2xl font-medium mb-1">Mobile</h4>
                  <a
                    href="tel:+91-9716186925"
                    className="text-gray-600 hover:text-brand-crimson transition-colors lg:text-lg xl:text-xl"
                  >
                    +91-9716186925
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-brand-crimson text-2xl lg:text-3xl xl:text-4xl mt-1"></i>
                <div>
                  <h4 className="text-lg lg:text-xl xl:text-2xl font-medium mb-1">Send Email</h4>
                  <a
                    href="mailto:vsingh2110@gmail.com"
                    className="text-gray-600 hover:text-brand-crimson transition-colors break-all lg:text-lg xl:text-xl"
                  >
                    vsingh2110@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-medium mb-6">Message me</h3>
            
            {formMessage && (
              <div className={`mb-4 p-4 rounded-md ${
                formStatus === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {formMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="a9e602ea-979f-4174-bd9f-8bc97568b2d0" />
              
              {/* Optional: Redirect after submission */}
              <input type="hidden" name="redirect" value="false" />
              
              {/* Bot check - keeps bots away */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              {/* Optional: Enable auto-reply to user */}
              <input type="hidden" name="from_name" value="Vikas Singh Portfolio" />

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  disabled={formStatus === 'submitting'}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  disabled={formStatus === 'submitting'}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              
              {/* Phone Number with Country Selector */}
              <div className="phone-input-wrapper">
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={phone}
                  onChange={setPhone}
                  disabled={formStatus === 'submitting'}
                  placeholder="Phone Number *"
                  className="w-full"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
                disabled={formStatus === 'submitting'}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <textarea
                name="message"
                cols={30}
                rows={10}
                placeholder="Message (Optional)"
                disabled={formStatus === 'submitting'}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              ></textarea>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="bg-brand-crimson hover:bg-brand-crimson-dark text-white text-lg font-medium px-8 py-3 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send message'}
              </button>
            </form>
            
            <style jsx>{`
              .phone-input-wrapper :global(.PhoneInput) {
                width: 100%;
              }
              .phone-input-wrapper :global(.PhoneInputInput) {
                width: 100%;
                padding: 0.75rem 1rem;
                border: 1px solid #d1d5db;
                border-radius: 0.375rem;
                font-size: 1rem;
                outline: none;
              }
              .phone-input-wrapper :global(.PhoneInputInput:focus) {
                ring: 2px;
                ring-color: #dc143c;
                border-color: transparent;
              }
              .phone-input-wrapper :global(.PhoneInputInput:disabled) {
                opacity: 0.5;
                cursor: not-allowed;
              }
              .phone-input-wrapper :global(.PhoneInputCountrySelect) {
                margin-right: 0.5rem;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}
