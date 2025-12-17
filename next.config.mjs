/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/c-and-c-plus-plus-course",
        destination: "/",
        permanent: true
      },
      { source: "/php-training-course", destination: "/", permanent: true },
      { source: "/laravel-course", destination: "/web-development-course", permanent: true },
      { source: "/ai-ml-and-data-science", destination: "/", permanent: true },
      { source: "/flutter", destination: "/", permanent: true },
      { source: "/react-js-course", destination: "/", permanent: true },
      { source: "/react-native", destination: "/", permanent: true },
      { source: "/python-training-course", destination: "/", permanent: true },
      { source: "/mern-stack-course", destination: "/", permanent: true },
      {
        source: "/shopify-app-development-course",
        destination: "/",
        permanent: true
      },
      {
        source: "/shopify-theme-development-course",
        destination: "/",
        permanent: true
      },
      {
        source: "/graphic-designing-course-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/graphic-design-course-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/web-designing-course-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/web-designing-course-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/laravel-training-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/laravel-training-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/digital-marketing-course-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/digital-marketing-course-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/digital-marketing-course-in-karnal",
        destination: "/",
        permanent: true
      },
      {
        source: "/digital-marketing-course-in-bathinda",
        destination: "/",
        permanent: true
      },
      {
        source: "/digital-marketing-course-in-zirakpur",
        destination: "/",
        permanent: true
      },
      {
        source: "/nodejs-training-course-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/nodejs-training-course-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/wordpress-training-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/wordpress-training-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/full-stack-developer-course-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/full-stack-developer-course-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/web-development-course-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/web-development-course-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/shopify-training-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/shopify-training-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/react-js-training-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/react-js-training-course-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/python-training-in-mohali",
        destination: "/",
        permanent: true
      },
      {
        source: "/python-training-in-chandigarh",
        destination: "/",
        permanent: true
      },
      {
        source: "/our-story",
        destination: "/",
        permanent: true
      },
      {
        source: "/resources",
        destination: "/",
        permanent: true
      },
      {
        source: "/connect",
        destination: "/",
        permanent: true
      },
      {
        source: "/graphic-design-training",
        destination: "/",
        permanent: true
      },
      {
        source: "/truck-dispatch-training",
        destination: "/",
        permanent: true
      },
    ];
  }
};

export default nextConfig;
