'use client'

import { useEffect, useState } from 'react'

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set target date: December 9, 2025, 11:59 PM
      const targetDate = new Date('2025-12-12T08:30:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 rounded-lg px-6 py-4 sm:px-8 sm:py-6 mb-2 min-w-20 sm:min-w-24">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm sm:text-base font-semibold text-blue-700 uppercase tracking-wide">{label}</span>
    </div>
  )

  return (
    <section className="py-20 sm:py-24 px-8 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-8xl mx-auto">
        <h2 className="font-be-vietnam text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-800 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-8 lg:text-5xl leading-tight">
          Chương trình sẽ bắt đầu sau
        </h2>
        <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
          <CountdownBox value={timeLeft.days} label="Ngày" />
          <CountdownBox value={timeLeft.hours} label="Giờ" />
          <CountdownBox value={timeLeft.minutes} label="Phút" />
          <CountdownBox value={timeLeft.seconds} label="Giây" />
        </div>
      </div>
    </section>
  )
}
