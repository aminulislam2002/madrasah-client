import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

import "./NavBar.css";

import { useState } from "react";

const NavBar = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isAcademicsDropdownOpen, setIsAcademicsDropdownOpen] = useState(false);
  const [isAdmissionDropdownOpen, setIsAdmissionDropdownOpen] = useState(false);
  const [isStudentsDropdownOpen, setIsStudentsDropdownOpen] = useState(false);
  const [isFacilitiesDropdownOpen, setIsFacilitiesDropdownOpen] = useState(false);
  const [isResultsDropdownOpen, setIsResultsDropdownOpen] = useState(false);
  const [isOthersDropdownOpen, setIsOthersDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    // Close other dropdowns
    // setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
    // Close other dropdowns here as needed
  };

  const toggleAcademicsDropdown = () => {
    setIsAcademicsDropdownOpen(!isAcademicsDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    // setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
    // Close other dropdowns here as needed
  };

  const toggleAdmissionDropdown = () => {
    setIsAdmissionDropdownOpen(!isAdmissionDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    // setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
    // Close other dropdowns here as needed
  };

  const toggleStudentsDropdown = () => {
    setIsStudentsDropdownOpen(!isStudentsDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    // setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
    // Close other dropdowns here as needed
  };

  const toggleFacilitiesDropdown = () => {
    setIsFacilitiesDropdownOpen(!isFacilitiesDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    // setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
    // Close other dropdowns here as needed
  };

  const toggleResultsDropdown = () => {
    setIsResultsDropdownOpen(!isResultsDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    // setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
    // Close other dropdowns here as needed
  };

  const toggleOthersDropdown = () => {
    setIsOthersDropdownOpen(!isOthersDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    // setIsOthersDropdownOpen(false);
    // Close other dropdowns here as needed
  };

  const closeDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
    // Close other dropdowns here as needed
  };

  const navOptions = (
    <>
      <li className="text-white">
        <Link to="/">Home</Link>
      </li>

      {/* About Us Dropdown */}
      <li
        className={`relative group text-white ${isAboutDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleAboutDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isAboutDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleAboutDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>About Us</p>
          <span className={`${isAboutDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isAboutDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/history-of-madrasah">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">History of Madrasah</li>
            </Link>
            <Link to="/mission-and-vision">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Mission And Vision</li>
            </Link>
            <Link to="/photos-gallery">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Photo Gallery</li>
            </Link>
            <Link to="our-students">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Our Students</li>
            </Link>
            <Link to="authority-and-committee">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Committee</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Academics Dropdown */}
      <li
        className={`relative group text-white ${isAcademicsDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleAcademicsDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isAcademicsDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleAcademicsDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Academics</p>
          <span className={`${isAcademicsDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isAcademicsDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Admission Dropdown */}
      <li
        className={`relative group text-white ${isAdmissionDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleAdmissionDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isAdmissionDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleAdmissionDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Admission</p>
          <span className={`${isAdmissionDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isAdmissionDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Students Dropdown */}
      <li
        className={`relative group text-white ${isStudentsDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleStudentsDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isStudentsDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleStudentsDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Students</p>
          <span className={`${isStudentsDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isStudentsDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Facilities Dropdown */}
      <li
        className={`relative group text-white ${isFacilitiesDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleFacilitiesDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isFacilitiesDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleFacilitiesDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Facilities</p>
          <span className={`${isFacilitiesDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isFacilitiesDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Results Dropdown */}
      <li
        className={`relative group text-white ${isResultsDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleResultsDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isResultsDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleResultsDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Results</p>
          <span className={`${isResultsDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isResultsDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Others Dropdown */}
      <li
        className={`relative group text-white ${isOthersDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleOthersDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isOthersDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleOthersDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Others</p>
          <span className={`${isOthersDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isOthersDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>
    </>
  );

  return (
    <div className="navbar bg-blue-950">
      <div className="navbar-start flex lg:w-2/12">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-white h-6 w-6"></AiOutlineMenu>
          </label>
          <ul tabIndex={0} className="menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-blue-950 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <div>{/* <img className="w-16 h-16" src={logo} alt="" /> */}</div>
      </div>
      <div className="navbar-center hidden lg:flex justify-center items-center lg:w-8/12">
        {/* Use a mobile-friendly menu icon here for small screens */}
        <div className="lg:hidden">
          <AiOutlineMenu className="text-2xl cursor-pointer" />
        </div>
        <ul className="flex justify-center items-center gap-8 menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end flex justify-end lg:justify-center items-center lg:w-2/12">
        <button className="animated-button">Online Apply</button>
      </div>
    </div>
  );
};

export default NavBar;
