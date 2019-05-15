const banner = new Vue({
el: "#banner",
template: `


<section id="hero">
  <div id="owl-main" class=" height-lg  ">

    <div class="item" style="background-image: url(assets/images/cinemed/banner.jpg);">
      <div class="container">
        <div class="caption vertical-center text-left">

          <h1 class="fadeInRight-1 light-color"><span>CineMed</span></h1>

          <div class="fadeInRight-3">
            <a href="#"><img src="assets/icons/noun-play2.png" style="width:200px; height:200px;"></a>
          </div><!-- /.fadeIn -->

        </div><!-- /.caption -->
      </div><!-- /.container -->
    </div><!-- /.item -->

  </div><!-- /.owl-carousel -->
</section>

<section id="hero" class="light-bg height-lg img-bg-soft img-bg"
  style="background-image: url(assets/images/art/image-background01.jpg);">
  <div class="container">
    <div class="caption vertical-center text-left">

      <h1 class="fadeInRight-1 light-color"><span>CineMed</span></h1>

      <div class="fadeInRight-3">
        <a href="#"><img src="assets/icons/noun-play2.png" style="width:200px; height:200px;"></a>
      </div><!-- /.fadeIn -->

    </div><!-- /.caption -->
  </div><!-- /.container -->
</section>



`
});