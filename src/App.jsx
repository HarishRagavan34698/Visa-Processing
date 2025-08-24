import { useState, useEffect } from "react";

import "./App.css";
import Navbar from './components/Navbar.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import InitiationType from './components/InitiationType.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';
import PersonalInformation from "./components/PersonalInformation.jsx";
import TravelInformation from "./components/TravelInformation.jsx";
import VisaInformation from './components/VisaInformation.jsx';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNote, setShowNote] = useState(false);

  // Removed the useEffect that was checking for screen position
  // since we'll position the note on the right side

  const [form, setForm] = useState({
    initiationType: "me",
    project: "",
    passportNumber: "",
    dateOfIssue: "",
    dateOfExpiry: "",
    fullName: "",
    dob: "",
    address: "",
    state: "",
    personalEmail: "",
    officialEmail: "",
    mobile: "",
    officeNumber: "",
    placeToTravel: "",
    purpose: "",
    travelFrom: "",
    travelTo: "",
    visaEntries: "single",
    holdingVisa: false,
    visaCountry: "",
    visaType: "",
    validFrom: "",
    validTo: "",
    attachment: null,
    comments: ""
  });

  // Generic input handler
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked 
             : type === "file" ? files[0] 
             : value
    }));
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Form ready for submission!");
  };

  // Navbar items
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" }
  ];

  // Sample profile card data
  const sampleProfileData = {
    name: "Manoj Kandan M",
    genId: "25504878",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    manager: "Ravindra S R (06786669)",
    profileImageUrl: "https://placehold.co/200x200/4F46E5/FFFFFF?text=MK",
  };

  return (
    <>
      {/* Navbar */}
      <Navbar 
        logo="My App"
        navItems={navItems}
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* Profile Section */}
      <ProfileCard profileData={sampleProfileData} />

      {/* Main Form */}
      <form className="visa-form" onSubmit={handleSubmit}>
        
        <div className="clip" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask
              id="mask0_1_14576"
              style={{ maskType: 'luminance' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="26"
            >
              <path d="M0 0H24V26H0V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_1_14576)">
              <path d="M2.66667 26C1.93333 26 1.30556 25.7454 0.783333 25.2362C0.261111 24.7271 0 24.115 0 23.4V5.2C0 4.485 0.261111 3.87292 0.783333 3.36375C1.30556 2.85458 1.93333 2.6 2.66667 2.6H8.26667C8.55556 1.82 9.03889 1.19167 9.71667 0.715C10.3944 0.238333 11.1556 0 12 0C12.8444 0 13.6056 0.238333 14.2833 0.715C14.9611 1.19167 15.4444 1.82 15.7333 2.6H21.3333C22.0667 2.6 22.6944 2.85458 23.2167 3.36375C23.7389 3.87292 24 4.485 24 5.2V23.4C24 24.115 23.7389 24.7271 23.2167 25.2362C22.6944 25.7454 22.0667 26 21.3333 26H2.66667ZM2.66667 23.4H21.3333V5.2H2.66667V23.4ZM5.33333 20.8H14.6667V18.2H5.33333V20.8ZM5.33333 15.6H18.6667V13H5.33333V15.6ZM5.33333 10.4H18.6667V7.8H5.33333V10.4ZM12 4.225C12.2889 4.225 12.5278 4.13292 12.7167 3.94875C12.9056 3.76458 13 3.53167 13 3.25C13 2.96833 12.9056 2.73542 12.7167 2.55125C12.5278 2.36708 12.2889 2.275 12 2.275C11.7111 2.275 11.4722 2.36708 11.2833 2.55125C11.0944 2.73542 11 2.96833 11 3.25C11 3.53167 11.0944 3.76458 11.2833 3.94875C11.4722 4.13292 11.7111 4.225 12 4.225Z" fill="#52C41A"/>
            </g>
          </svg>
          <h2>Required Information</h2>
        </div>


        <div className="form-container-box">
          {/* Sections */}
          <InitiationType 
            value={form.initiationType} 
            onChange={handleChange} 
          />


          <div className="note-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
          {/* Note icon */}
          <div className="note-indicator" onClick={() => setShowNote(!showNote)}>
            <div className="note-icon">
              <svg width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 20L7.5 19V15H4V13L5.5 10.35V8H4V6H13V8H11.5V10.35L13 13V15H9.5V19L8.5 20ZM6.3 13H10.7L9.5 10.9V8H7.5V10.9L6.3 13ZM15.1 4H4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H15.1C15.0667 2.16667 15.0417 2.32917 15.025 2.4875C15.0083 2.64583 15 2.81667 15 3C15 3.18333 15.0083 3.35417 15.025 3.5125C15.0417 3.67083 15.0667 3.83333 15.1 4ZM22 18H14V16H22V7.575C22.4 7.39167 22.7667 7.16667 23.1 6.9C23.4333 6.63333 23.7333 6.33333 24 6V16C24 16.55 23.8042 17.0208 23.4125 17.4125C23.0208 17.8042 22.55 18 22 18Z" fill="#5856D6"/>
                <path d="M17.875 5.125C18.4583 5.70833 19.1667 6 20 6C20.8333 6 21.5417 5.70833 22.125 5.125C22.7083 4.54167 23 3.83333 23 3C23 2.16667 22.7083 1.45833 22.125 0.875C21.5417 0.291667 20.8333 0 20 0C19.1667 0 18.4583 0.291667 17.875 0.875C17.2917 1.45833 17 2.16667 17 3C17 3.83333 17.2917 4.54167 17.875 5.125Z" fill="#5856D6"/>
                <path d="M6.28922 29.234V23.704C6.28922 23.368 6.47122 23.06 6.91922 23.06C7.39522 23.06 7.57722 23.368 7.57722 23.704V32.496C7.57722 32.832 7.38122 33.14 6.90522 33.14C6.63922 33.14 6.45722 33.042 6.24722 32.664L2.50922 26H2.49522C2.52322 26.252 2.55122 26.588 2.55122 26.966V32.496C2.55122 32.832 2.36922 33.14 1.92122 33.14C1.44522 33.14 1.26322 32.832 1.26322 32.496V23.704C1.26322 23.368 1.45922 23.06 1.93522 23.06C2.20122 23.06 2.38322 23.158 2.59322 23.536L6.33122 30.2H6.34522C6.31722 29.948 6.28922 29.612 6.28922 29.234ZM12.0788 31.936H12.6668C13.6048 31.936 13.9828 31.32 13.9828 30.452V28.268C13.9828 27.4 13.6048 26.784 12.6668 26.784H12.0788C11.1408 26.784 10.7628 27.4 10.7628 28.268V30.452C10.7628 31.32 11.1408 31.936 12.0788 31.936ZM12.6668 33.14H12.0788C10.3288 33.14 9.50277 31.992 9.50277 30.452V28.268C9.50277 26.728 10.3288 25.58 12.0788 25.58H12.6668C14.4168 25.58 15.2428 26.728 15.2428 28.268V30.452C15.2428 31.992 14.4168 33.14 12.6668 33.14ZM20.1609 31.796H20.7769C21.1269 31.796 21.3929 31.978 21.3929 32.398C21.3929 32.818 21.1269 33 20.7769 33H20.1609C18.4109 33 17.5709 32.02 17.5709 30.452V26.924H16.6609C16.3389 26.924 16.0449 26.77 16.0449 26.322C16.0449 25.874 16.3389 25.72 16.6609 25.72H17.5709V24.404C17.5709 24.068 17.7529 23.76 18.2009 23.76C18.6489 23.76 18.8309 24.068 18.8309 24.404V25.72H20.6789C21.0009 25.72 21.2949 25.902 21.2949 26.322C21.2949 26.742 21.0009 26.924 20.6789 26.924H18.8309V30.452C18.8309 31.292 19.2229 31.796 20.1609 31.796ZM28.077 28.128V29.29C28.077 29.71 27.811 29.906 27.461 29.906H23.751V30.256C23.751 31.152 24.171 31.824 25.109 31.824H26.929C27.279 31.824 27.545 31.992 27.545 32.412C27.545 32.832 27.279 33 26.929 33H25.109C23.359 33 22.491 31.824 22.491 30.256V28.128C22.491 26.588 23.317 25.58 25.067 25.58H25.501C27.251 25.58 28.077 26.588 28.077 28.128ZM23.751 28.73H26.817V28.128C26.817 27.302 26.439 26.756 25.501 26.756H25.067C24.129 26.756 23.751 27.302 23.751 28.128V28.73Z" fill="#4B5563"/>
              </svg>
              <div className="note-dot"></div>
            </div>
          </div>
        </div>
          {/* Note positioned on the right side */}
        {showNote && (
    <div className="note-popup">
      <button className="btn-close" onClick={() => setShowNote(false)}>
        &times;
      </button>
      <h3>Note:</h3>
      <p>
        1. You can submit this workflow only on month end...
        {/* More content */}
      </p>
    </div>
  )}

          <ProjectDetails 
            value={form.project} 
            onChange={handleChange} 
          />

          <PersonalInformation 
            form={form} 
            handleChange={handleChange} 
          />

          <div className="max-w-4xl mt-10">
            <TravelInformation form={form} setForm={setForm} />
          </div>

          <div className="visa-form text-left">
            <VisaInformation form={form} setForm={setForm} />
          </div>

          {/* Submit */}
          <div className="comment-section">
            <label htmlFor="comment">Comment (Max 500 Chars)</label>
            <div className="textarea-container">
              <textarea
                id="comment"
                maxLength="500"
                placeholder="XXX-XXX-XX-XXX-X"
              />
            </div>
            <div className="submit-button-container">
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}