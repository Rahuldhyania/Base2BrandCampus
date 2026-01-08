import React from 'react'
import Globaltitle from '../Components/UiUx/Globaltitle'
import PressReleases from '../Components/Page-Components/PressReleases'

export  const metadata = {
  title : 'Latest Press Releases – News & Media | B2B Campus',
  description : 'Read official B2B Campus press releases and news updates. Get insights into milestones, major announcements, achievements, events, and emerging industry trends.'
}
const page = () => {
    return (
        <div>
            <div
                className="banner_section bg-cover bg-center bg-primary"
                // style={{ backgroundImage: "url(/images/knowledgecenterbg.webp)" }}
            >
                <div className="cus_container py-12 md:py-16">
                    <Globaltitle
                        highlightText="Press Releases"
                        description="Featured press releases and latest announcements"
                    />
                </div>
            </div>

            <PressReleases />
        </div>
    )
}

export default page
