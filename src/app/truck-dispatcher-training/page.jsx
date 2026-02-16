import React from "react";
import TruckDispatcher from "../Components/Page-Components/TruckDispatcher";
import VideoPopup from "../Components/UiUx/VideoPopup";
export const metadata = {
  title: "Truck Dispatcher Training | Truck Dispatching Course | B2B Campus",
  description:
    "Join today! Learn Truck Dispatching with hands-on training, US & Canada logistics knowledge, certification and career support at B2B Campus. Job-ready training.."
};
const page = () => {
  return (
    <div>
      <VideoPopup />
      <TruckDispatcher />
    </div>
  );
};

export default page;
