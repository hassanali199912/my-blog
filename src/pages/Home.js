import { useEffect, useState } from "react";
import Card from "./components/ui/Cards";
import PostCardData from "./components/ui/PostCardData";
import Wrapper from "./components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsApiFun } from "../store/Slicers/posts/getAllPostsSlicers";
import PostCardLoading from "./components/loadings/PostCardLoading";
import Select from "react-select";

const categories = [
  { value: "all", label: "All" },
  { value: "tech", label: "Technical" },
  { value: "sport", label: "Sports" },
  { value: "health", label: "Health & Wellness" },
  { value: "food", label: "Food & Cooking" },
  { value: "travel", label: "Travel & Adventure" },
  { value: "education", label: "Education & Learning" },
  { value: "finance", label: "Finance & Investing" },
  { value: "art", label: "Art & Creativity" },
  { value: "music", label: "Music & Entertainment" },
  { value: "science", label: "Science & Technology" },
];

export default function Home() {
  const { loading, error, data } = useSelector((s) => s.getAllPostsSlicers);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [postTemp, setPostTemp] = useState();
  const getAllPosts = async () => {
    dispatch(getAllPostsApiFun());
  };

  const handleSelectChangeCategory = (value) => {
    if (value.value === "all") {
      setPosts(postTemp);
    } else {
      const newArr = postTemp.filter((post) => post.caterogry === value.value);
      setPosts(newArr);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    if (data) {
      setPosts(data.data);
      setPostTemp(data.data);
    }
    data && setPosts(data.data);
  }, [data]);

  return (
    <>
      <section className="main">
        <Wrapper>
          <div className="row">
            <div className="col-12">
              <h1 className="blog-title text-center">Welcome to My Blog</h1>
              <p className="text-center py-3">
                Explore my latest blog posts and articles.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <Select
                options={categories}
                onChange={handleSelectChangeCategory}
              />
              {/* <select className="category-select">
                <option value="all">All Categories</option>
                <option value="tech">tech</option>
                <option value="js">js</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
              </select> */}
            </div>
          </div>
          <div className="row blog-cards">
            {loading ? (
              <>
                <PostCardLoading />
                <PostCardLoading />
                <PostCardLoading />
              </>
            ) : (
              <>
                {data &&
                  posts &&
                  posts.map((post, index) => (
                    <PostCardData key={index} data={post} />
                  ))}
              </>
            )}
            {/* <PostCardData />
            <PostCardData />
            <PostCardData />
            <PostCardData />
            <PostCardData /> */}

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
