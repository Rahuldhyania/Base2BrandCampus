import React from 'react'
import FaqSection from './FaqSection'
import Journeywithb2b2 from './Journeywithb2b2'
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import BecomeStudent from "../Courses/BecomeStudent";
import AboutCourse from "../Courses/AboutCourse";
import videoediting_bannerleft from "../../../../public/images/videoediting_bannerleft.webp";
import videoediting_bannerright from "../../../../public/images/videoediting_bannerright.webp";
import video_left_banner from "../../../../public/images/video_left_banner.webp"
const faq_data = [
  {
    q: "What is the duration of the video editing course offered?",
    a: "The video editing course runs for two to three months, covering both beginner and advanced editing techniques with hands-on software training."
  },
  {
    q: "Which video editing software will I learn in this course?",
    a: "Students learn Adobe Premiere Pro, After Effects, Filmora, and essential tools used by professional editors."
  },
  {
    q: "Do I need prior editing experience to join the video editing course?",
    a: "No experience is needed. The course is perfectly designed for beginners and individuals who want to start editing from scratch."
  },
  {
    q: "Is this video editing course available in online and offline modes?",
    a: "Yes, students can choose between online or offline classes depending on their convenience and learning preference."
  },
  {
    q: "Will I get practical editing projects during the course?",
    a: "Yes, students work on real videos, YouTube edits, cinematic sequences, social media reels, and promotional videos to build confidence."
  },
  {
    q: "Does the course include motion graphics or animation basics?",
    a: "Yes, the course includes introductory modules on motion graphics, transitions, special effects, and basic animation using After Effects."
  },
  {
    q: "Will I receive a certificate after completing the video editing course?",
    a: "Yes, all students receive a professional certificate after completing the training and required video editing projects."
  },
  {
    q: "What career opportunities are available after the video editing course?",
    a: "Students can work as video editors, YouTube editors, content creators, post-production assistants, reel editors, and freelance video professionals."
  },
  {
    q: "Does the video editing course offer placement support?",
    a: "Yes, students receive placement help, portfolio guidance, and interview training to start careers in media, production, or content creation."
  },
  {
    q: "What equipment do I need for the video editing course?",
    a: "A laptop with basic editing capability is recommended. Software installation support and technical guidance are provided during the course."
  }
];
const VideoEditing = () => {
  const Syllabus_data = [
    {
      title: "Module 1 - Introduction",
      points: [
        "What is dispatch business?",
        "Required skills",
        "Course overview",

      ],
    },
    {
      title: "Module 2 - Parties Involved",
      points: ["Role of a dispatcher", "Benefits of dispatcher services", "Owner operations and small fleet owner"],
    },
    {
      title: "Module 3 - Clients",
      points: ["Setting up with your client – contact", "Requesting documents from your client", "Download – sample carrier profile form.", "Download –  Sample of documents you will be requesting.", "Verbal agreement – Scope of booking decision "],
    },
    {
      title: "Module 4 - Equipment and Freight",
      points: ["Types of Trucks", "Trailer types", "Weight", "Commodity"],
    },
    {
      title: "Section 5 - Logistics",
      points: ["Pick-up and delivery times and their importance", "Extra Stops (Multiple deliveries)"],
    },
    {
      title: "Section 6 - Finding Freight",
      points: ["Load boards –  electronic marketplace", "DAT", "Internet Truck Stop", "Private 3PL boards", "Posting trucks"],
    },
    {
      title: "Module 7 - Booking Your First Load",
      points: ["Getting the right information", "Acceptable rates and negotiation", "Negotiantion tips", "Checking broker’s credit", "Getting set up with broker"],
    },
  ];
  const featuresMain = [
    {
      icon: "/images/globe2.webp",
      title: "Massive Demand for Editors",
      subtitle:
        "YouTube creators, brands, influencers & agencies need editors constantly.",
    },
    {
      icon: "/images/usertea.webp",
      title: "Work-from-Home Flexibility",
      subtitle:
        "Edit videos from home for clients across India, USA, Canada & Europe.",
    },
    {
      icon: "/images/moneyhigh.webp",
      title: "High-Income Potential",
      subtitle:
        "Earn ₹25,000–₹1,00,000/month or more through freelance and retainer clients.",
    },
    {
      icon: "/images/digree.webp",
      title: "No Degree Required",
      subtitle:
        "Creativity + right software training = strong career growth.",
    },
  ];
  const items = [
    {
      icon: "/images/45days.webp",
      title: "3 Months",
      subtitle: "Practical Training ",
    },
    {
      icon: "/images/handmoney.webp",
      title: "100%",
      subtitle: "Placement Support",
    },
    {
      icon: "/images/globeicon.webp",
      title: "Global Work",
      subtitle: "Freelance or Full-Time ",
    },
    {
      icon: "/images/money.webp",
      title: "INR / USD",
      subtitle: "Earning Opportunities",
    },
  ];
  const program_data = [
    { text: "Adobe Premiere Pro", icon: "/images/greencheck.webp" },
    { text: "Color Grading & Color Correction", icon: "/images/greencheck.webp" },
    { text: "Motion Graphics Essentials", icon: "/images/greencheck.webp" },
    { text: "Adobe After Effects", icon: "/images/greencheck.webp" },
    { text: "Reels Editing for Brands", icon: "/images/greencheck.webp" },
    { text: "Sound Design & Audio Mixing", icon: "/images/greencheck.webp" },
    { text: "Cinematic Editing Techniques", icon: "/images/greencheck.webp" },
    { text: "YouTube Video Editing & Optimization", icon: "/images/greencheck.webp" },
    { text: "Short-form & Long-form Editing", icon: "/images/greencheck.webp" },
  ];
  const conjoin_data = [
    { text: "Students & freshers", icon: "/images/greencheck.webp" },
    { text: "Career switchers", icon: "/images/greencheck.webp" },
    { text: "Content creators", icon: "/images/greencheck.webp" },
    { text: "Freelancers", icon: "/images/greencheck.webp" },
    { text: "Anyone wanting a high-income creative career", icon: "/images/greencheck.webp" },
  ];
  const featuresNumbered = [
    {
      id: 1,
      number: 1,
      title: "Expert Video Editing Trainers",
      description: "Learn from editors who’ve worked with YouTubers, production studios & global creators.",
    },
    {
      id: 2,
      number: 2,
      title: "Live Project Training",
      description: "Edit real footage, client-style videos, and trending content formats.",
    },
    {
      id: 3,
      number: 3,
      title: "1:1 Creative Mentorship",
      description: "Get personalized feedback to strengthen storytelling, pacing & transitions.",
    },
    {
      id: 4,
      number: 4,
      title: "Editing & Communication Boost",
      description: "Improve your script understanding, client coordination & content clarity.",
    },
    {
      id: 5,
      number: 5,
      title: "Freelance Setup Support",
      description: "Build a professional showreel + learn how to start earning from clients.",
    },
    {
      id: 6,
      number: 6,
      title: "Guaranteed Internship",
      description: "Work on real editing assignments immediately after the course.",
    },
  ];

  return (
    <div>
      <CoursesBanner
        highlightText={'Become a Professional Video Editor'}
        titleEnd={'in 3 Months'}
        description={"Master Premiere Pro • After Effects • Reels Editing • YouTube Editing • Motion Graphics"}
        leftposter={videoediting_bannerleft}
        rightposter={videoediting_bannerright}
      />
      <CoursesCareer
        items={items}
        left_banner={video_left_banner}
        featuresMain={featuresMain}
        title={'Why Video Editing is the   <br/> <span class="text-primary">Next Big Career</span>'}
        description={"Work with YouTubers, production houses, brands & international clients"}
      />
      <CourseProgram
        program_data={program_data}
        title={'<span class="text-primary">3 Months Intensive </span> <br/> Video Editing Program'}
      />
      <AboutCourse
        title={'About Video Editing Course'}
        description1={`
        Our Video Editing Course is designed to take you from a novice to a proficient video editor. We start with the fundamentals, ensuring you have a solid foundation in video formats, equipment, and software. As you progress, you’ll delve into more advanced techniques, including color grading, sound editing, and creating visually stunning effects.`}
        description2={`
           At B2B Campus, we understand that storytelling is at the heart of great video content. That’s why we emphasize the art of storytelling through editing. You’ll learn how to take raw footage and turn it into a captivating narrative that engages your audience.`}
        description3={`
           Hands-on learning is essential to mastering video editing. Our state-of-the-art facilities provide you with access to the latest equipment and industry-standard software. You’ll work on real projects, gaining practical experience that you can showcase in your professional portfolio.
          `}
      />
      <CourseCareerSupport />
      <WhyChoose featuresNumbered={featuresNumbered} />
      <div className="main-bg">
        <CanJoin conjoin_data={conjoin_data} />
      </div>
      {/* <CourseSyllabus title={'Truck Dispatching Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} /> */}
      <BecomeStudent 
        title={'Learn to Transform Pixels ​<sapn class="text-primary">Into Story with Us </span>'}
        description={`Demand for skilled video editors is ever-growing. Whether you aspire to work in film, advertising, or social media, our Video Editing Course equips you with the skills needed to succeed.`}
        right_image={video_left_banner}
        />
      <FaqSection faq_data={faq_data} />
      <Journeywithb2b2 />
    </div>
  );
};

export default VideoEditing;
