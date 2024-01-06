import React from 'react';

const Details = () => {
    return (
        <div className='py-32 px-10'>
    <div className="job-details-container">
      {/* Header Section */}
      <div className="job-details-header">
        {/* Company Logo */}
        <img src="https://i.ibb.co/PzrbTxh/google-1-1-1.png" alt="Company Logo" />

        {/* Job Title and Company Name */}
        <div>
          <h1>Technical Database Engineer</h1>
          <h2>Google LLC</h2>
        </div>
      </div>

      {/* Information Section */}
      <div className="job-details-info">
        <p><strong>Location:</strong> Dhaka, Bangladesh</p>
        <p><strong>Remote or Onsite:</strong> Remote</p>
        <p><strong>Job Type:</strong> Full Time</p>
        <p><strong>Salary:</strong> 100k-150k</p>
      </div>

      {/* Job Description Section */}
      <div className="job-details-description">
        <h2>Job Description</h2>
        <p>
          A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging
          and effective interfaces for software and web applications. This includes designing the layout, visual
          design, and interactivity of the user interface.
        </p>
      </div>

      {/* Job Responsibility Section */}
      <div className="job-details-responsibility">
        <h2>Job Responsibility</h2>
        <p>
          Collaborating with cross-functional teams: UI/UX designers often work closely with other teams,
          including product management, engineering, and marketing, to ensure that the user interface is aligned
          with business and technical requirements. You will need to be able to effectively communicate your
          design ideas and gather feedback from other team members.
        </p>
      </div>

      {/* Educational Requirements and Experience Section */}
      <div className="job-details-requirements">
        <h2>Educational Requirements</h2>
        <p>Bachelor degree to complete any reputational university.</p>
        
        <h2>Experience</h2>
        <p>2-3 Years in this field.</p>
      </div>

      {/* Contact Information Section */}
      <div className="job-details-contact">
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> 01750-00 00 00</p>
        <p><strong>Email:</strong> info@gmail.com</p>
        <p><strong>Address:</strong> Dhanmondi 32, Sukrabad Dhaka, Bangladesh</p>
      </div>
    </div>
            
        </div>
    );
};

export default Details;