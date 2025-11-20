export default function ExpertsSection() {
  const experts = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gen-h-chuyengia1-GoWNZZa82psZgKYeL9UBYKrfOUjVfg.jpg",
      name: "Mr. Đặng Phước Huy Nhựt",
      role: "Founder - CEO AICI Global",
      color: "bg-blue-900 border-cyan-400",
      bio: [
        "07 năm đảm nhiệm vai trò Partner phát triển thị trường, chiến lược và vận hành tại các công ty quốc tế",
        "03 năm nghiên cứu và phát triển giải pháp AI ứng dụng cho doanh nghiệp",
        "Coach & Trainer tại AICI Global, chuyên tư vấn và triển khai AI ứng dụng",
      ],
      quote: '"Chúng tôi khẳng định rằng người Việt hoàn toàn có thể sáng tạo và đưa các giải pháp AI ra thế giới."',
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gen-h-chuyengia2-nFXIV4fz93qanKq1d3VEaxnYP6E7qw.jpg",
      name: "Ms. Đoàn Khánh Phương",
      role: "AI Business Solution Experts - CAIO AICI Global",
      color: "bg-blue-900 border-cyan-400",
      bio: [
        "5 năm Trainer/Tư vấn AI ứng dụng & chiến lược tăng trưởng cho doanh nghiệp",
        "Giám đốc Tăng trưởng – Co-founder AICI Global",
        "Cố vấn Growth Marketing tại ONEADS Digital",
        "Giảng viên tại FPT chuyên đào tạo AI ứng dụng",
      ],
      quote: '"Bài toán của AI không chỉ nằm ở công nghệ, mà là ở cách Leadership nhìn nhận và triển khai nó."',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Trainer - Expert 
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {experts.map((expert, idx) => (
            <div key={idx} className={`p-8 rounded-2xl shadow-lg border-l-4 ${expert.color}`}>
              <div className="flex flex-col items-center text-center gap-4">
                <img
                  src={expert.image || "/placeholder.svg"}
                  alt={expert.name}
                  className="w-80 h-80 rounded-full object-cover border-2 border-cyan-400 flex-shrink-0"
                />
                <div>
                  
                  <h3 className="text-2xl font-bold text-white">{expert.name}</h3>
                  <p className="text-cyan-300 font-semibold text-sm">{expert.role}</p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {expert.bio.map((item, idx) => (
                  <p key={idx} className="text-gray-100 text-xl leading-relaxed">
                    • {item}
                  </p>
                ))}
              </div>

              <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-sm text-gray-200">
                {expert.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
