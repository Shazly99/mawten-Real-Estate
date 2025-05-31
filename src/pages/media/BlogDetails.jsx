import CustomButton from '@components/common/CustomButton';
import OverlayHeader from '@components/common/OverlayHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FacebookFilled, TwitterOutlined, XOutlined, WhatsAppOutlined, SendOutlined, LinkedinOutlined, LinkedinFilled, CopyOutlined } from '@ant-design/icons';

import './blogs.scss';
import { message } from 'antd';

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
  const handleShareClick = (platform) => {
    message.success(`تم فتح المشاركة عبر ${platform}`);
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      message.success('  تم نسخ الرابط بنجاح');
    }).catch(() => {
      message.error('حدث خطأ أثناء نسخ الرابط');
    });
  };
  if (!blog) return <div className="loading">...جاري التحميل</div>;

  return (
    <div>
      <OverlayHeader img={blog.image} />
      <div className="blog-details-content mt0">
        <Link to={'/media-center'} >
          <CustomButton title={'المركز الاعلامي'} />
        </Link>
        <h1 className="blog-title mt-4">{blog.title}</h1>
        <div className="blog-meta">
          <span className="date" dir='rtl'>
            {new Date(blog.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>

        <div className="blog-text" dangerouslySetInnerHTML={{ __html: blog.description }} />

       
        <div className="blog-share mt-5">
          <strong className="share-title">  شارك المقال:</strong>
          <div className="share-buttons">
            {/* واتساب */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(blog.title)}%0A${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn whatsapp shadow-4"
              onClick={() => handleShareClick('واتساب')}
            >
              <WhatsAppOutlined />
            </a>


            {/* فيسبوك */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 

              target="_blank"
              rel="noopener noreferrer"
              className="share-btn facebook shadow-4"
            >
              <FacebookFilled />
            </a>

            {/* تويتر */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn twitter shadow-4"
            >
              <XOutlined />
            </a>

            {/* Telegram */}
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn telegram shadow-4"
              onClick={() => handleShareClick('تيليجرام')}
            >
              <SendOutlined />
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn linkedin shadow-4"
              onClick={() => handleShareClick('لينكدإن')}
            >
              <LinkedinFilled />
            </a>
            <a
              onClick={() => handleCopyLink()}
              className="share-btn copy shadow-4"
            >
              <CopyOutlined />
            </a>

          </div>
        </div>


      </div>

    </div>
  );
};

export default BlogDetails;
