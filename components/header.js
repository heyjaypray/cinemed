const header = new Vue({
  el: ".headerVue",
  template: `<div>
    <header>
    <div class="navbar">

        <div class="navbar-header">
            <div class="container">

                <ul class="info">
                    <li><a href="#"><i class="icon-mail-1 contact"></i>info@cine-med.com</a></li>
                    <li><i class="icon-mobile contact"></i> +00 (123) 456 78 90</li>
                </ul><!-- /.info -->

                <ul class="social">
                    <li><a href="#"><i class="icon-s-facebook"></i></a></li>
                    <li><a href="#"><i class="icon-s-gplus"></i></a></li>
                    <li><a href="#"><i class="icon-s-twitter"></i></a></li>
                    <li><a href="#"><i class="icon-s-pinterest"></i></a></li>
                    <li><a href="#"><i class="icon-s-behance"></i></a></li>
                    <li><a href="#"><i class="icon-s-dribbble"></i></a></li>
                </ul><!-- /.social -->

                <!-- ============================================================= LOGO MOBILE ============================================================= -->

                <a class="navbar-brand" href="index.html"><img src="assets/images/logo.svg" class="logo" alt=""></a>

                <!-- ============================================================= LOGO MOBILE : END ============================================================= -->

                <a class="navbar-toggler btn responsive-menu float-right" data-toggle="collapse"
                    data-target=".navbar-collapse"><i class='icon-menu-1'></i></a>

            </div><!-- /.container -->
        </div><!-- /.navbar-header -->

        <div class="yamm">
            <div class="navbar-collapse collapse">
                <div class="container">

                    <!-- ============================================================= LOGO ============================================================= -->

                    <a class="navbar-brand" href="index.html"><img src="assets/images/cinemed/cinemed.gif" class="logo"
                            alt=""></a>

                    <!-- ============================================================= LOGO : END ============================================================= -->


                    <!-- ============================================================= MAIN NAVIGATION ============================================================= -->

                    <ul class="nav navbar-nav">

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Home</a>


                        </li><!-- /.dropdown -->

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">About Us</a>



                        </li><!-- /.dropdown -->

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Products</a>

                            <ul class="dropdown-menu">
                                <li class="dropdown-submenu">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Surgery</a>

                                    <ul class="dropdown-menu">
                                        <li><a href="#">ACS 2018 Video Sessions</a></li>
                                        <li><a href="#">ACS Video Library</a></li>
                                        <li><a href="#">ACS Online Video Library</a></li>
                                        <li><a href="#">ACS Multimedia Atlas of Surgery</a></li>
                                        <li><a href="#">SAGES Video Based Education</a></li>
                                    </ul><!-- /.dropdown-menu -->
                                </li><!-- /.dropdown-submenu -->

                                <li class="dropdown-submenu">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Nursing</a>

                                    <ul class="dropdown-menu">
                                        <li><a href="#">AORN Video Library</a></li>
                                        <li><a href="#">AORN Online Video Library</a></li>
                                        <li><a href="#">Perioperative Video Library Collections</a></li>
                                        <li><a href="#">First Assistant Products</a></li>
                                        <li><a href="#">RN Best Practice</a></li>
                                    </ul><!-- /.dropdown-menu -->
                                </li><!-- /.dropdown-submenu -->
                                <li><a href="#">Online</a></li>
                                <li><a href="#">Books</a></li>

                            </ul><!-- /.dropdown-menu -->
                        </li><!-- /.dropdown -->

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services</a>

                            <ul class="dropdown-menu">
                                <li class="dropdown-submenu">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Clinical Education
                                        and Training</a>

                                    <ul class="dropdown-menu">
                                        <li><a href="#">Curriculum Design</a></li>
                                        <li><a href="#">Planning, Development </a></li>
                                        <li><a href="#">Web Based Solutions</a></li>
                                        <li class="dropdown-submenu">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">CME</a>

                                            <ul class="dropdown-menu">
                                                <li><a href="#">CME Committee</a></li>

                                            </ul><!-- /.dropdown-menu -->
                                        </li><!-- /.dropdown-submenu -->
                                        <li><a href="#">Innovative Media Solutions</a></li>
                                        <li><a href="#">Customer Engagement</a></li>
                                        <li><a href="#">Medical Publishing</a></li>

                                    </ul><!-- /.dropdown-menu -->

                                </li><!-- /.dropdown-submenu -->

                                <li><a href="#">Innovative Media Solutions</a></li>
                                <li><a href="#">Customer Engagement</a></li>
                                <li><a href="#">Medical Publishing</a></li>

                            </ul><!-- /.dropdown-menu -->
                        </li><!-- /.dropdown -->

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Courses</a>

                            <ul class="dropdown-menu">

                                <li><a href="slider-carousel.html">Upcoming Events</a></li>


                            </ul><!-- /.dropdown-menu -->
                        </li><!-- /.dropdown -->

                        <!-- ============================================================= MEGA MENU ============================================================= -->

                        <li class="dropdown yamm-fullwidth">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Mega Menu</a>

                            <ul class="dropdown-menu yamm-dropdown-menu">
                                <li>
                                    <div class="yamm-content row">

                                        <div class="col-sm-6 col-lg-3 inner">
                                            <h4>Focus on</h4>
                                            <figure>
                                                <div class="icon-overlay icn-link">
                                                    <a href="#"><img src="assets/images/art/work01.jpg" alt=""></a>
                                                </div>
                                                <figcaption>
                                                    <p>Consed quodips ameniat empernam que apid cust quas molor
                                                        eatis numa estio.</p>
                                                    <a href="#" class="btn">View Project</a>
                                                </figcaption>
                                            </figure>
                                        </div><!-- /.col -->

                                        <div class="col-sm-6 col-lg-3 inner">
                                            <h4>Special Pages</h4>

                                            <ul class="circled">
                                                <li><a href="#">3 Columns Details Grid Portfolio</a></li>
                                                <li><a href="#">Fullscreen Grid Portfolio</a></li>
                                                <li><a href="#">Portfolio Post with Video</a></li>
                                                <li><a href="#">2 Columns Grid Blog with Left Sidebar</a></li>
                                                <li><a href="#">3 Columns Grid Blog without Sidebar</a></li>
                                                <li><a href="#">Blog Post with Right Sidebar</a></li>
                                                <li><a href="#">Side Navigation Page</a></li>
                                                <li><a href="#">About Page II</a></li>
                                                <li><a href="#">Service Page I</a></li>
                                                <li><a href="#">Pricing Page I</a></li>
                                                <li><a href="#">Contact Page I</a></li>
                                            </ul><!-- /.circled -->
                                        </div><!-- /.col -->

                                        <div class="col-sm-6 col-lg-3 inner">
                                            <h4>Latest Works</h4>

                                            <div class="row thumbs gap-xs">

                                                <div class="col-6 thumb">
                                                    <figure class="icon-overlay icn-link">
                                                        <a href="#"><img src="assets/images/art/work02.jpg"
                                                                alt=""></a>
                                                    </figure>
                                                </div><!-- /.thumb -->

                                                <div class="col-6 thumb">
                                                    <figure class="icon-overlay icn-link">
                                                        <a href="#"><img src="assets/images/art/work03.jpg"
                                                                alt=""></a>
                                                    </figure>
                                                </div><!-- /.thumb -->

                                                <div class="col-6 thumb">
                                                    <figure class="icon-overlay icn-link">
                                                        <a href="#"><img src="assets/images/art/work04.jpg"
                                                                alt=""></a>
                                                    </figure>
                                                </div><!-- /.thumb -->

                                                <div class="col-6 thumb">
                                                    <figure class="icon-overlay icn-link">
                                                        <a href="#"><img src="assets/images/art/work05.jpg"
                                                                alt=""></a>
                                                    </figure>
                                                </div><!-- /.thumb -->

                                                <div class="col-6 thumb">
                                                    <figure class="icon-overlay icn-link">
                                                        <a href="#"><img src="assets/images/art/work06.jpg"
                                                                alt=""></a>
                                                    </figure>
                                                </div><!-- /.thumb -->

                                                <div class="col-6 thumb">
                                                    <figure class="icon-overlay icn-link">
                                                        <a href="#"><img src="assets/images/art/work07.jpg"
                                                                alt=""></a>
                                                    </figure>
                                                </div><!-- /.thumb -->

                                            </div><!-- /.row -->
                                        </div><!-- /.col -->

                                        <div class="col-sm-6 col-lg-3 inner">
                                            <h4>About Us</h4>
                                            <p>Voluptat ibusaped molorporro consequ idustibus. Reressi morum ut
                                                dolessiti tem nihicid ernatum, coria volore non pro officat ut autem
                                                accaborem conet. Omnis peribus qui dolent praeperrum coria.</p>
                                            <p>Equam conesti occum dolorest, quae venderes quistius, comnitatur sae
                                                dinam nonseculpa cum fugit is verciam.</p>
                                            <a href="#" class="btn">Read More</a>
                                        </div><!-- /.col -->

                                    </div><!-- /.yamm-content -->
                                </li>
                            </ul><!-- /.yamm-dropdown-menu -->
                        </li><!-- /.yamm-fullwidth -->

                        <!-- ============================================================= MEGA MENU : END ============================================================= -->

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Contact</a>


                        </li><!-- /.dropdown -->

                        <li class="dropdown searchbox">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i
                                    class="icon-search"></i></a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <form id="search" class="navbar-form search" role="search">
                                    <input type="search" class="form-control" placeholder="Type to search">
                                    <button type="submit" class="btn btn-submit icon-right-open"></button>
                                </form>
                            </div><!-- /.dropdown-menu -->
                        </li><!-- /.searchbox -->

                    </ul><!-- /.nav -->

                    <!-- ============================================================= MAIN NAVIGATION : END ============================================================= -->

                </div><!-- /.container -->
            </div><!-- /.navbar-collapse -->
        </div><!-- /.yamm -->
    </div><!-- /.navbar -->

    </div>
    <header>`
});
