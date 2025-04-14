import React, { useEffect, useState } from 'react';
import OverlayHeader from '@components/common/OverlayHeader';
import img from '@constants/img';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './blogs.scss';

const BlogDetails = () => {
  const { id } = useParams(); // assuming route is like /blogs/:id
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`https://mawtan.rightclicksa.com/api/home/blogs/${id}`)
      .then(res => {
        setBlog(res.data.data);
      })
      .catch(err => {
        console.error('Error loading blog details:', err);
      });
  }, [id]);

  if (!blog) return <div className="loading">...جاري التحميل</div>;

  return (
    <div>
      <OverlayHeader img={blog.image} />

      <div className="blog-details-content">
        <h1 className="blog-title">{blog.title}</h1>
        <div className="blog-meta">
          <span className="date" dir='rtl'>
            {new Date(blog.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>

        <div className="blog-text" dangerouslySetInnerHTML={{ __html: blog.description }} />

        <div className="mt-5">
          <hr />
        </div>
      </div> 
    </div>
  );
};

export default BlogDetails;
