Vue.component("footer-component", {
  template: `<footer class="dark-bg">
		<div class="container inner">
			<div class="row">

				<div class="col-lg-4 col-md-6 inner">
					<h4>Who we are</h4>
					<a href="index.html"><img class="logo img-intext" src="assets/images/cinemed/cinemed-white.png" alt=""></a>
					<p>Magnis modipsae voloratati andigen daepeditem quiate re porem que aut labor. Laceaque eictemperum
						quiae sitiorem rest non restibusaes maio es dem tumquam.</p>
					<a href="about.html" class="txt-btn">More about us</a>
				</div><!-- /.col -->



				<div class="col-lg-4 col-md-6 inner">
					<h4>Get In Touch</h4>
					<p>Doloreiur quia commolu ptatemp dolupta oreprerum tibusam eumenis et consent accullignis dentibea
						autem inisita.</p>
					<ul class="contacts">
						<li><i class="icon-location contact"></i> 84 Street, City, State 24813</li>
						<li><i class="icon-mobile contact"></i> +00 (123) 456 78 90</li>
						<li><a href="#"><i class="icon-mail-1 contact"></i> info@reen.com</a></li>
					</ul><!-- /.contacts -->
				</div><!-- /.col -->

				<div class="col-lg-4 col-md-6 inner">
					<h4>Free updates</h4>
					<p>Conecus iure posae volor remped modis aut lor volor accabora incim resto explabo.</p>
					<form id="newsletter" class="form-inline newsletter" role="form">
						<label class="sr-only" for="exampleInputEmail">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail"
							placeholder="Enter your email address">
						<button type="submit" class="btn btn-submit">Subscribe</button>
					</form>
				</div><!-- /.col -->

			</div><!-- /.row -->
		</div><!-- .container -->

		<div class="footer-bottom">
			<div class="container inner clearfix">
				<p class="float-left">© 2019 CineMed. All rights reserved.</p> <br>
				<p class="float-left">Designed by Think Thought Media LLC.</p>
				<ul class="footer-menu float-right">
					<li><a href="index.html">Home</a></li>
					<li><a href="portfolio.html">Portfolio</a></li>
					<li><a href="blog.html">Blog</a></li>
					<li><a href="about.html">About</a></li>
					<li><a href="services.html">Services</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul><!-- .footer-menu -->
			</div><!-- .container -->
		</div><!-- .footer-bottom -->
	</footer>`
});

new Vue({
  el: ".footerVue"
});
