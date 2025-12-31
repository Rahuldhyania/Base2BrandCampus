export const articlesdata = [
  {
    id: 1,
    articles_tagtitle: "Featured Articles",
    isfeatured: true,
    article_toptag: "Freelancing",
    article_poster: "/images/aricle1image.webp",
    article_des_tag: "CAREER",
    article_title: "Getting Started with Freelancing: A Complete Guide",
    article_carddescription:
      "Learn the essential steps to launch your freelancing career, from setting up your profile to landing your first client.",
    articles_description: "",
    publish_date: "12/20/2025",
    reading_time: "8 min read",
  },
  {
    id: 2,
    articles_tagtitle: "Featured Articles",
    isfeatured: true,
    article_toptag: "Digital Marketing",
    article_poster: "/images/aricle1image.webp",
    article_des_tag: "MARKETING",
    article_title: "Mastering Digital Marketing Strategies in 2024",
    article_carddescription:
      "Explore the latest digital marketing trends and strategies that will help your business grow in the modern landscape.",
    articles_description: "",
    publish_date: "12/18/2024",
    reading_time: "10 min read",
  },
  {
    id: 3,
    articles_tagtitle: "Featured Articles",
    isfeatured: true,
    article_toptag: "Programming",
    article_poster: "/images/aricle1image.webp",
    article_des_tag: "TECHNOLOGY",
    article_title: "JavaScript ES6+ Features Every Developer Should Know",
    article_carddescription:
      "Master modern JavaScript with ES6+ features that will make your code cleaner, more efficient, and easier to maintain.",
    articles_description: "",
    publish_date: "12/17/2024",
    reading_time: "11 min read",
  },
  {
    id: 4,
    articles_tagtitle: "Featured Articles",
    isfeatured: true,
    article_toptag: "Web Development",
    article_poster: "/images/aricle1image.webp",
    article_des_tag: "DEVELOPMENT",
    article_title: "Building High-Performance Websites with Modern Tools",
    article_carddescription:
      "Learn how to build fast, scalable, and SEO-friendly websites using modern web development tools and best practices.",
    articles_description: "",
    publish_date: "12/15/2024",
    reading_time: "9 min read",
  },
];

export const fetchKnowledgeCenter = async (
  page = 1,
  limit = 10,
  type = null
) => {
  try {
    // Build URL with optional type parameter
    let url = `https://backend.b2bcampus.com/api/B2Badmin/public/knowledge-center?page=${page}&limit=${limit}`;
    if (type) {
      url += `&type=${type}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching knowledge center data:", error);
    throw error;
  }
};

export const fetchKnowledgeCenterBySlug = async (slug) => {
  try {
    const response = await fetch(
      `https://backend.b2bcampus.com/api/B2Badmin/public/knowledge-center/slug/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching knowledge center by slug:", error);
    throw error;
  }
};

export const fetchBlogs = async (page = 1, limit = 21) => {
  try {
    const response = await fetch(
      `https://backend.b2bcampus.com/api/B2Badmin/blogs?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const fetchBlogBySlug = async (slug) => {
  try {
    const response = await fetch(
      `https://backend.b2bcampus.com/api/B2Badmin/blogs/slug/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    throw error;
  }
};

export const fetchCategories = async (page = 1, limit = 6) => {
  try {
    const response = await fetch(
      `https://backend.b2bcampus.com/api/B2Badmin/public/categories?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
