"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import { FaBars } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header1() {
  const pathname = usePathname()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="mb-5 p-0" fluid>
      <Container>
        <nav class="navbar bg-color z-index-100">
          <div class="container-fluid p-0">
            <Link class="navbar-brand" href="/">
              <Image src="/images/ivista_logo.svg" width={200} height={40} className="img-fluid" alt='' />
            </Link>
            <Button
              className={(
                pathname === '/arts' ||
                pathname === '/arts/services' ||
                pathname === '/arts/services/digital-marketing' ||
                pathname === '/arts/services/content-development-design' ||
                pathname === '/arts/services/design-development')
                ? "btn btn-outline-black"
                : (pathname === '/service/website-design-and-development' ||
                  pathname === '/service/search-engine-optimization' ||
                  pathname === '/service/search-engine-marketing' ||
                  pathname === '/service/social-media-organic' ||
                  pathname === '/service/social-media-marketing' ||
                  pathname === '/service/social-media-marketing' ||
                  pathname === '/service/content-development-b2b-b2c' ||
                  pathname === '/service/design' ||
                  pathname === '/service/videos'
                )
                  ? "btn btn-outline-custom" // Change this to your desired class for /design and /about
                  : "btn btn-outline"
              }
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation">
              <FaBars size={27}
                onClick={handleShow}
              />
            </Button>
          </div>
        </nav>
      </Container>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="text-center">
            <Link class="navbar-brand" href="/">
              {/* <Image src="/images/ivista_logo.svg" width="200" height={100} alt='' /> */}
            </Link>
          </Container>
          <ul class="navbar-nav text-center flex-grow-1 pe-3">
            {/* <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="/arts/services">Services</Link>
            </li> */}
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/service/website-design-and-development">
                Web Design & Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/search-engine-optimization">
                Search Engine Optimization
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/search-engine-marketing">
                Search Engine Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/social-media-organic">
                Social Media - Organic
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/social-media-marketing">
                Social Media Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/content-development-b2b-b2c">
                Content Development (B2B & B2C)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/design">
                Design
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/service/videos">
                Videos
              </NavDropdown.Item> */}
            </NavDropdown>
            <li className="divider-center">
              <hr class="m-divider" />
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/mastery/solutions">Solutions</Link>
            </li>
            <li className="divider-center">
              <hr class="m-divider" />
            </li>
            <NavDropdown title="Industries" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/industries/appliances">Appliances</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/automobiles">Automobiles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/beauty">Beauty & Wellness</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/fashion">Fashion & Accessories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/hospitality">Hospitality</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/jewellery">Jewellery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/ngo">Not-for-Profits/NGOs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/tech">Tech/IT</NavDropdown.Item>
              <NavDropdown.Divider />

              {/* <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>


            <li className="divider-center">
              <hr class="m-divider" />
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="/case-studies">Case Studies</Link>
            </li>
            <li className="divider-center">
              <hr class="m-divider" />
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="/blogs">Blog</Link>
            </li>
            <li className="divider-center">
              <hr class="m-divider" />
            </li>

            <NavDropdown title="About" id="navbarScrollingDropdown">
              <style>
                {/* {`
                .dropdown-menu.show{
                  transform: translate3d(0px, 85px, 0px) !important;
              }
              `} */}
              </style>
              <NavDropdown.Item href="/team">Team</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="/industries/tech">About</NavDropdown.Item>
              <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
            </NavDropdown>
            {/* <li className="divider-center">
              <hr class="m-divider" />
            </li> */}
            {/* <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="/careers">Careers</Link>
            </li> */}

            <li className="divider-center">
              <hr class="m-divider" />
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="/contact-us">Contact</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  )
}

export default Header1