import React from 'react'

const VideoPopupCompo = () => {
  return (
    <div className='pb-12 px-4'>
       <div
        className="relative bg-[#0b0b0b] text-white rounded-2xl m-auto shadow-2xl w-full max-w-4xl overflow-hidden pt-5"
      >

        <div className="w-full h-[25vh] md:h-[50vh] bg-black px-5">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fq1XnfhG7r4?autoplay=0&mute=0&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
            frameBorder="0"
            allow="autoplay"
            className="w-full h-full"
          />
        </div>

        <div className="px-4 md:px-10 md:pt-5 pb-5 space-y-3">
          <h2 className="text-lg md:text-xl font-semibold">
            💼 Turn Your Time Into <span className="text-blue-400">Dollar Skills</span>
          </h2>

          <p className="text-sm text-gray-300">
            The logistics industry in the US is growing fast — trained dispatchers are in demand.
          </p>

          <p className="text-sm text-gray-300">
            Learn real dispatch workflows, rate negotiation & live market understanding.
          </p>

          <div className="text-xs text-gray-400">
            📍 Offline in Mohali <br />
            🌐 Online across India
          </div>

          <p className="text-sm text-gray-200">
            This skill can change your career direction.
          </p>

          <a
            href="tel:+919872487850"
            className="block text-center bg-blue-600 text-white text-sm px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            📞 Call Now to Reserve Your Seat
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoPopupCompo
