import React from 'react';

function Header() {
  return (
    <header className="rounded-top-4">
      <nav className="fixed-top mt-2 ms-5">
        <ul className="nav">
          <li className="nav-item btn btn-danger mx-1">Home</li>
          <li className="nav-item btn btn-danger mx-1">About me</li>
          <li className="nav-item btn btn-danger mx-1">Star Wars</li>
          <li className="nav-item btn btn-danger mx-1">Contact</li>
        </ul>
      </nav>
      <h1 className="text-center py-2">Luke Skywalker</h1>
    </header>
  );
}

export default Header;