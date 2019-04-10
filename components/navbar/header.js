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

         

          <a class="navbar-brand" href="index.html"><img src="assets/images/cinemed/cinemed-vector.png" class="logo" alt=""></a>

          
          <a class="navbar-toggler btn responsive-menu float-right" data-toggle="collapse"
              data-target=".navbar-collapse"><i class='icon-menu-1'></i></a>

      </div>
  </div>
				
				<div class="yamm">
					<div class="navbar-collapse collapse">
						<div class="container">
							
						
							
							<a class="navbar-brand" href="index.html"><img src="assets/images/cinemed/cinemed-vector.png" class="logo" alt=""></a>
							

							<ul class="nav navbar-nav">
								
								<li>
									<a href="/index.html">Home</a>
								</li>							
								
								<li class="dropdown yamm-fullwidth">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown">Products</a>
									
									<ul class="dropdown-menu yamm-dropdown-menu">
										<li>
											<div class="yamm-content row">
    
												<div class="col-sm-6 col-lg-3 inner">
													<h4>Surgery</h4>
													<figure>
														<div class="icon-overlay icn-link">
															<a href="/surgery.html"><img src="assets/images/art/work01.jpg" alt=""></a>
														</div>
														<figcaption>
															
													
														</figcaption>
													</figure>
												</div>
											  
												<div class="col-sm-6 col-lg-3 inner">
												<h4>Nursing</h4>
													<figure>
														<div class="icon-overlay icn-link">
															<a href="#"><img src="assets/images/art/work01.jpg" alt=""></a>
														</div>
														<figcaption>
															
												
														</figcaption>
													</figure>
												</div>
											  
												<div class="col-sm-6 col-lg-3 inner">
												<h4>Online</h4>
													<figure>
														<div class="icon-overlay icn-link">
															<a href="#"><img src="assets/images/art/work01.jpg" alt=""></a>
														</div>
														<figcaption>
															
														
														</figcaption>
													</figure>
												</div>
											  
												<div class="col-sm-6 col-lg-3 inner">
												<h4>Books</h4>
													<figure>
														<div class="icon-overlay icn-link">
															<a href="#"><img src="assets/images/art/work01.jpg" alt=""></a>
														</div>
														<figcaption>
															
															
														</figcaption>
													</figure>
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
															<a href="/clinical.html"><img src="assets/images/art/work01.jpg" alt=""></a>
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
															<a href="/media-solutions.html"><img src="assets/images/art/work01.jpg" alt=""></a>
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
															<a href="/customer.html"><img src="assets/images/art/work01.jpg" alt=""></a>
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

								
								<li class="dropdown yamm-fullwidth">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown">Courses</a>
									
									<ul class="dropdown-menu yamm-dropdown-menu">
										<li>
											<div class="yamm-content row">
      
												<div class="col-sm-6 col-lg-3 inner">
													<h4>Upcoming Events</h4>
													<figure>
														<div class="icon-overlay icn-link">
															<a href="#"><img src="assets/images/art/work01.jpg" alt=""></a>
														</div>
														<figcaption>
															<p>View Our Upcoming Events</p>
													
														</figcaption>
													</figure>
												</div>
										  
												<div class="col-sm-6 col-lg-3 inner">
										  
												<div class="row thumbs gap-xs">
										  
													<div class="col-6 thumb">
														<figure class="icon-overlay icn-link">
															<a href="#"><img src="assets/images/art/work02.jpg"
																	alt=""></a>
														</figure>
													</div>
										  
													<div class="col-6 thumb">
														<figure class="icon-overlay icn-link">
															<a href="#"><img src="assets/images/art/work03.jpg"
																	alt=""></a>
														</figure>
													</div>
										  
													<div class="col-6 thumb">
														<figure class="icon-overlay icn-link">
															<a href="#"><img src="assets/images/art/work04.jpg"
																	alt=""></a>
														</figure>
													</div>
										  
													<div class="col-6 thumb">
														<figure class="icon-overlay icn-link">
															<a href="#"><img src="assets/images/art/work05.jpg"
																	alt=""></a>
														</figure>
													</div>
										  
													<div class="col-6 thumb">
														<figure class="icon-overlay icn-link">
															<a href="#"><img src="assets/images/art/work06.jpg"
																	alt=""></a>
														</figure>
													</div>
										  
													<div class="col-6 thumb">
														<figure class="icon-overlay icn-link">
															<a href="#"><img src="assets/images/art/work07.jpg"
																	alt=""></a>
														</figure>
													</div>
										  
												</div>
											</div>
											  
												
											  
											  </div>
										</li>
									</ul>
								</li>
								
								<li>
								<a href="#">Contact</a>
							</li>
								
								<li class="dropdown searchbox">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-search"></i></a>
											  
									<div class="dropdown-menu dropdown-menu-right">
										<form id="search" class="navbar-form search" role="search">
											<input type="search" class="form-control" placeholder="Type to search">
											<button type="submit" class="btn btn-submit icon-right-open"></button>
										</form>
									</div>
								</li>
								
							</ul>
							
						
						</div>
					</div>
				</div>
			</div>
		</header>`
});
