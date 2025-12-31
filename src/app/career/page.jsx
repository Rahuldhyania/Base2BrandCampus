import React from 'react'
import PageBanner from '../Components/Page-Components/PageBanner'
import Career from '../Components/Page-Components/Career'

export  const metadata = {
  title : 'Career Guidance & Personalized Career Support | B2B Campus',
  description : 'Get expert career advice and personalized career guidance at B2B Campus. Our counselors help you explore job paths, industry trends, and achieve career success.'
}
const page = () => {
    return (
        <div>
          <Career />  
        </div>
    )
}

export default page
