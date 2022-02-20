import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, renderMatches} from 'react-router-dom';


const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(res.data[0]);
            } catch (err) {
                
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setBlogs(res.data);
            } catch (err) {
                
            }
        }
        fetchBlogs();
    }, []);

    // Capitalize the first letter 
    const capitalizeFirstLetter = (word) => {
        if (word) 
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };
    
    // Get all blogs 
    const getBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">Featured post</h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <Link to={} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block"></div>
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                </div>
            );
        });
        for (let i = 0 ; i < list.length ; i += 2)
        result.push(
            <div key={i} className='row mb-2'>
                
            </div>
        )
        return result;
    };

    return (
    
        <div className="container mt-3">
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to='/category/world'>World</Link> 
                    <Link className="p-2 text-muted" to='/category/environment'>environment</Link>
                    <Link className="p-2 text-muted" to='/category/technology'>Technology</Link>
                    <Link className="p-2 text-muted" to='/category/design'>Design</Link>
                    <Link className="p-2 text-muted" to='/category/culture'>Culture</Link>
                    <Link className="p-2 text-muted" to='/category/business'>Business</Link>
                    <Link className="p-2 text-muted" to='/category/politics'>Politics</Link>
                    <Link className="p-2 text-muted" to='/category/opinion'>Opinion</Link>
                    <Link className="p-2 text-muted" to='/category/science'>Science</Link>
                    <Link className="p-2 text-muted" to='/category/health'>Health</Link>
                    <Link className="p-2 text-muted" to='/category/style'>Style</Link>
                    <Link className="p-2 text-muted" to='/category/travel'>Travel</Link>
                </nav>
            </div>
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                    <p className="lead my-3">{featuredBlog.excerpt}</p>
                    <p className="lead mb-0">
                        <Link to = {`/blog/${featuredBlog.slug}`} className="text-white fw-bold">
                        Continue reading... 
                        </Link></p>
                </div>
            </div>
            {getBlogs()}
        </div>
    );
};
export default Blog;
