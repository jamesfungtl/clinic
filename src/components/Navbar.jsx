import { Fragment, useRef } from 'react';
import Image from 'next/image';
import useSticky from 'hooks/useSticky';

import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import ListItemLink from 'components/ListItemLink';
import DropdownToggleLink from 'components/DropdownToggleLink';

import { services } from '../data';

const Navbar = ({
  fancy = false, // <-- ADD THIS
  navOtherClass = 'navbar-other d-flex d-lg-none',
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
}) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const fixedClassName =
    'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <Fragment>
              <Image
                alt="Medical Clinic - SEO Optimized Medical Website Template"
                className="py-2"
                src="/clinic/img/logo.png"
                width={65}
                height={80}
                priority
              />
              <span>Medical Clinic</span>
            </Fragment>
          }
        />
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none offcavas-bg">
          <NextLink
            href="/"
            title={
              <div className="navbar-brand">
                <Image
                  alt="Medical Clinic - SEO Optimized Medical Website Template"
                  className="py-2"
                  src="/clinic/img/logo.png"
                  width={65}
                  height={80}
                  
                />
                <span className='off-canvas-logo'>Medical Clinic</span>
              </div>
            }
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-4"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="About Us" className="nav-link" />
            </li>
            <li className="nav-item dropdown">
              <DropdownToggleLink
                title="Services"
                href="#"
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {services.map(({ id, title }) => (
                  <ListItemLink
                    key={id}
                    href="#"
                    title={title}
                    linkClassName="dropdown-item"
                  />
                ))}
              </ul>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Gallery" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Contact Us" className="nav-link" />
            </li>
            <li
              className="nav-item align-items-center d-flex mt-2 mt-lg-0 ms-lg-4 merriweather"
              data-bs-dismiss="offcanvas"
            >
              <NextLink
                title="Book Appointment"
                href="#"
                className="btn mb-lg-1"
              />
            </li>
          </ul>

          {/* ============= Show contact info on small devices ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="company@gmail.com"
                className="link-inverse"
                href="mailto:company@gmail.com"
              />
              <br />
              <NextLink href="tel:+85222222222" title="+85222222222" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <nav
        ref={navbarRef}
        className={sticky ? fixedClassName : navClassName}
      >
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">
            {headerContent}
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;
