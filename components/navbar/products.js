Vue.component("products-component", {
    template: 
    `<div class="yamm-content row">
    
    <div class="col-sm-6 col-lg-3 inner">
        <h4>Surgery</h4>
        <figure>
            <div class="icon-overlay icn-link">
                <a href="/surgery.html"><img src="assets/images/art/work01.jpg" alt=""></a>
            </div>
            <figcaption>
                <!-- <p>ACS Online</p> -->
        
            </figcaption>
        </figure>
    </div><!-- /.col -->
  
    <div class="col-sm-6 col-lg-3 inner">
    <h4>Nursing</h4>
        <figure>
            <div class="icon-overlay icn-link">
                <a href="#"><img src="assets/images/art/work01.jpg" alt=""></a>
            </div>
            <figcaption>
                <!-- <p>AORN / First Assistants Products</p> -->
    
            </figcaption>
        </figure>
    </div><!-- /.col -->
  
    <div class="col-sm-6 col-lg-3 inner">
    <h4>Online</h4>
        <figure>
            <div class="icon-overlay icn-link">
                <a href="#"><img src="assets/images/art/work01.jpg" alt=""></a>
            </div>
            <figcaption>
                <!-- <p>RN Best Practices / Vein Global</p> -->
            
            </figcaption>
        </figure>
    </div><!-- /.col -->
  
    <div class="col-sm-6 col-lg-3 inner">
    <h4>Books</h4>
        <figure>
            <div class="icon-overlay icn-link">
                <a href="#"><img src="assets/images/art/work01.jpg" alt=""></a>
            </div>
            <figcaption>
                <!-- <p>Books</p> -->
                
            </figcaption>
        </figure>
    </div>
  
  </div>`
});

new Vue({
  el: ".productsVue"
});
