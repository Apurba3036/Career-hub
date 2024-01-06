import React from 'react';

const Blogs = () => {
    return (
        <div className='py-32 px-10'>
            <div className="blog-post-container">
      {/* Blog Post Header */}
      <div className="blog-post-header">
        <h1>Exploring React: A Beginner's Guide</h1>
        <p>Published on January 15, 2024</p>
      </div>

      {/* Blog Post Image */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        alt="React Blog Post"
        className="blog-post-image h-40 w-1/2 mx-auto my-3 md:w-32 "
      />

      {/* Blog Post Content */}
      <div className="blog-post-content text-justify">
        <p>
          React is a popular JavaScript library for building user interfaces. Whether you are a seasoned
          developer or just starting with web development, React provides a powerful and efficient way to
          create interactive and dynamic UIs.
        </p>

        <p>
          In this blog post, we will explore the key concepts of React and guide you through the process
          of setting up your first React application. Let's dive in!
        </p>

        {/* Add more content as needed */}

        {/* Conclusion */}
        <p>
          React's component-based architecture and virtual DOM make it a robust choice for building modern
          web applications. As you continue your journey with React, don't forget to explore its rich
          ecosystem of libraries and tools.
        </p>
      </div>
    </div>
        </div>
    );
};

export default Blogs;