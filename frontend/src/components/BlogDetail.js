import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

const BlogDetail = (props) => {
    const [blog, setBlog] = useState({});
    const {id} = useParams(); // Get the id from the link in the App.js file

    // fetch data 
    useEffect(() =>{
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${id}`);
                setBlog(res.data);
            } catch (err) {
                
            }
        };
        fetchData();
    },[id]); 
    
    // To not show html tags of the content in the blog 
    const createBlog = () => {
        return {__html: blog.content}
    }; 

    // Capitalize the first letter of the category 
    const capitalizeFirstLetter = (word) => {
        if (word) 
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    return (
        <div className="container mt-3">
            <h1 className="display-2">{blog.title}</h1>
            <h2 className="text-muted mt-3">Category: {capitalizeFirstLetter(blog.category)}</h2>
            <h4>{blog.month}/{blog.day}</h4>
            <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()}/>
            <hr/>
            <p className="lead mb-5"><Link to = '/blog' className="font-weight-blog">Back to blogs</Link></p>
        </div>
    );
};

export default BlogDetail;
