// SearchToggle.jsx hoặc SearchToggle.tsx
import React from "react";
import "./SearchToggle.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaste } from '@fortawesome/free-solid-svg-icons';


const handlePasteClick = async () => {
    try {
    const text = await navigator.clipboard.readText();
    document.querySelector('.search-input').value = text;
  } catch (err) {
    alert('Trình duyệt không cho phép dán');
  }
};


export default function SearchToggle() {
    return (
        <div className="search-wrapper">
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Dán câu hỏi vô đây nè"
                    className="search-input"
                    autoFocus
                />
                <span className="paste-icon" onClick={handlePasteClick}>
                    <i className="fas fa-paste"></i>  {/* Font Awesome icon */}
                </span>
            </div>

        </div>
    );
}
