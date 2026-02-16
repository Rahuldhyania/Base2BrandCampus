import React from 'react';
import TruckDispatcherUsa from '../Components/Page-Components/TruckDispatcherUsa';
import VideoPopup from '../Components/UiUx/VideoPopup';

export const metadata = {
    title: 'Truck Dispatching Course for USA | B2B Campus',
    description: 'Master USA truck dispatching with practical training, industry workflows, and expert guidance. Start a high-demand logistics career with B2B Campus.',
}
const page = () => {
    return (
        <div>
            <VideoPopup />
            <TruckDispatcherUsa />
        </div>
    )
}

export default page
