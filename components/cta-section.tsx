"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    package: "",
    quantity: 2,
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiError, setApiError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Math.max(2, Number.parseInt(value) || 2) : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }))
    }
    setApiError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!formData.name) newErrors.name = true
    if (!formData.phone) newErrors.phone = true
    if (!formData.company) newErrors.company = true
    if (!formData.email) newErrors.email = true
    if (!formData.package) newErrors.package = true
    if (formData.quantity < 2) newErrors.quantity = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)
    setApiError("")

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      let responseData
      const contentType = response.headers.get('content-type')
      
      if (contentType?.includes('application/json')) {
        responseData = await response.json()
      } else {
        const text = await response.text()
        console.error("Non-JSON response:", text.substring(0, 100))
        responseData = { error: "Server error - please check console logs" }
      }

      if (response.ok && responseData.success) {
        setShowSuccess(true)
      } else {
        console.error("API error:", responseData)
        setApiError(responseData.error || "Có lỗi khi gửi form. Vui lòng thử lại.")
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setApiError("Có lỗi khi gửi form. Vui lòng thử lại.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="registration-form" className="py-25 px-8 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-cyan-300 mb-3 tracking-wide text-center">
          Kích hoạt Đội ngũ AI – Ready ngay hôm nay!
        </h2>
        <p className="text-xl font-light mb-8 text-gray-200">
          Chỉ còn <span className="text-red-500 font-bold">vài vé Early Bird</span> - Giới hạn 20 Doanh nghiệp.
        </p>

        {/* Contact Form */}
        {!showSuccess ? (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl space-y-4 mb-10 text-gray-800">
            {apiError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                {apiError}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Họ & Tên *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nhập họ tên của bạn"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Số điện thoại *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Tên Doanh nghiệp *</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Nhập tên doanh nghiệp"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.company ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Email liên hệ *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Nhập email của bạn"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Gói Đăng Ký *</label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.package ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                    }`}
                  >
                    <option value="">Chọn Gói Đăng Ký</option>
                    <option value="3-day">Gói THỰC CHIẾN (3 Ngày)</option>
                    <option value="2-day">Gói TỰ DUY (2 Ngày)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Số lượng học viên *</label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Nhập số lượng"
                    min="2"
                    value={formData.quantity}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.quantity ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                    }`}
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 text-white font-black py-5 px-8 rounded-2xl text-xl uppercase tracking-wider mt-8 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-2xl hover:shadow-purple-600/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "ĐANG GỬI..." : "ĐĂNG KÝ GIỮ CHỖ NGAY"}
            </Button>
          </form>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-2xl mb-10 border-4 border-green-500">
            <h3 className="text-4xl font-black mb-4 text-center text-green-500">✓ ĐĂNG KÝ THÀNH CÔNG</h3>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Cảm ơn bạn đã quan tâm đến workshop. Chúng tôi sẽ liên hệ lại với bạn trong 24h.
            </p>

            <Button
              onClick={() => {
                setShowSuccess(false)
                setFormData({
                  name: "",
                  phone: "",
                  company: "",
                  email: "",
                  package: "",
                  quantity: 2,
                })
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-lg uppercase"
            >
              ĐĂNG KÝ THÊM
            </Button>
          </div>
        )}

        {/* Contact Info */}
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-lg font-semibold text-white">HỖ TRỢ TRỰC TIẾP & TƯ VẤN GÓI COMBO:</p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 px-6 py-3 rounded-full border border-pink-500 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 shadow-lg text-white">
            <span className="font-bold text-white whitespace-nowrap">Kim Chi – CMO AICI Global</span>

            <a
              href="tel:0903780128"
              className="flex items-center gap-2 hover:text-cyan-300 transition whitespace-nowrap"
            >
              <span className="text-xl">📞</span>
              <span>090.378.0128</span>
            </a>

            <a
              href="mailto:kimchi@aiciglobal.com"
              className="flex items-center gap-2 hover:text-cyan-300 transition whitespace-nowrap"
            >
              <span className="text-xl">✉️</span>
              <span>kimchi@aiciglobal.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
