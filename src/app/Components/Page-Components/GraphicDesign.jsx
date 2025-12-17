import React from 'react'
import FaqSection from './FaqSection'
import Journeywithb2b2 from './Journeywithb2b2'
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import CourseSyllabus from "../Courses/CourseSyllabus";
import AboutCourse from "../Courses/AboutCourse";
import graphic_left from "../../../../public/images/graphic_left.webp";
import graphic_right from "../../../../public/images/graphic_right.webp";
import graphic_left_banner from "../../../../public/images/graphic_left_banner.webp"
const faq_data = [
  {
    q: "What is the duration of the graphic designing course offered?",
    a: "The graphic designing course is a two to three-month program designed to teach essential design tools, concepts, and practical skills for beginners and aspiring designers."
  },
  {
    q: "What software will I learn during the graphic designing course?",
    a: "Students learn industry-standard tools including Adobe Photoshop, Illustrator, Canva, and other essential design applications used by professional designers."
  },
  {
    q: "Do I need any prior experience to enrol in the graphic designing course?",
    a: "No prior experience is required. The course starts from basics, making it suitable for beginners and students with zero design knowledge."
  },
  {
    q: "Is this graphic designing course available online and offline?",
    a: "Yes, the course is offered in both online and offline modes to provide flexible learning options for students with different schedules."
  },
  {
    q: "Will I get practical assignments in the graphic designing course?",
    a: "Yes, students work on live projects, creative assignments, branding tasks, and portfolio-building activities to develop strong practical design skills."
  },
  {
    q: "Does the graphic designing course include portfolio development?",
    a: "Absolutely. Students create a professional portfolio showcasing posters, logos, branding designs, social media creatives, and more for future job opportunities."
  },
  {
    q: "Are certificates provided after completing the graphic designing course?",
    a: "Yes, a recognized course completion certificate is awarded after successfully finishing all modules and assignments."
  },
  {
    q: "What career opportunities are available after this course?",
    a: "Students can work as graphic designers, logo designers, social media designers, brand designers, freelancers, or junior creative artists in agencies and companies."
  },
  {
    q: "Is placement assistance available for graphic designing students?",
    a: "Yes, placement support, interview preparation, and job guidance are provided to help students start careers in the design industry."
  },
  {
    q: "What are the eligibility criteria for the graphic designing course?",
    a: "Anyone with basic computer knowledge and creativity can join. There are no age or education restrictions."
  }
];

