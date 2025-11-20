export default function ProblemSection() {
  const problems = [
    "Đã chi tiền cho công cụ AI liên tục, nhưng nhân sự không thực sự dùng hiệu quả và nhìn thấy được khác biệt rõ ràng?",
    "Đội ngũ Leader team loay hoay không biết bắt đầu 'AI-hóa' từ dự án nào, việc nào, phòng ban nào?",
    "Quan sát thấy đối thủ đã vận dụng và đang dần dẫn đầu, liệu mình đang chậm chân và bị bỏ lại?",
    "Đội ngũ lõi và toàn bộ nhân sự thiếu tư duy AI-First, một cách nào đó vẫn 'cũ' đi ?",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-900">
          Nhiều doanh nghiệp nghĩ mình đang {" "}
          <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            'thực thi AI'
          </span>{" "}
          nhưng thực chất chỉ là {" "}
          <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            'FOMO' <br/> 
          </span>
          Dấu hiệu của sự 'vỡ mộng' đó là:
        </h2>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-5">
          {problems.map((problem, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <span className="bg-red-400 bg-clip-text text-transparent font-bold text-2xl flex-shrink-0 mt-1">✗</span>
              <p className="text-lg text-blue-900 leading-relaxed">{problem}</p>
            </div>
          ))}

          <div className="border-t border-gray-300 pt-6 mt-8">
            <p className="text-xl font-extrabold text-center text-blue-900">
             Chúng ta không thiếu công cụ AI <br /> Có thể bạn đang thiếu một{" "}
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                đội ngũ lõi
              </span>{" "}
              cùng bạn để biến AI thành{" "}
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                lợi nhuận nhanh chóng và lợi thế cạnh tranh bền vững
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
