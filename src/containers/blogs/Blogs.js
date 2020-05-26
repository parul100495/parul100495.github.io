import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Blogs() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">{blogSection.title}</h1>
        <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          <BlogCard
                blog={{
                  url: "",
                  image: "",
                  title: "Hi Folks!",
                  description: "Coming up soon..."                }}
              />
        </div>
      </div>
    </div>
    </Fade>
  );
}
