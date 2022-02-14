import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('${process.env.REACT_APP_API_URL}/api/blog/featured');
                setFeaturedBlog(res.data[0]);
            } catch (err) {
                
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get('${process.env.REACT_APP_API_URL}/api/blog/');
                setBlogs(res.data);
            } catch (err) {
                
            }
        }
        fetchBlogs();
    }, [])

    
};

export default Blog;
