

// Vue.component("event-component", {
//   data: function() {
//     return {
//       courses: []
//     };
// 	},
// 	methods: {
//     fetchCourses: function () {
//       const baseURI = 'https://cinemed-backend.herokuapp.com/courses'
//       this.$http.get(baseURI)
//       .then((result) => {
// 				console.log(result)
//         this.courses = result.data
//       })
//     }
// 	},
// 	mounted: function () {
// 		this.fetchCourses()
// 	},
//   template: `
// 	<section id="pricing-tables">
// 		<div class="container inner">
			
// 			<div class="row">
// 				<div class="col-lg-8 col-md-9 mx-auto text-center">
// 					<header>
// 						<h1>CineMed Upcoming Conferences</h1>
// 					</header>
// 				</div><!-- /.col -->
// 			</div><!-- /.row -->
			
// 			<div class="row pricing" >


// 					<div class="col-lg-4 col-md-6 inner-top-sm" v-for="course in courses">
// 						<div class="card" style="width: 20rem;">
// 							<img class="card-img-top" src="assets/images/cinemed/1.jpg" alt="Card image cap" style="height:50%">
// 							<div class="card-body">
// 								<center>
// 									<h4 class="card-title">{{ course.Event }}</h4>
// 									<p class="card-text">{{ course.Facility }}</p>
// 									<i class="icon-globe"></i> {{ course.City }} <br>
// 									<i class="icon-calendar"></i> {{ course.Date }} <br>
// 									<a v-bind:href="course.Website" class="btn btn-green">View Event Site</a>
// 								</center>
// 							</div>
// 						</div>
// 					</div>

					
// 				</div>

// 			</div>
// 		</div>
// 	</section>

// `
// });

// new Vue({
//   el: ".eventsVue"
// });
