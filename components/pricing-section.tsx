// "use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingSection() {
  // Function to handle package selection and scroll to form
  const handlePackageSelect = (packageType: "2-day" | "3-day") => {
    // SỬA LỖI: Thay đổi ID từ "cta" thành "registration-form" cho khớp với CTASection
    const ctaSection = document.getElementById("registration-form")
    
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" })

      // Set the select value after a slight delay to ensure form is visible
      setTimeout(() => {
        const selectElement = document.querySelector('select[name="package"]') as HTMLSelectElement
        
        if (selectElement) {
          // Cách 1: Gán giá trị trực tiếp (cho hiển thị UI)
          selectElement.value = packageType;

          // Cách 2: Kích hoạt sự kiện change để React State (formData) cập nhật theo
          // Vì React kiểm soát input, ta cần dispatch event để state bắt được thay đổi
          const event = new Event('change', { bubbles: true });
          selectElement.dispatchEvent(event);
        }
      }, 500) // Tăng delay lên chút để đảm bảo scroll xong
    } else {
      console.error("Không tìm thấy section có id='registration-form'. Hãy kiểm tra lại file CTASection.")
    }
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-center mb-6 leading-tight text-white [text-shadow:_0_0_50px_#00E5FF,0_0_15px_#0033AA]">
          THAM GIA
        </h2>

        {/* Subtitle with gradient text */}
        <p className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          2 NGÀY HUẤN LUYỆN AI THỰC CHIẾN + 1 NGÀY WORKSHOP
        </p>

        <div className="mb-8 overflow-x-auto rounded-3xl shadow-3xl">
          <table className="w-full text-white">
            <thead>
              <tr>
                <th className="px-6 py-6 text-center text-4xl font-black border-b-2 border-cyan-400/50">
                  Nội dung chi tiết
                </th>
                <th className="px-6 py-6 text-center text-lg font-black text-white border-b-2 border-gray-400">
                  GÓI "TƯ DUY"
                  <br />
                  <span className="text-base">(2 NGÀY)</span>
                </th>
                <th className="px-6 py-6 text-center text-lg font-black  text-white border-b-2 border-gray-400 ">
                  <div>
                    GÓI "THỰC CHIẾN"
                    <br />
                    <span className="text-base">(3 NGÀY)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-900/50 divide-y divide-purple-700/30">
              {/* Feature rows */}
              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">2 Ngày huấn luyện Tư duy & Công cụ AI Thực Chiến</td>
                <td className="px-6 py-4 text-center text-white">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
                <td className="px-6 py-4 text-center  text-slate-900">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">Bộ Hớng Dẫn Công cụ & Webinar hàng tháng (update 3 tháng)</td>
                <td className="px-6 py-4 text-center text-white">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
                <td className="px-6 py-4 text-center  text-slate-900">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">Bộ test năng lực AI cho toàn bộ nhân sự sau Chương trình</td>
                <td className="px-6 py-4 text-center text-white">
                  
                </td>
                <td className="px-6 py-4 text-center  text-slate-900">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">Tham gia Workshop Thực chiến Ngày 3 - kèm bởi Experts</td>
                <td className="px-6 py-4 text-center text-white">
                  
                </td>
                <td className="px-6 py-4 text-center  text-slate-900">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">Coaching cho DN trước Workshop - 1 giờ với CEO</td>
                  <td className="px-6 py-4 text-center text-white">
            
                  </td>
                <td className="px-6 py-4 text-center  text-gray-300">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/50 transition">
                <td className="px-6 py-4 text-left font-semibold">1 buổi Follow-up trong 20 ngày sau chương trình</td>
                <td className="px-6 py-4 text-center text-white">
                  
                </td>
                <td className="px-6 py-4 text-center  text-slate-900">
                  <Check className="w-6 h-6 text-white mx-auto" strokeWidth={3} />
                </td>
              </tr>

              {/* Pricing rows */}
              <tr className="bg-slate-800/50 font-black text-lg">
                <td className="px-6 py-5 text-left">ĐĂNG KÝ NHÓM DOANH NGHIỆP (CEO + NHÂN SỰ)</td>
                <td className="px-6 py-5 text-center text-blue-300 line-through">7.000.000đ</td>
                <td className="px-6 py-5 text-center  text-pink-300 line-through">
                  8.000.000đ
                </td>
              </tr>

              <tr className="bg-slate-800/20 font-bold text-2xl">
                <td className="px-6 py-5 text-left">Đăng ký sớm trước 30.11</td>
                <td className="px-6 py-5 text-center text-blue-600">4.200.000đ</td>
                <td className="px-6 py-5 text-center text-pink-600">
                  4.800.000đ
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30 rounded-2xl p-8 mb-6 text-center" bis_skin_checked="1">
          <p class="text-xl text-cyan-200 font-semibold mb-6">
            Tối ưu ngân sách cho doanh nghiệp – chỉ từ 1.600.000đ / nhân sự / ngày
          </p>
          <p class="text-lg text-gray-300 font-semibold mb-2">
            <span class="text-yellow-300 font-black">⚡ 
              Giới hạn 20 Doanh nghiệp – 50 học viên
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            onClick={() => handlePackageSelect("2-day")}
            className="bg-white hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 text-blue-700 font-black py-4 px-10 text-lg uppercase tracking-widest rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-600/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            ĐĂNG KÝ NHIỀU HƠN
          </Button>
          <Button
            onClick={() => handlePackageSelect("3-day")}
            className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 text-white font-black py-4 px-10 text-lg uppercase tracking-widest rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-600/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            TƯ VẤN NHANH: 0903 78 01 28
          </Button>
        </div>
      </div>
    </section>
  )
}
