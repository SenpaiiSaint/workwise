import React, { useState } from "react";
import './Sidebar.css';
import { FaBars, FaHome, FaUser, FaBriefcase, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            {/* Top Section with logo/title and toggle button */}
            <div className="top_section">
                <h1 className="logo">WorkWise</h1>
                <div className="toggle_icon" onClick={toggleSidebar}>
                    <FaBars />
                </div>
            </div>

            {/* Navigation Links */}
            <div className="menu_items">
                <div className="menu_item">
                    <FaHome className="icon" />
                    {isOpen && <span>Dashboard</span>}
                </div>
                <div className="menu_item">
                    <FaUser className="icon" />
                    {isOpen && <span>Profile</span>}
                </div>
                <div className="menu_item">
                    <FaBriefcase className="icon" />
                    {isOpen && <span>Jobs</span>}
                </div>
                <div className="menu_item">
                    <FaSignOutAlt className="icon" />
                    {isOpen && <span>Logout</span>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;