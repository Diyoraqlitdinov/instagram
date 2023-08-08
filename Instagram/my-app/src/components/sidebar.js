import React from "react";
import "./sidebar.css";

function Sidebar() {
    return (
    <div className="sidebar bg-dark">
        <div className="sidebar">
      <div className="row">
        <button>
          <span>
            <i className='bx bx-home'></i>
            <span>Home</span>
          </span>
        </button>

        <button>
          <span>
            <i className='bx bx-search'></i>
            <span>Search</span>
          </span>
        </button>

        <button>
          <span>
            <i className='bx bx-compass'></i>
            <span>Explore</span>
          </span>
        </button>

        <button>
          <span>
            <i className='bx bxl-telegram'>
              <span>8</span>
            </i>
            <span>Messages</span>
          </span>
        </button>

        <button>
          <span>
            <i className='bx bx-heart'></i>
            <span>Notifications</span>
          </span>
        </button>

        <button>
          <span>
            <i className='bx bx-plus-circle'></i>
            <span>Create</span>
          </span>
        </button>

        <button>
          <span>
            <img className="rounded-circle" src="https://i.pinimg.com/736x/bd/2c/a9/bd2ca93baf81768a1d247d11f1c307dc.jpg" alt="profile"/>
            <span>Profile</span>
          </span>
        </button>
      </div>
    </div>
    </div>


    );
}

export default Sidebar;