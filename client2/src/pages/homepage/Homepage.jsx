import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./homepage.css";
import axios from "axios";
import Footer from "../../components/footer/footer";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=> {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      setPosts( res.data );
    }
    fetchPosts();
  }, [search])
    return (
      <>
        <Header />
        <div className="home">
          <Posts posts={posts} />
        </div>
        <Footer/> 
      </>
    );
}

export default Homepage
