

const events = new Vue({
	el: ".eventsVue",
  data: {
		courses: [
			{
				"Event": "10th Annual Cherry Blossom Otolaryngology Update",
				"Facility": "George Washington University Hospital",
				"City": "Washington D.C.",
				"Date": "March 29-30, 2019",
				"Website": "https://cine-med.com/cbo/",
				"_id": "5c92dd5eaf5bfc179856f4e7",
				"createdAt": "2019-03-21T00:39:58.603Z",
				"updatedAt": "2019-03-21T00:39:58.872Z",
				"__v": 0,
				"id": "5c92dd5eaf5bfc179856f4e7",
				"Image": null
				},
				{
				"Event": "6th Annual Flexible Endoscopic Surgery and Bariatric Endoscopy Course",
				"Facility": "Loews Miami Beach Hotel",
				"City": "Miami, FL",
				"Date": "April 12-14, 2019",
				"Website": "https://fesconference.com/",
				"_id": "5c92e61937576c00174fd08d",
				"createdAt": "2019-03-21T01:17:13.424Z",
				"updatedAt": "2019-03-21T01:17:13.439Z",
				"__v": 0,
				"id": "5c92e61937576c00174fd08d",
				"Image": null
				},
				{
				"Event": "International Vein Congress 2019",
				"Facility": "Loews Miami Beach Hotel",
				"City": "Miami, FL",
				"Date": "April 25-27, 2019",
				"Website": "https://ivcmiami.com/",
				"_id": "5c92e63037576c00174fd08e",
				"createdAt": "2019-03-21T01:17:36.973Z",
				"updatedAt": "2019-03-21T01:17:36.988Z",
				"__v": 0,
				"id": "5c92e63037576c00174fd08e",
				"Image": null
				},
				{
				"Event": "29th Annual Scientific Assembly of The Society of Black Academic Surgeons",
				"Facility": "Intercontinental New York Barclay",
				"City": "New York, NY",
				"Date": "April 25-27, 2019",
				"Website": "https://cine-med.com/sbas2019/",
				"_id": "5c92e6f537576c00174fd08f",
				"createdAt": "2019-03-21T01:20:53.980Z",
				"updatedAt": "2019-03-21T01:20:53.990Z",
				"__v": 0,
				"id": "5c92e6f537576c00174fd08f",
				"Image": null
				},
				{
				"Event": "CVI Bootcamp",
				"Facility": "Omni Charlotte Hotel",
				"City": "Charlotte, NC",
				"Date": "May 17-18, 2019",
				"Website": "https://cine-med.com/cvibootcamp/",
				"_id": "5c92e70e37576c00174fd090",
				"createdAt": "2019-03-21T01:21:18.251Z",
				"updatedAt": "2019-03-21T01:21:18.265Z",
				"__v": 0,
				"id": "5c92e70e37576c00174fd090",
				"Image": null
				},
				{
				"Event": "Chicago LiverMet Symposium",
				"Facility": "The University Club Chicago",
				"City": "Chicago, IL",
				"Date": "May 30, 2019",
				"Website": "https://livermetchicago.com/",
				"_id": "5c92e72537576c00174fd091",
				"createdAt": "2019-03-21T01:21:41.732Z",
				"updatedAt": "2019-03-21T01:21:41.740Z",
				"__v": 0,
				"id": "5c92e72537576c00174fd091",
				"Image": null
				},
				{
				"Event": "16th Annual Bariatric Summit",
				"Facility": "The Peabody Memphis",
				"City": " Memphis, TN",
				"Date": "September 21-22, 2019",
				"Website": "https://bariatricsummit.com/",
				"_id": "5c92e74a37576c00174fd092",
				"createdAt": "2019-03-21T01:22:18.729Z",
				"updatedAt": "2019-03-21T01:22:18.738Z",
				"__v": 0,
				"id": "5c92e74a37576c00174fd092",
				"Image": null
				},
				{
				"Event": "Women's Leadership in Surgery Conference",
				"Facility": "New York University",
				"City": "New York, NY",
				"Date": "October 4, 2019",
				"Website": "https://cine-med.com/wis/",
				"_id": "5c92e76237576c00174fd093",
				"createdAt": "2019-03-21T01:22:42.763Z",
				"updatedAt": "2019-03-21T01:22:42.771Z",
				"__v": 0,
				"id": "5c92e76237576c00174fd093",
				"Image": null
				},
				{
				"Event": "Limb Salvage and Woundcare Symposium: A Team Approach",
				"Facility": "Double Tree by Hilton",
				"City": "Beachwood, OH",
				"Date": "October 11-12, 2019",
				"Website": "https://limbsalvagecme.com/",
				"_id": "5c92e79a37576c00174fd094",
				"createdAt": "2019-03-21T01:23:38.019Z",
				"updatedAt": "2019-03-21T01:23:38.028Z",
				"__v": 0,
				"id": "5c92e79a37576c00174fd094",
				"Image": null
				},
				{
				"Event": "8th Meeting of the American College of Wound Healing and Tissue Repair ",
				"Facility": "Chicago Marriot Downtown Magnificent Mile ",
				"City": "Chicago, IL ",
				"Date": "October 11-12, 2019",
				"Website": "https://acwound.org/",
				"_id": "5c92e7b637576c00174fd095",
				"createdAt": "2019-03-21T01:24:06.138Z",
				"updatedAt": "2019-03-21T01:24:06.145Z",
				"__v": 0,
				"id": "5c92e7b637576c00174fd095",
				"Image": null
				},
				{
				"Event": "Bariatric Endoscopic Surgery Trends (BEST) Conference 2019",
				"Facility": "The Roosevelt Hotel ",
				"City": "New York, NY",
				"Date": "December 9-10, 2019",
				"Website": "https://best2019newyork.com/index.php",
				"_id": "5c92e7d137576c00174fd096",
				"createdAt": "2019-03-21T01:24:33.056Z",
				"updatedAt": "2019-03-21T01:24:33.066Z",
				"__v": 0,
				"id": "5c92e7d137576c00174fd096",
				"Image": null
				}
		]
	}
		
  ,
  template: `
			<section id="pricing-tables">
				<div class="container inner">
					
					<div class="row">
						<div class="col-lg-8 col-md-9 mx-auto text-center">
							<header>
								<h1>CineMed Upcoming Conferences</h1>
							</header>
						</div><!-- /.col -->
					</div><!-- /.row -->
					
					<div class="row pricing" >


							<div class="col-lg-4 col-md-6 inner-top-sm" v-for="course in courses">
								<div class="card" style="width: 20rem;">
									<img class="card-img-top" src="assets/images/cinemed/1.jpg" alt="Card image cap" style="height:50%">
									<div class="card-body">
										<center>
											<h4 class="card-title">{{ course.Event }}</h4>
											<p class="card-text">{{ course.Facility }}</p>
											<i class="icon-globe"></i> {{ course.City }} <br>
											<i class="icon-calendar"></i> {{ course.Date }} <br>
											<a v-bind:href="course.Website" class="btn btn-green">View Event Site</a>
										</center>
									</div>
								</div>
							</div>

							
						</div>

					</div>

					

					
						
					
				</div><!-- /.container -->
			</section>

    `
})

