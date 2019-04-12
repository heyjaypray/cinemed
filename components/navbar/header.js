Vue.component("header-component", {});

new Vue({
  el: ".headerVue",
  template: `<header>
	<div class="navbar">

		<div class="navbar-header">
			<div class="container">

				<ul class="info">
					<li><a href="#"><i class="icon-mail-1 contact"></i>info@cine-med.com</a></li>
					<li><i class="icon-mobile contact"></i> +00 (123) 456 78 90</li>
				</ul>

				<ul class="social">
					<li><a href="#"><i class="icon-s-facebook"></i></a></li>
					<li><a href="#"><i class="icon-s-gplus"></i></a></li>
					<li><a href="#"><i class="icon-s-twitter"></i></a></li>
					<li><a href="#"><i class="icon-s-pinterest"></i></a></li>
					<li><a href="#"><i class="icon-s-behance"></i></a></li>
					<li><a href="#"><i class="icon-s-dribbble"></i></a></li>
				</ul>



				<a class="navbar-brand" href="index.html"><img src="assets/images/cinemed/cinemed-vector.png"
						class="logo" alt=""></a>


				<a class="navbar-toggler btn responsive-menu float-right" data-toggle="collapse"
					data-target=".navbar-collapse"><i class='icon-menu-1'></i></a>

			</div>
		</div>

		<div class="yamm">
			<div class="navbar-collapse collapse">
				<div class="container">



					<a class="navbar-brand" href="index.html"><img src="assets/images/cinemed/cinemed-vector.png"
							class="logo" alt=""></a>


					<ul class="nav navbar-nav ">

						<li>
							<a href="/index.html">Home</a>
						</li>

						<li class="dropdown yamm-fullwidth">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Products</a>

							<ul class="dropdown-menu yamm-dropdown-menu">
								<li>
									<div class="yamm-content row">

										<div class="col-sm-6 col-lg-4 inner">
											<center>
												<h3>Surgery</h3>
												<figure>


												</figure>
												<br />
												<a href="/acs.html">
													<h2 style="text-decoration: none;">ACS Surgical Video Library</h2>
												</a>
												<a href="/vein.html">
													<h2 style="text-decoration: none;">Vein Global Online</h2>
												</a>
												<a href="/sages.html">
													<h2 style="text-decoration: none;">SAGES Online</h2>
												</a>

											</center>
										</div>

										<div class="col-sm-6 col-lg-4 inner">
											<center>
												<h3>Nursing</h3>
												<figure>
													<br />
													<a href="/aorn.html">
														<h2 style="text-decoration: none;">AORN</h2>
													</a>
													<a href="/assistant.html">
														<h2 style="text-decoration: none;">First Assistant Products</h2>
													</a>
													<a href="/rnbest.html">
														<h2 style="text-decoration: none;">RN Best Practices</h2>
													</a>
											</center>
										</div>

										<div class="col-sm-6 col-lg-4 inner">
											<center>
												<h3>Books</h3>
												<figure>


												</figure>
												<br />
												<a href="/books.html">
													<h2 style="text-decoration: none;">Medical Books</h2>
												</a>
											</center>
										</div>



									</div>
								</li>
							</ul>
						</li>

						<li class="dropdown yamm-fullwidth">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Services</a>

							<ul class="dropdown-menu yamm-dropdown-menu">
								<li>
									<div class="yamm-content row">

										<div class="col-sm-6 col-lg-3 inner">
											<h4>Clinical Education and Training</h4>
											<figure>
												<div class="icon-overlay icn-link">
													<a href="/clinical.html"><img src="assets/images/art/work01.jpg"
															alt=""></a>
												</div>
												<figcaption>
													<p></p>

												</figcaption>
											</figure>
										</div>

										<div class="col-sm-6 col-lg-3 inner">
											<h4>Innovative Media Solutions</h4>
											<figure>
												<div class="icon-overlay icn-link">
													<a href="/media-solutions.html"><img
															src="assets/images/art/work01.jpg" alt=""></a>
												</div>
												<figcaption>
													<p></p>

												</figcaption>
											</figure>
										</div>

										<div class="col-sm-6 col-lg-3 inner">
											<h4>Customer Engagement</h4>
											<figure>
												<div class="icon-overlay icn-link">
													<a href="/customer.html"><img src="assets/images/art/work01.jpg"
															alt=""></a>
												</div>
												<figcaption>
													<p></p>

												</figcaption>
											</figure>
										</div>

										<div class="col-sm-6 col-lg-3 inner">
											<h4>Medical Publishing</h4>
											<figure>
												<div class="icon-overlay icn-link">
													<a href="#"><img src="assets/images/art/work01.jpg" alt=""></a>
												</div>
												<figcaption>
													<p></p>

												</figcaption>
											</figure>
										</div>

									</div>
								</li>
							</ul>
						</li>


						<li>
							<a href="/courses.html">Courses</a>
						</li>

						<li>
							<a href="#">Contact</a>
						</li>




						<button type="button" class="btn btn-primary ml-5">Login</button>


				</div>
				</li>
				</ul>
				</li>





				</ul>


			</div>
		</div>
	</div>
	</div>
</header>`
});
