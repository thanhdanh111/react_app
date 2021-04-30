import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import logo from "../images/logo2.png";
export default function Footer() {
    return (
        <>
<footer class="footer-distributed" >

			<div class="footer-left">

			<Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>

			<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					<a href="/rooms">Our rooms</a>
								</p>
				<p class="footer-company-name">Company Name © 2021</p>
			</div>
			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>225 Nguyen Van Linh Da Nang</span></p>
				</div>
				<div>
					<i class="fa fa-phone"></i>
					<p>+04366756522</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">tranthanhdanh0311@gmail.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>
				<div class="footer-icons">
					<a href="#"><i class="fa fa-facebook" ></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>
				</div>
			</div>
		</footer>
        </>
    )
}
