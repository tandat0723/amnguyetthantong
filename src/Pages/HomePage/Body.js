import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SearchToggle from '../../components/SearchToggle/SearchToggle'
import './Body.css'

function Body() {
  return (
    <main className="main-container">
      <h1 className="main-title">Ám Nguyệt Thần Tông</h1>
      <SearchToggle />
    </main>
  );
}
export default Body;

