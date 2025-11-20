'use client'

export default function CarouselSection() {
  const logoImages = [
    '/carousel/Logo/mocgia.jpg',
    '/carousel/Logo/Mb.jpg',
    '/carousel/Logo/vietinbanl.jpg',
    '/carousel/Logo/mbs.jpg',
    '/carousel/Logo/10x-value.jpg',
    '/carousel/Logo/oneads.jpg',
    '/carousel/Logo/seniart.jpg',
    '/carousel/Logo/fpt.jpg',
  ]

  const classroomImages = [
    '/carousel/classroom/hinh_1.jpg',
    '/carousel/classroom/hinh_2.jpg',
    '/carousel/classroom/hinh_3.jpg',
    '/carousel/classroom/hinh_4.jpg',
    '/carousel/classroom/hinh_5.jpg',
    '/carousel/classroom/hinh_6.jpg',
    '/carousel/classroom/hinh_7.jpg',
    '/carousel/classroom/hinh_8.jpg',
    '/carousel/classroom/hinh_9.jpg',
  ]

return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        
        {/* ⭐️ TIÊU ĐỀ CHO CAROUSEL LOGO */}
        <h3 className="text-center text-xl sm:text-2xl font-bold mb-6 text-white">
          ĐỐI TÁC & KHÁCH HÀNG ĐÃ ĐỒNG HÀNH CÙNG AICI
        </h3>

        {/* Row 1: Logo images scrolling right to left */}
        <div className="mb-12 overflow-hidden">
          <div className="flex gap-4 animate-scroll-left">
            {[...logoImages, ...logoImages].map((img, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-64 h-40 sm:w-80 sm:h-48
                           rounded-lg overflow-hidden shadow-lg hover:shadow-2xl 
                           transition-shadow bg-white"
              >
                <img 
                  src={img || "/placeholder.svg"} 
                  alt={`Logo carousel item ${idx}`}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ⭐️ TIÊU ĐỀ CHO CAROUSEL CLASSROOM */}
        <h3 className="text-center text-xl sm:text-2xl font-bold mb-6 text-white">
          HOẠT ĐỘNG TRAINING, COACHING & WORKSHOP
        </h3>

        {/* Row 2: Classroom images scrolling left to right */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-right">
            {[...classroomImages, ...classroomImages].map((img, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-64 h-40 sm:w-80 sm:h-48 
                           rounded-lg overflow-hidden shadow-lg 
                           hover:shadow-2xl transition-shadow"
              >
                <img 
                  src={img || "/placeholder.svg"} 
                  alt={`Classroom carousel item ${idx}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
