import React from 'react'
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <div className='h-15 flex items-center px-10 border-b-1 border-gray-500 bg-black/60'>
      <Link to="/admin" className="max-md:flex-1">
        <h1 className="font-bold text-2xl">
          <span className="text-secondary">KNR </span> Film City
        </h1>
      </Link>
    </div>
  );
}

export default AdminNavbar