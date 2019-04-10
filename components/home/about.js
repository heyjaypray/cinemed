const aboutUs = new Vue({
  el: ".aboutUs",
  template: `
  <section id="circle-tabs">
        <div class="container inner">
          <div class="row">
            <div class="col-lg-8 col-md-9 mx-auto text-center">
              <header>
                <h1>Delivering Contemporary Pathways to Medical Education</h1>
                <p>
                  At Ciné-Med, we think differently about medical education. We don’t just deliver education…we build education that inspires innovative and effective learning for healthcare professionals.
                </p>
              </header>
            </div>
          </div>

          <div class="row">
            <div class="col-12 inner-top">
              <div class="tabs tabs-services tabs-circle-top tab-container">
                <ul class="etabs text-center">
                  <li class="tab">
                    <a href="#tab-1"
                      ><div><i class="icon-lamp"></i></div>
                      Clinical Education and Training</a>
                  </li>
                  <li class="tab">
                    <a href="#tab-2"
                      ><div><i class="icon-flow-tree"></i></div>
                      Innovative Media Solutions</a>
                  </li>
                  <li class="tab">
                    <a href="#tab-3"
                      ><div><i class="icon-beaker"></i></div>
                      Course Management</a>
                  </li>
                </ul>

                <div class="panel-container">
                  <div class="tab-content" id="tab-1">
                    <div class="row">
                      <div class="col-lg-5 col-md-6 offset-lg-1 inner-right-xs">
                        <figure>
                          <img src="assets/images/art/product05.jpg" alt="" />
                        </figure>
                      </div>

                      <div class="col-lg-5 col-md-6 inner-top-xs inner-left-xs">
                        <h3> Clinical Education and Training </h3>
                        <p>
                          Magnis modipsae que lib voloratati andigen daepedor
                          quiate ut reporemni aut labor. Laceaque quiae sitiorem
                          ut restibusaes es tumquam core posae volor remped
                          modis volor. Doloreiur qui commolu ptatemp dolupta
                          orem retibusam emnis et consent accullignis lomnus.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="tab-content" id="tab-2">
                    <div class="row">
                      <div class="col-lg-5 col-md-6 order-md-2 inner-left-xs">
                        <figure>
                          <img src="assets/images/art/product01.jpg" alt="" />
                        </figure>
                      </div>

                      <div
                        class="col-lg-5 col-md-6 order-md-1 offset-lg-1 inner-top-xs inner-right-xs"
                      >
                        <h3>Innovative Media Solutions</h3>
                        <p>
                          Magnis modipsae que lib voloratati andigen daepedor
                          quiate ut reporemni aut labor. Laceaque quiae sitiorem
                          ut restibusaes es tumquam core posae volor remped
                          modis volor. Doloreiur qui commolu ptatemp dolupta
                          orem retibusam emnis et consent accullignis lomnus.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="tab-content" id="tab-3">
                    <div class="row d-md-block d-lg-flex clearfix">
                      <div
                        class="col-lg-4 col-md-6 order-lg-2 float-md-left float-lg-none inner-left-xs inner-right-xs"
                      >
                        <figure>
                          <img src="assets/images/art/product06.jpg" alt="" />
                        </figure>
                      </div>

                      <div
                        class="col-lg-3 col-md-6 order-lg-1 offset-lg-1 float-md-left float-lg-none inner-top-xs"
                      >
                        <h3>Course Management</h3>
                        <p>
                          Magnis modipsae lib voloratati andigen daepedor quiate
                          aut labor. Laceaque quiae sitiorem resti est lore
                          tumquam core posae volor uso remped modis volor.
                          Doloreiur qui commolu ptatemp dolupta orem retibusam
                          emnis et consent it accullignis orum lomnus.
                        </p>
                      </div>

                      <div
                        class="col-lg-3 col-md-6 order-lg-3 float-md-left float-lg-none inner-top-xs"
                      >
                        <!-- <h3>User interface</h3> -->
                        <p>
                          Magnis modipsae lib voloratati andigen daepedor quiate
                          aut labor. Laceaque quiae sitiorem resti est lore
                          tumquam core posae volor uso remped modis volor.
                          Doloreiur qui commolu ptatemp dolupta orem retibusam
                          emnis et consent it accullignis orum lomnus.
                        </p>
                      </div>
                    </div>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      `
});