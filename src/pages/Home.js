import { useEffect, useState } from "react";
import Card from "./components/ui/Cards";
import PostCardData from "./components/ui/PostCardData";
import Wrapper from "./components/Wrapper";

export default function Home() {
  const [posts, setPosts] = useState([]);


  return (
    <>
      <section className="main">
        <Wrapper>
          <div className="row m-3">
            <div className="col-12">
              <h1 className="blog-title text-center">Welcome to My Blog</h1>
              <p className="text-center py-3">
                Explore my latest blog posts and articles.
              </p>
            </div>
            <div className="col-4">
              <select className="category-select">
                <option value="all">All Categories</option>
                <option value="tech">tech</option>
                <option value="js">js</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
              </select>
            </div>
          </div>
          <div className="row blog-cards">
            {/* {posts&&posts.map((item,index)=> <PostCardData key={index} data={item} />)} */}
            <PostCardData />
            <PostCardData />
            <PostCardData />
            <PostCardData />
            <PostCardData />

            {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
