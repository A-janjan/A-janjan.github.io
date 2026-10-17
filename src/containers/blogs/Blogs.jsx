import React, {useState, useEffect} from "react";
import "./Blog.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Blogs() {
  const [mediumBlogs, setMediumBlogs] = useState(null);

  useEffect(() => {
    if (blogSection.displayMediumBlogs !== "true") {
      return;
    }
    let active = true;
    fetch("/blogs.json")
      .then(result => (result.ok ? result.json() : Promise.reject(result)))
      .then(response => {
        if (active && response && Array.isArray(response.items)) {
          setMediumBlogs(response.items);
        }
      })
      .catch(() => {
        /* No Medium feed available — the curated list is used instead. */
      });
    return () => {
      active = false;
    };
  }, []);

  if (!blogSection.display) {
    return null;
  }

  const useMedium =
    blogSection.displayMediumBlogs === "true" && Array.isArray(mediumBlogs);

  const posts = useMedium
    ? mediumBlogs.map(blog => ({
        url: blog.link,
        title: blog.title,
        description:
          typeof blog.content === "string"
            ? blog.content.replace(/<[^>]+>/g, " ").slice(0, 180) + "…"
            : blog.subtitle || ""
      }))
    : blogSection.blogs;

  return (
    <section className="main blogs-section" id="blogs">
      <Fade bottom duration={800} distance="16px">
        <SectionHeading
          index="07"
          kicker="Writing"
          title="Writing"
          lead={blogSection.subtitle}
        />
      </Fade>

      <div className="blog-cards-div">
        {posts.map((blog, i) => (
          <BlogCard key={i} blog={blog} index={i} />
        ))}
      </div>
    </section>
  );
}
