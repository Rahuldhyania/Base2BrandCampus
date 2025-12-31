import React from 'react'
import PageBanner from '../Components/Page-Components/PageBanner'
import Journeywithb2b2 from '../Components/Page-Components/Journeywithb2b2';
import BlogReadyTransform from '../Components/Page-Components/BlogReadyTransform';
import AllBlogsGrid from '../Components/Page-Components/AllBlogsGrid';
import BlogsConfusedCareer from '../Components/Page-Components/BlogsConfusedCareer';
import FeaturedBlog from '../Components/Page-Components/FeaturedBlog';
import MainBlogBanner from '../Components/Page-Components/MainBlogBanner';

const page = () => {
    return (
        <div>
            <MainBlogBanner />
            <FeaturedBlog title="Featured Blogs" />
            <BlogsConfusedCareer title="Confused About Your Career Path?" description="Get Free Career Guidance from Experts" book_free="Book a Free Career Call" />
            <AllBlogsGrid blog_title="All Blogs" />
            <BlogReadyTransform title="Ready to Transform Your Career?" description="Join thousands of learners building successful careers with B2B Campus" explore_btn="Explore All Courses" learing_btn="Start Learning Today" />
            <Journeywithb2b2 PlacedStudent={false} />
        </div>
    )
}

export default page
