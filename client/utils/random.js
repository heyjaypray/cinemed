/* eslint-disable no-param-reassign */
/**
 * Random jobs
 * @type {Array}
 */
const jobs = [
  "Founder & CEO",
  "Account Coordinator",
  "Account Director",
  "Account Service Intern",
  "Accounting Director",
  "Activities Director",
  "Associate Creative Director",
  "Conversion & UX Strategist",
  "Creative Director",
  "Digital Services Coordinator",
  "Marketing Technologist",
  "Media Strategist",
  "Office Manager",
  "PR & Communications Strategist",
  "President & Chief Digital Officer",
  "Project Manager",
  "Senior Account Executive",
  "Senior Art Director",
  "Social Media Coordinator",
  "Web Project Manager",
  "Accessibility Specialist",
  "Agile Project Manager",
  "Business Systems Analyst",
  "Cloud Architect",
  "Computer Graphics Animator",
  "Content Manager",
  "Content Strategist",
  "Data Analyst",
  "Data Architect",
  "Data Modeler",
  "Data Scientist",
  "Database Administrator",
  "DevOps Manager",
  "Digital Marketing Manager",
  "Frameworks Specialist",
  "Front-End Designer",
  "Full-Stack Developer",
  "Game Developer",
  "Growth Hacker",
  "Information Architect",
  "Interaction Designer",
  "Mobile App Developer",
  "Product Manager",
  "Python Developer",
  "Quality Assurance Specialist",
  "Ruby on Rails Developer",
  "Security Specialist",
  "SEO Consultant",
  "Social Media Manager",
  "Software Developers",
  "Systems Administrator",
  "Systems Engineer",
  "Technical Account Manager",
  "Technical Lead",
  "UI Designer",
  "UX Designer",
  "Web Analytics Developer",
];

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 */
function shuffleArray(a) {
  const b = a;
  for (let i = a.length; i; i -= 1) {
    const j = Math.floor(Math.random() * i);
    [b[i - 1], b[j]] = [a[j], a[i - 1]];
  }
  return b;
}

/**
 * [shuffle description]
 * @param  {[type]} sourceArray [description]
 * @return {[type]}             [description]
 */
function shuffle(sourceArray) {
  for (let i = 0; i < sourceArray.length - 1; i += 1) {
    const j = i + Math.floor(Math.random() * (sourceArray.length - i));

    const temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}


const rNumber = (min = 1, max = 100) => parseInt((Math.random() * (max - min)) + min, 10);
const rJob = () => jobs[rNumber(1, jobs.length - 1)];
const rFloating = (min = 1.1, max = 1.6) => ((Math.random() * (max - min)) + min).toFixed(4);

module.exports = {
  jobs,
  rJob,
  rNumber,
  rFloating,
  shuffle,
  shuffleArray,
};
