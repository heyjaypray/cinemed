Vue.component("product-component", {});

new Vue({
el: ".products",
template: `
<div>
  <section id="product">
    <div class="container inner-top inner-bottom-sm">


      <div class="row inner-top-sm">

        <div class="col-sm">

          <div class="col-sm">
            <h4>SAGES Tips and Tricks of the Top 21</h4>
            <p>Editor: Shanu Kothari, MD</p>
            <div class="row">
              <div class="col">
                <img src="/assets/images/cinemed/product1.gif" />
              </div>
              <div class="col">
                <p><strong>Product Details</strong></p>
                <p>Product ID: MS1310</p>
                <p>Year Produced: 2016</p>
              </div>
            </div>
          </div>

        </div>

        <div class="col-sm"></div>

        <div class="col-sm">
          <div class="card">
            <div class="card-header">
              Contact Us: 1-800-253-7657
            </div>
            <div class="form-check">
              <div class="form-check">
                <input class="form-check-input ml-5" type="radio" name="exampleRadios" id="exampleRadios1"
                  value="option1" checked>
                <label class="form-check-label" for="exampleRadios1">
                  SAGES Members $320.00
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input ml-5" type="radio" name="exampleRadios" id="exampleRadios2"
                  value="option2">
                <label class="form-check-label" for="exampleRadios2">
                  Non-Members $390.00
                </label>
              </div>

              <div class="row mt-3">
                <div class="col-sm-3">
                  <input type="input" class="form-control" id="qty" aria-describedby="qty" placeholder="QTY">
                </div>

                <div class="col-sm-5">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

              </div>

              <div class="row">
                <div class="col-sm-6">
                  <button type=" button" class="btn btn-success">Add To Cart</button>
                </div>
              </div>

            </div>



          </div>
        </div>



      </div>

    </div>
  </section>

  <section id="standard-tabs-top mt-0">
    <div class="container inner">

      <div class="row">
        <div class="col-12 inner-top">
          <div class="tabs tabs-top tab-container">

            <ul class="etabs text-center">
              <li class="tab"><a href="#tab-1">Description</a></li>
              <li class="tab"><a href="#tab-2">Table of Contents</a></li>
              <li class="tab"><a href="#tab-3">Contributors</a></li>
            </ul><!-- /.etabs -->

            <div class="panel-container">

              <div class="tab-content" id="tab-1">
                <div class="row">

                  <p>Introducing "SAGES Tips and Tricks of the Top 21", a companion collection to the highly popular
                    "Top 21 Procedures Every Practicing Surgeon Should Know."</p>

                  <p>While the original Top 21 covers the basic surgical techniques commonly encountered by surgeons,
                    the new Tips and Tricks collection delves deeper into the commonly seen challenges faced by
                    surgeons. Each main topic features one or more videos covering such scenarios as:</p>

                  <ul class="circled">
                    <li>Controlling hemorrhage</li>
                    <li>Management of complications</li>
                    <li>Abnormal Anatomy</li>
                    <li>Challenging Situations</li>
                    <li>Tips and tricks in performing common and uncommon procedures</li>
                    <li>And much more</li>
                  </ul>

                  <p>Over 100 individual narrated videos provide a wealth of information to help prepare the surgeon for
                    the unexpected, and to improve patient outcomes.</p>

                  <p><strong>Shanu Kothari, MD</strong> <br>
                    Project Editor
                    <br>
                    <br>

                    <strong>Included Videos</strong>



                    <ul class="circled">
                      <li>Upper Endoscopy</li>
                      <li>Colonoscopy</li>
                      <li>Laparoscopic Laparoscopic Cholecystectomy and Common Bile Duct Exploration</li>
                      <li>Laparoscopic Nissen Fundoplication</li>
                      <li>Laparoscopic Paraesophageal Hernia Repair</li>
                      <li>Laparoscopic Heller Myotomy</li>
                      <li>Laparoscopic Inguinal Hernia Repair</li>
                      <li>Laparoscopic Ventral Hernia Repair</li>
                      <li>Laparoscopic Splenectomy</li>
                      <li>Laparoscopic Adrenalectomy</li>
                      <li>Laparoscopic Right Hemicolectomy & Appendectomy</li>
                      <li>Laparoscopic Sigmoid Colectomy/Low Anterior Resection</li>
                      <li>Laparoscopic Roux-en-Y Gastric Bypass</li>
                      <li>Laparoscopic Adjustable Gastric Band</li>
                      <li>Laparoscopic Ultrasound</li>
                      <li>Laparoscopic Distal Pancreatectomy</li>
                      <li>Laparoscopic Liver Biopsy and Resection</li>
                      <li>Laparoscopic Esophagectomy</li>
                      <li>Laparoscopic Gastric Resection</li>
                      <li>Laparoscopic Treatment of Peptic Ulcer Disease</li>

                    </ul>
                  </p>










                </div><!-- /.row -->
              </div><!-- /.tab-content -->

              <div class="tab-content" id="tab-2">
                <div class="row">

                  <p><strong>Upper Endoscopy</strong><br>
                    Matthew Kroh, MD; John Rodriguez, MD
                    <br>
                    <br>

                    <ul class="circled">
                      <li>Upper Endoscopy with Balloon Dilation of Gastro-jejunostomy</li>
                      <li>Endoscopic Dilation of Esophago-jejunostomy (EJ)</li>
                      <li>Sutured Endoscopic Anastomotic Outlet Reduction</li>
                      <li>Upper Endoscopy with Percutaneous Endoscopic Jejunostomy (PEJ)</li>

                    </ul>

                  </p>

                </div><!-- /.row -->

                <div class="row">
                  <p><strong>Colonoscopy</strong><br>
                    Richard L. Whelan, MD; Elizabeth A. Myers, DO; Vesna Cekic, RN
                    <br>
                    <br>

                    <ul class="circled">
                      <li>Introduction and Setup</li>
                      <li>Insertion</li>
                      <li>Cold Polypectomy</li>
                      <li>Hot Snare Polypectomy</li>
                      <li>Specimen Retrieval</li>
                      <li>Endoscopic Mucosal Reaction</li>
                      <li>Adjunct Tools</li>
                      <li>Endoscopic Clipping</li>
                      <li>Bowel Preparation</li>
                      <li>Challenges of Colonoscopy, Guidelines, and Conclusion</li>

                    </ul>

                  </p>
                </div>

              </div><!-- /.tab-content -->

              <div class="tab-content" id="tab-3">
                <div class="row d-md-block d-lg-flex clearfix">

                  Maurice Arregui, MD<br>
                  Matthew T. Baker, MD<br>
                  Eren Berber, MD<br>
                  Fredrick Brody, MD<br>
                  Raquel S. Bueno, MD<br>
                  Vesna Cekic, RN<br>
                  Bipan Chand, MD<br>
                  Nathan Conway, MD<br>
                  Christy Dunst, MD<br>
                  Matthew Goldblatt, MD<br>
                  Brandon T. Grover, MD<br>
                  John Hagen, MD<br>
                  Chet Hammill, MD<br>
                  Robert Josloff, MD<br>
                  Aliyah Kanji, MD<br>
                  Shanu Kothari, MD<br>
                  Matthew Kroh, MD<br>
                  Steven Leeds, MD<br>
                  John Linn, MD<br>
                  Cedric S.F. Lorenzo, MD<br>
                  Rami Lufti, MD<br>
                  C. Van Martin, MD<br>
                  Scott Melvin, MD<br>
                  Joseph Muldoon, MD<br>
                  Kenric Murayama, MD<br>
                  Elizabeth A. Myers, DO<br>
                  Sabrena Nouria, MD<br>
                  Chan Park, MD<br>
                  Kyle Perry, MD<br>
                  Pornthep Prathanvanich, MD<br>
                  Patrick Reardon, MD<br>
                  Kevin Reavis, MD<br>
                  John Rodriguez, MD<br>
                  Richard L. Whelan, MD<br>
                  Shigeki Yamaguchi, MD<br>

                </div><!-- /.row -->
              </div><!-- /.tab-content -->

            </div><!-- /.panel-container -->

          </div><!-- /.tabs -->
        </div><!-- /.col -->
      </div><!-- /.row -->

    </div><!-- /.container -->
  </section>
</div>



`
});