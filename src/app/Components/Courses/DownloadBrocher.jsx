'use client';

import React from "react";
import Buttons from "../UiUx/Buttons";
import { usePathname } from "next/navigation";

const downloadPDF = (currentpath,courseName) => {
  const pdfPath = `/coursesbrocher${currentpath}.pdf`;

  console.log("PDF Path:", pdfPath);

  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = `${courseName} syllabus.pdf`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function DownloadBrocher() {
  const currentpath = usePathname();
  const courseName = usePathname()
  .replace('/', '')
  .split('-')
  .map(w => w[0].toUpperCase() + w.slice(1))
  .join(' ');
  return (
    <div
      onClick={() => downloadPDF(currentpath,courseName)}
      className="cursor-pointer"
    >
      <Buttons
        btnname="Download Course PDF"
        text_color="text-white"
        btn_primary={false}
        btn_bg={'bg-[#008000]'}
      />
    </div>
  );
}
