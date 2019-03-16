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

                        <li class="dropdown yamm-fullwidth">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Products</a>

                            <ul class="dropdown-menu yamm-dropdown-menu">
                                  <li>
                                      <div class='productsVue'></div>
                                  </li>
                              </ul>
                            
                        </li>

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

                                <li><a href="#">Upcoming Events</a></li>


                            </ul><!-- /.dropdown-menu -->
                        </li><!-- /.dropdown -->

                        <!-- ============================================================= MEGA MENU ============================================================= -->

                      
<!-- 
                        <li class="dropdown yamm-fullwidth">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Mega Menu</a>

                            <ul class="dropdown-menu yamm-dropdown-menu">
                                  <li>
                                      <div class='productsVue'></div>
                                  </li>
                              </ul>
                            
                        </li> -->
                       

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
