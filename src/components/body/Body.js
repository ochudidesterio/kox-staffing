import React from "react";
import "./body.css";
import map from "../../assets/images/Map.webp";
import ImageOne from "../../assets/images/Image1";
import ImageTwo from "../../assets/images/image2";
import ImageThree from "../../assets/images/image3";
import Upload from "../Upload/Upload";
import Example from "../video/video";

function Body() {
  return (
    <div className="body">
      <div className="body-img" id="career">
        {/* <img className="img" src={back} alt="back" /> */}
        <Example/>
        <div className="caption">
          <h1>VALUE REIMAGINED</h1>
          <p>World-class technology solutions for your most <br/> ambitious digital goals</p>
        </div>
      </div>
      <div className="body-content-first" id="home">
        <div className="body-content-about">
          <h1>ABOUT KOX STAFFING</h1>
          <p>
            Kox staffing has been delivering staffing and services for more than
            25 years. We connect top scientific, technology, digital, and
            engineering professionals at all career levels with companies across
            the world. We provide solutions within our core skill areas to
            transform how companies do business. With hundreds of thousands of
            successful matches and thousands of projects executed, we have built
            a reputation as one of the best in the business. Kox serves and
            delivers to its European clients and consultants through its
            European division, Oxford Global Resources Limited t/a Kox staffing.
          </p>
          <p>
            Kox serves Global and Fortune 500, mid-market, and emerging
            companies from a wide variety of industries including financial
            services, technology, healthcare, government, life sciences,
            communications and others.
          </p>
        </div>
      </div>
      <div className="body-content-second" id="staffing">
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
              <div className="hidden-content">
                <ul>
                  <li>Data/BI</li>
                  <li>Java/Open source</li>
                  <li>Microsoft</li>
                  <li>Mobile</li>
                  <li>AI</li>
                  <li>QA testing</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <h1> DIGITAL EXPERIENCE AND CONTENT STRATEGY</h1>

              <div className="circle">
                <ImageTwo />{" "}
              </div>
              <div className="hidden-content">
                <ul>
                  <li>Digital Tranformation</li>
                  <li>UX/UI design</li>
                  <li>Digital Marketing</li>
                  <li>Content Strategy</li>
                  <li>Social Media Branding</li>
                  <li>Emerging Technology</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <h1>ENGINEERING</h1>
              <div className="circle">
                <ImageThree />{" "}
              </div>
              <div className="hidden-content">
                <ul>
                  <li>Electrical</li>
                  <li>Mechanical</li>
                  <li>
                    Product engineering <br /> and development
                  </li>
                  <li>
                    Verification and <br /> Validation
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="body-content-staffing-grid-bottom">
            <div className="grid">
              <h1>INFRASTRUCTURE AND SECURITy</h1>
              <div className="circle">
                <ImageOne />
              </div>
              <div className="hidden-content">
                <ul>
                  <li>Cloud</li>
                  <li>Information securty</li>
                  <li>DevOps</li>
                  <li>Networking</li>
                  <li>Telecom</li>
                  <li>Tech Support</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <h1>PMO AND BUSINESS OPS</h1>
              <div className="circle">
                <ImageTwo />
              </div>
              <div className="hidden-content">
                <ul>
                  <li>
                    Product/program <br /> management and <br /> business
                    analysis
                  </li>
                  <li>
                    Agile transformation <br /> and Coaching
                  </li>
                  <li>Change management</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <h1>SCIENTIFIC</h1>
              <div className="circle">
                <ImageThree />
              </div>
              <div className="hidden-content">
                <ul>
                  <li>Clinical Research</li>
                  <li>Scientific</li>
                  <li>Regulatory affairs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-content-third" id="services">
        <div className="body-content-services">
          <h1>SERVICES</h1>
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
              <div className="hidden-content">
                <ul>
                  <li>Windows Migration</li>
                  <li>
                    Data center <br /> Office migrations
                  </li>
                  <li>Server consolidation</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <h1>SOFTWARE DEVEOLPMENT</h1>
              <div className="circle">
                <ImageOne />
              </div>
              <div className="hidden-content">
                <ul>
                  <li>Data management</li>
                  <li>ETL</li>
                  <li>Data Warehouse</li>
                  <li>
                    Business Intelligence <br /> Report Writing
                  </li>
                  <li>Custom App Development</li>
                  <li>Java and .NET</li>
                  <li>Mobile Deevices</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <h1>SUPPORT SERVICES</h1>
              <div className="circle">
                <ImageThree />
              </div>
              <div className="hidden-content">
                <ul>
                  <li>User Support</li>
                  <li>Desktop Support</li>
                  <li>
                    Data center with <br /> Workforce management
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <h1>WORKFORCE MANAGEMENT</h1>
              <div className="circle">
                <ImageTwo />
              </div>
              <div className="hidden-content">
                <ul>
                  <li>
                    Enabling an On-demand workforce <br /> with world class
                    Human <br /> capital management procesess
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="body-content-services-bottom">
            <div className="grid">
              <h1>CENTRE OF EXCELLENCE</h1>
              <div className="circle">
                <ImageOne />
              </div>
              <div className="hidden-content">
                <ul>
                  <li>
                    Onshore <br /> development centers
                  </li>
                  <li>QA and Testing</li>
                  <li>
                    Project management <br /> with workforce management
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <h1>DIGITAL ENTERPRISE</h1>
              <div className="circle">
                <ImageThree />
              </div>
              <div className="hidden-content">
                <ul>
                  <li>Digital Healthcare</li>
                  <li>Digital Workforce</li>
                  <li>Digital Marketing</li>
                  <li>Digital Finance</li>
                  <li>Digital Enterprise Software</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <h1>IT SECURITY</h1>
              <div className="circle">
                <ImageOne />
              </div>
              <div className="hidden-content">
                <ul>
                  <li>
                    Cybersecurty <br /> Assessments
                  </li>
                  <li>
                    Security Related <br /> projects
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <h1>IT STRATEGY CONSULTING</h1>
              <div className="circle">
                <ImageTwo />
              </div>
              <div className="hidden-content">
                <ul>
                  <li>IT Governance</li>
                  <li>IT Assessments</li>
                  <li>Future State Visioning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-content-fourth" id="locations">
        <div className="body-content-location">
          <h1>LOCATIONS</h1>
          <div className="body-content-location-grid">
            <div className="body-content-location-left">
              <img className="map-img" src={map} alt="map" />
            </div>
            <div className="body-content-location-right">
              Cork, Ireland* <br />
              Zug, Switzerland <br />
              Schiphol, Holland Mechelen,
              <br />
              Belgium Barcelona & Madrid, <br />
              Spain Kent, United Kingdombr <br />
              <br />
              *Headquarters Countries we support across Europe: <br />
              <br />
              Austria,Belgium, Bulgaria, Croatia, <br />
              Republic of Cyprus, Czech Republic, <br />
              Denmark, Estonia, Finland, France, Germany, <br />
              Greece, Hungary,Iceland, Ireland, <br />
              Italy, Latvia, Lichtenstein Lithuania,
              <br />
              Luxembourg, Malta, Netherlands,
              <br />
              Norway Poland, Portugal, Romania,
              <br />
              Slovakia, Slovenia, Spain, Sweden, Switzerland and the United
              Kingdom.
            </div>
          </div>
        </div>
      </div>
      <div className="body-content-fifth" id="contact-us">
        <div className="body-content-connect">
          <h1>CONNECT WITH US</h1>
          <p>
            Are you interested in a position with Kox staffing? <br/> <br/> Send us your
            information and resume by clicking the button below!
          </p>
          {/* <button type="submit" className="btn-submit">
            SUBMIT YOUR RESUME
          </button> */}
          <Upload/>
        </div>
      </div>
    </div>
  );
}

export default Body;
