// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import { Link } from 'gatsby';

import Navigation from './Navigation';

// ----------------------------------------------
// Header
// ----------------------------------------------
export default ({ siteTitle }) => (
  <header className="header">
    <Link className="header__title" to="/">{siteTitle}</Link>

    <Navigation />
  </header>
);
