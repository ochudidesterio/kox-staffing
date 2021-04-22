import React from "react";
import "./body.css";
import back from "../../assets/images/back.jpg";

import ImageOne from "../../assets/images/Image1";
import ImageTwo from "../../assets/images/image2";
import ImageThree from "../../assets/images/image3";

function Body() {
  return (
    <div className="body">
      <div className="body-img">
        <img className="img" src={back} alt="back" />
      </div>
      <div className="body-content-first">
        <div className="body-content-about">
          <h1>ABOUT COX SYSTEMS</h1>
          <p>
            Apex Systems has been delivering staffing and services for more than
            25 years. We connect top scientific, technology, digital, and
            engineering professionals at all career levels with companies across
            the world. We provide solutions within our core skill areas to
            transform how companies do business. With hundreds of thousands of
            successful matches and thousands of projects executed, we have built
            a reputation as one of the best in the business. Apex serves and
            delivers to its European clients and consultants through its
            European division, Oxford Global Resources Limited t/a Apex Systems.
          </p>
          <p>
            Apex serves Global and Fortune 500, mid-market, and emerging
            companies from a wide variety of industries including financial
            services, technology, healthcare, government, life sciences,
            communications and others.
          </p>
        </div>
      </div>
      <div className="body-content-second">
        <div className="body-content-staffing">
          <h1>STAFFING</h1>
          <p>
            Our global skill-focused recruiters are affiliated with local
            scientific, technology, digital, and engineering organisations to
            develop talent pipelines in anticipation of client needs. Recruiting
            support from both skill and industry-focused delivery centres is
            leveraged for large volume requests, critical projects or unique
            requirements. Our recruiting methodology delivers the highest
            quality talent in the following skill disciplines:
          </p>
          <div className="body-content-staffing-grid-top">
            <div className="grid">
              <h1>APPS AND DATA MANAGEMENT</h1>
              <div className="circle">
                <ImageOne />
              </div>
            </div>
            <div className="grid">
              <h1> DIGITAL EXPERIENCE AND CONTENT STRATEGY</h1>

              <div className="circle">
                <ImageTwo />{" "}
              </div>
            </div>
            <div className="grid">
              <h1>ENGINEERING</h1>
              <div className="circle">
                <ImageThree />{" "}
              </div>
            </div>
          </div>
          <div className="body-content-staffing-grid-bottom">
            <div className="grid">
              <h1>INFRASTRUCTURE AND SECURIT</h1>
              <div className="circle">
                <ImageOne />
              </div>
            </div>
            <div className="grid">
              <h1>PMO AND BUSINESS OPS</h1>
              <div className="circle">
                <ImageTwo />
              </div>
            </div>
            <div className="grid">
              <h1>SCIENTIFIC</h1>
              <div className="circle">
                <ImageThree />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-content-third">
        <div className="body-content-services">
          <h1>Services</h1>
          <p>
            Managed projects and services with the right balance of cost,
            project control, risk management and work quality are delivered at
            up to half the price of traditional firms because of our ability to
            build fit-for-purpose teams on demand. These teams are led by
            seasoned consultants using proven methodologies for work execution,
            deliverables and project control.
          </p>
          <div className="body-content-services-top">
            <div className="grid">
              <h1>MIGRATION SERVICES</h1>
              <div className="circle">
                <ImageTwo />
              </div>
            </div>
            <div className="grid">
              <h1>SOFTWARE DEVEOLPMENT</h1>
              <div className="circle">
                <ImageOne />
              </div>
            </div>
            <div className="grid">
              <h1>SUPPORT SERVICES</h1>
              <div className="circle">
                <ImageThree />
              </div>
            </div>
            <div className="grid">
              <h1>WORKFORCE MANAGEMENT</h1>
              <div className="circle">
                <ImageTwo />
              </div>
            </div>

          </div>
          <div className="body-content-services-bottom">
          <div className="grid">
            <h1>CENTRE OF EXCELLENCE</h1>
            <div className="circle">
                <ImageOne />
              </div>
          </div>
          <div className="grid">
            <h1>DIGITAL ENTERPRISE</h1>
            <div className="circle">
                <ImageThree />
              </div>
          </div>
          <div className="grid">
            <h1>IT SECURITY</h1>
            <div className="circle">
                <ImageOne />
              </div>
          </div>
          <div className="grid">
            <h1>IT STRATEGY CONSULTING</h1>
            <div className="circle">
                <ImageTwo />
              </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