const GraphicDesign = () => {
    const Syllabus_data = [
        {
            title: "Module 1 - Canva",
            points: [
                "Canva Tools Overview",
                "Create Animations",
                "Text Effects & Shadows",
                "Create Videos",
                "Social Media Post Design",
                "Thumbnail Design",
            ],
        },
        {
            title: "Module 2 - Creative Design",
            points: [
                "Banner Design",
                "Brochure Design",
                "Create Transitions",
                "Business Stationery Design",
                "Instagram Highlights",
                "Illustrations",
            ],
        },
        {
            title: "Module 3 - Photoshop (Basics)",
            points: [
                "Photoshop Tools Overview",
                "Image Cutting",
                "Image Retouching",
                "Image Optimization",
                "Social Media Post Design",
                "Book Design",
                "Branding Design",
            ],
        },
        {
            title: "Module 4 - Advanced Photoshop",
            points: [
                "Thumbnail Design",
                "Banner Design",
                "Brochure Design",
                "Pattern & Texture Styles",
                "Increase Image Resolution",
            ],
        },
        {
            title: "Module 5 - Photo Editing",
            points: [
                "Image Adjustment Tools",
                "Photo Filter Tools",
                "Create Manipulation",
                "Caricature Design",
                "Pen Tablet Work",
            ],
        },
        {
            title: "Module 6 - Illustrator",
            points: [
                "Illustrator Tools Overview",
                "Logo Design Creation",
                "Mood Board Creation",
                "Vector Graphics Design",
                "3D Design",
                "Extrude & Bevel",
            ],
        },
        {
            title: "Module 7 - Printable Work",
            points: [
                "Standee Design",
                "Canopy Design",
                "Business Stationery",
                "Cover Design",
                "Book Design",
            ],
        },
        {
            title: "Module 8 - Advanced Design Skills",
            points: [
                "Revolve",
                "Rotate",
                "Image Optimization",
                "Brochure Design",
                "Instagram Highlights",
                "Profile Design",
                "Branding Design",
            ],
        },
        {
            title: "Module 9 - Creative Effects",
            points: [
                "Style Guides",
                "Artistic Filters",
                "Brush Strokes",
                "Distort Effects",
                "Sketch Effects",
                "Stylize",
                "Infographic Design",
            ],
        },
        {
            title: "Module 10 - Professional Design",
            points: [
                "Packaging Design",
                "Label Design",
                "Hoarding Design",
                "Menu Design",
                "Typography",
                "Business Card Design",
            ],
        },
        {
            title: "Module 11 - Industrial Training",
            points: [
                "9 Weeks Industrial Training",
                "Practical Project Work",
                "Professional Certifications",
            ],
        },
    ];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "Massive Demand Worldwide",
            subtitle:
                "Global logistics companies are actively hiring skilled dispatchers across the USA & Canada.",
        },
        {
            icon: "/images/usertea.webp",
            title: "100% Work From Home",
            subtitle:
                "Work remotely from anywhere in India and collaborate with international trucking firms.",
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "Attractive Monthly Earnings",
            subtitle:
                "Earn ₹25,000 to ₹85,000 per month or up to $2,000 monthly with global clients.",
        },
        {
            icon: "/images/digree.webp",
            title: "No Formal Degree Needed",
            subtitle:
                "Anyone can begin — good communication skills and professional training are sufficient.",
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
            subtitle: "Freelance or Full-Time",
        },
        {
            icon: "/images/money.webp",
            title: "INR / USD",
            subtitle: "Earning Opportunitiess",
        },
    ];
    const program_data = [
        { text: "Fundamentals of Graphic Design", icon: "/images/greencheck.webp" },
        { text: "Branding & Logo Design", icon: "/images/greencheck.webp" },
        { text: "Ad Creatives for Businesses", icon: "/images/greencheck.webp" },
        { text: "Poster & Banner Design", icon: "/images/greencheck.webp" },
        { text: "Social Media Creative Design", icon: "/images/greencheck.webp" },
        { text: "Typography & Color Theory", icon: "/images/greencheck.webp" },
        { text: "UI Design Basics (Figma)", icon: "/images/greencheck.webp" },
        { text: "Adobe Illustrator & Photoshop", icon: "/images/greencheck.webp" },
        { text: "Real Client Projects & Practical Training", icon: "/images/greencheck.webp" },
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Housewives (WFH jobs)", icon: "/images/greencheck.webp" },
        { text: "BPO/Call center workers", icon: "/images/greencheck.webp" },
        { text: "Anyone wanting international income", icon: "/images/greencheck.webp" },

    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1, // correct property name
            title: "Expert US Logistics Trainers",
            description: "Learn directly from professionals with 7–15 years of real industry experience.",
        },
        {
            id: 2,
            number: 2,
            title: "Live Dispatch Training",
            description: "Work on real loads and real scenarios — not just theory.",
        },
        {
            id: 3,
            number: 3,
            title: "1:1 Personal Mentorship",
            description: "Every student gets a dedicated mentor for guidance.",
        },
        {
            id: 4,
            number: 4,
            title: "English Skill Boost",
            description: "Improve communication for calls, emails, and client interaction.",
        },
        {
            id: 5,
            number: 5,
            title: "Work-from-Home Setup Help",
            description: "Get complete guidance to build a professional remote workspace.",
        },
        {
            id: 6,
            number: 6,
            title: "Guaranteed Internship",
            description: "Gain hands-on experience immediately after completing the course.",
        },
    ];
    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Professional Graphic Designer'}
                titleEnd={'in 3 Months'}
                description={"Master Branding • UI/UX Basics • Social Media Design • Portfolio Building"}
                leftposter={graphic_left}
                rightposter={graphic_right}
            />
            <CoursesCareer
                items={items}
                left_banner={graphic_left_banner}
                featuresMain={featuresMain}
                title={'Why Graphic Design is the  <br/> <span class="text-primary">Next Big Career</s  pan>'}
                description={"Work with top brands, startups, and international clients"}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">3 Months Intensive </span> <br/> Graphic Design Program'}
            />
            <AboutCourse
                title={'About Graphic Design Course'}
                description1={`
                  B2B Campus is proud to offer a comprehensive Graphic Design course designed to equip students with the skills needed to succeed in the fast-paced world of graphic design. With a focus on practical, hands-on experience, this course provides a deep understanding of design principles, color theory, typography, and more.`}
                description2={`
                    Our expert instructors guide students through a range of projects and assignments, helping them to build a strong portfolio that showcases their skills and creativity.`}
                description3={`
                    Whether you’re looking to start a career in graphic design, or you’re a professional looking to expand your skill set, this course is perfect for you.            
          `}
            />
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            <CourseSyllabus title={'Graphic Design Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
            {/* <BecomeStudent /> */}
            <FaqSection faq_data={faq_data} />
            <Journeywithb2b2 />
        </div>
    );
};

export default GraphicDesign;
