const jobsListings = [
      {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
      },
      {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      },
      {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["Ruby", "Sass"]
      },
      {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
      },
      {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
      },
      {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
      },
      {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
      },
      {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      }
    ];

      

    function getTagHTML(tag, tagClass = 'tag'){
      return `<span class="${tagClass}">
               ${tag}
              </span>`;
    }
 
    function getJobListingHTML(jobData, filterTags = []) {
       
        const JOB_TAGS_PLACEHOLDER = '###JOB_TAGS###';

        let jobListingHTML = `
        <div class="jobs_item">        
        <div class="jobs_column-left">
         <div class="img-con">
          <img src="${jobData.logo}" alt="${jobData.comapny}" class="jobs_img" />
         </div>

          <div class="jobs_info">
            <div class="company-newfeatured-con">
               <span class="jobs_company">${jobData.company}</span>
               <div class="new-featured-tag">
                 <div class="newtag ntag--hidden" id="ntag">NEW!</div>
                 <div class="featuredtag ntag--hidden" id="ntag">FEATURED</div>
               </div>
            </div>

            <span class="jobs_title">${jobData.position}</span>
           
            <ul class="jobs_details">
              <li class="jobs_details-item">${jobData.postedAt}</li>
              <li class="jobs_details-item">${jobData.contract}</li>
              <li class="jobs_details-item">${jobData.location}</li>
            </ul>
          </div>
        </div>
      <hr class="horizontal--hidden horizontal--show"/>
      <div class="jobs_column-right">
        ${JOB_TAGS_PLACEHOLDER}
      </div>
    </div>
    `;  
  

    const tagsArray  = [
         jobData.role,
         jobData.level,
         ...(jobData.languages || []),
         ...(jobData.tools || []),
    ];

     
    const newOrFeatured = [
      jobData.new,
      jobData.featured,
    ];

    const newAndFeatured = document.getElementsByClassName('new-featured-tag');

    function newFeatured () {
      if (newOrFeatured.jobData.new || newOrFeatured.jobData.featured == false) {
           newAndFeatured.add('ntag--hidden')
      }
    }


    
    const doesNotPassFilter = filterTags.length && !filterTags.some(tag => (
      tagsArray.includes(tag)
    ));

    if(doesNotPassFilter) {
      return '';
    }

    const tagsString = tagsArray.reduce((acc, currentTag) => {
        return acc + getTagHTML(currentTag); 
    }, '');

    return jobListingHTML.replace(JOB_TAGS_PLACEHOLDER, tagsString);
    
};

function toggleClass(el, className) {
    if(el.classList.contains(className)) {
        el.classList.remove(className);         
        return;
    }
        el.classList.add(className); 
}

function getSearchBarTags(tagValue, searchContentEl) {    
    
    let searchBarTags = Array.from(searchContentEl.children)
        .map(node =>node.innerHTML && node.innerHTML.trim()) 
        .filter(tag => !!tag);
       
         if(searchBarTags.includes(tagValue)) {
        console.log()

        searchBarTags = searchBarTags.filter(tag => tag !== tagValue);   
     }else {
        searchBarTags = [...searchBarTags, tagValue]; 
     }

      return searchBarTags; 
}

function setJobsListings(filterTags) {
  const jobsListingsHTML = jobsListings.reduce((acc, currentListing) =>{
    return acc + getJobListingHTML(currentListing, filterTags);
}, '');

   document.getElementById('jobs').innerHTML = jobsListingsHTML;
}

// clear all ....
const clearAll = document.getElementById('search_clear');

clearAll.addEventListener('click', () =>{
     document.getElementById('search_content').innerHTML = "";    
    
});

window.addEventListener('click', (event) =>{
    const targetEl = event.target;
    const tagValue= targetEl.innerHTML.trim();
    const tagClasses = ['tag', 'close-tag'];

    if(!tagClasses.some(c => targetEl.classList.contains(c))) {
        return;
    }    
    
    const searchWrapper = document.getElementById('search');
    const searchContentEl = document.getElementById('search_content');
    const searchBarTags = getSearchBarTags(tagValue, searchContentEl);    

    if (searchBarTags.length > 0) {
      searchWrapper.classList.remove('search--hidden');
    }else{
      searchWrapper.classList.add('search--hidden');
    };

    // new and feature tags code appears below;

    searchContentEl.innerHTML = searchBarTags.reduce((acc, currentTag) => {
      return acc + getTagHTML(currentTag, 'close-tag')
   }, ''); 

    toggleClass(targetEl, 'tag--active');
    setJobsListings(searchBarTags)


});

setJobsListings()
































































// window.addEventListener("DOMContentLoaded", (event) => {
//     var cardTag = document.querySelectorAll(".job-card__tags li");
//     var filterTagClose = document.querySelectorAll("#filter-tags-list li span");
  
//     for (var i = 0; i < cardTag.length; i++) {
//       cardTag[i].addEventListener("click", tagClicked(i));
//     }  
//     for (var i = 0; i < filterTagClose.length; i++) {
//       filterTagClose[i].addEventListener("click", closeClicked(i));
//     }  
//     refreshList();  
//     //When a card tag is clicked
//     function tagClicked(i) {
//       //Get tag value
//       var cardText = cardTag[i].innerHTML;
  
//       //Create filter tag
//       var newTag = document.createElement("li");
//       newTag.innerHTML =
//       "<p>" + cardText + '</p><span class="close-span">×</span>';
      
      
//       return function () {
//         //check if tag already exits
//         var toAdd = true;
//         var filterListing = document.querySelectorAll("#filter-tags-list li p");
//         for (var keyValue = 0; keyValue < filterListing.length; keyValue++) {
//           if (cardText == filterListing[keyValue].innerHTML) {
//             toAdd = false;
//           }
//         }
  
//         //Append filter tag to the list
//         if (toAdd) {
//           document.getElementById("filter-tags-list").appendChild(newTag);
//         }
//         refreshList();
//       };
//     }
  
//     //When filter tag close is clicked
//     function closeClicked(i) {
//       return function () {
//         filterTagClose[i].parentNode.remove();
//         refreshList();
//       };
//     }
  
//     //Clear all filter tags
//     document
//       .getElementById("js-clear-tags")
//       .addEventListener("click", function () {
//         document.getElementById("filter-tags-list").innerHTML = "";
//         refreshList();
//       });
  
//     //Function to reload list of jobs
//     function refreshList() {
//       //Refresh the filter list
//       filterTagClose = document.querySelectorAll("#filter-tags-list li span");
//       var fiterC = document.getElementById("filter-tags-list").parentNode;
  
//       for (var i = 0; i < filterTagClose.length; i++) {
//         filterTagClose[i].addEventListener("click", closeClicked(i));
//       }
  
//       //List Sorting
//       var jobListing = document.querySelectorAll("#job-list>li");
//       var filterListing = document.querySelectorAll("#filter-tags-list li p");
//       var matches = 0;
  
//       for (var job = 0; job < jobListing.length; job++) {
//         var skillSet = jobListing[job].querySelectorAll(".job-card__tags li");
//         matches = 0;
  
//         for (var keyValue = 0; keyValue < filterListing.length; keyValue++) {
//           for (var skill = 0; skill < skillSet.length; skill++) {
//             if (skillSet[skill].innerHTML == filterListing[keyValue].innerHTML) {
//               matches += 1;
//             }
//           }
//         }
//         if (matches == filterListing.length) {
//           jobListing[job].classList.remove("d-none");
//         } else {
//           jobListing[job].classList.add("d-none");
//         }
//       }
  
//       //Check if tags are present
//       if (document.querySelectorAll("#filter-tags-list li").length) {
//          fiterC.classList.remove("d-none");
//       } else {
//         fiterC.classList.add("d-none");
//         for (var i = 0; i < jobListing.length; i++) {
//           jobListing[i].classList.remove("d-none");
//         }
//       }
//     }
//   });
  




//  <main>
//     <div class="container">
//         <div class="row">
//             <div class="col-12">
//                 <div class="filter-tags-c">
//                     <ul id="filter-tags-list"></ul>
//                     <p class="clear-tags" id="js-clear-tags"> Clear</p>
//                 </div>
//             </div>
//         </div>
//         <div class="row">
//             <ul class="col-12" id="job-list">
//                 <li class="job-card new featured">
//                     <div class="job-card__info">
//                         <div class="d-md-flex align-items-center">
//                             <div class="img-c"><img src="http://projects.lollypop.design/job-listing/photosnap.svg" /></div>
//                             <div>
//                                 <div class="d-flex align-items-center">
//                                     <p>Photosnap</p>
//                                     <p class="tag-new">New!</p>
//                                     <p class="tag-featured">Featured</p>
//                                 </div><a href="javascript:void(0)">
//                                     <h6>Senior Frontend Developer</h6>
//                                 </a>
//                                 <ul>
//                                     <li>1d ago</li>
//                                     <li>Full Time</li>
//                                     <li>USA Only</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <ul class="job-card__tags">
//                         <li>Frontened</li>
//                         <li>Senior</li>
//                         <li>HTML</li>
//                         <li>CSS</li>
//                         <li>JavaScript</li>
//                     </ul>
//                 </li>
//                 <li class="job-card new featured">
//                     <div class="job-card__info">
//                         <div class="d-md-flex align-items-center">
//                             <div class="img-c"><img src="http://projects.lollypop.design/job-listing/manage.svg" /></div>
//                             <div>
//                                 <div class="d-flex align-items-center">
//                                     <p>Manage</p>
//                                     <p class="tag-new">New!</p>
//                                     <p class="tag-featured">Featured</p>
//                                 </div><a href="javascript:void(0)">
//                                     <h6>Fullstack Developer</h6>
//                                 </a>
//                                 <ul>
//                                     <li>1d ago</li>
//                                     <li>Part Time</li>
//                                     <li>Remote</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <ul class="job-card__tags">
//                         <li>Fullstack</li>
//                         <li>Midweight</li>
//                         <li>Python</li>
//                         <li>React</li>
//                     </ul>
//                 </li>
//                 <li class="job-card new">
//                     <div class="job-card__info">
//                         <div class="d-md-flex align-items-center">
//                             <div class="img-c"><img src="http://projects.lollypop.design/job-listing/account.svg" /></div>
//                             <div>
//                                 <div class="d-flex align-items-center">
//                                     <p>Account</p>
//                                     <p class="tag-new">New!</p>
//                                     <p class="tag-featured">Featured</p>
//                                 </div><a href="javascript:void(0)">
//                                     <h6>Junior Frontend Developer</h6>
//                                 </a>
//                                 <ul>
//                                     <li>2d ago</li>
//                                     <li>Part Time</li>
//                                     <li>USA Only</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <ul class="job-card__tags">
//                         <li>Frontened</li>
//                         <li>Junior</li>
//                         <li>React</li>
//                         <li>Sass</li>
//                         <li>JavaScript</li>
//                     </ul>
//                 </li>
//                 <li class="job-card">
//                     <div class="job-card__info">
//                         <div class="d-md-flex align-items-center">
//                             <div class="img-c"><img src="http://projects.lollypop.design/job-listing/myhome.svg" /></div>
//                             <div>
//                                 <div class="d-flex align-items-center">
//                                     <p>MyHome</p>
//                                     <p class="tag-new">New!</p>
//                                     <p class="tag-featured">Featured</p>
//                                 </div><a href="javascript:void(0)">
//                                     <h6>Junior Frontend Developer</h6>
//                                 </a>
//                                 <ul>
//                                     <li>5d ago</li>
//                                     <li>Contract</li>
//                                     <li>USA Only</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <ul class="job-card__tags">
//                         <li>Frontened</li>
//                         <li>Junior</li>
//                         <li>CSS</li>
//                         <li>JavaScript</li>
//                     </ul>
//                 </li>
//                 <li class="job-card">
//                     <div class="job-card__info">
//                         <div class="d-md-flex align-items-center">
//                             <div class="img-c"><img src="http://projects.lollypop.design/job-listing/loop-studios.svg" /></div>
//                             <div>
//                                 <div class="d-flex align-items-center">
//                                     <p>Loop Studios</p>
//                                     <p class="tag-new">New!</p>
//                                     <p class="tag-featured">Featured</p>
//                                 </div><a href="javascript:void(0)">
//                                     <h6>Software Engineer</h6>
//                                 </a>
//                                 <ul>
//                                     <li>1w ago</li>
//                                     <li>Full Time</li>
//                                     <li>Worldwide</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <ul class="job-card__tags">
//                         <li>FullStack</li>
//                         <li>Midweight</li>
//                         <li>JavaScript</li>
//                         <li>Sass</li>
//                         <li>Ruby</li>
//                     </ul>
//                 </li>
//                 <li class="job-card">
//                     <div class="job-card__info">
//                         <div class="d-md-flex align-items-center">
//                             <div class="img-c"><img src="http://projects.lollypop.design/job-listing/faceit.svg" /></div>
//                             <div>
//                                 <div class="d-flex align-items-center">
//                                     <p>FaceIt</p>
//                                     <p class="tag-new">New!</p>
//                                     <p class="tag-featured">Featured</p>
//                                 </div><a href="javascript:void(0)">
//                                     <h6>Senior Frontend Developer</h6>
//                                 </a>
//                                 <ul>
//                                     <li>2w ago</li>
//                                     <li>Full Time</li>
//                                     <li>UK only</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <ul class="job-card__tags">
//                         <li>Backend</li>
//                         <li>Junior</li>
//                         <li>Ruby</li>
//                         <li>RoR</li>
//                     </ul>
//                 </li>
//                 <li class="job-card">
//                     <div class="job-card__info">
//                         <div class="d-md-flex align-items-center">
//                             <div class="img-c"><img src="http://projects.lollypop.design/job-listing/shortly.svg" /></div>
//                             <div>
//                                 <div class="d-flex align-items-center">
//                                     <p>Shotly</p>
//                                     <p class="tag-new">New!</p>
//                                     <p class="tag-featured">Featured</p>
//                                 </div><a href="javascript:void(0)">
//                                     <h6>Junior Developer</h6>
//                                 </a>
//                                 <ul>
//                                     <li>1w ago</li>
//                                     <li>Full Time</li>
//                                     <li>Worldwide</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <ul class="job-card__tags">
//                         <li>Frontened</li>
//                         <li>Junior</li>
//                         <li>HTML</li>
//                         <li>Sass</li>
//                         <li>JavaScript</li>
//                     </ul>
//                 </li>
//                 <li class="job-card">
//                     <div class="job-card__info">
//                         <div class="d-md-flex align-items-center">
//                             <div class="img-c"><img src="http://projects.lollypop.design/job-listing/insure.svg" /></div>
//                             <div>
//                                 <div class="d-flex align-items-center">
//                                     <p>Insure</p>
//                                     <p class="tag-new">New!</p>
//                                     <p class="tag-featured">Featured</p>
//                                 </div><a href="javascript:void(0)">
//                                     <h6>Junior Frontend Developer</h6>
//                                 </a>
//                                 <ul>
//                                     <li>1w ago</li>
//                                     <li>Full Time</li>
//                                     <li>USA Only</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <ul class="job-card__tags">
//                         <li>Frontened</li>
//                         <li>Junior</li>
//                         <li>Vue</li>
//                         <li>Javascript</li>
//                         <li>Sass</li>
//                     </ul>
//                 </li>
//                 <li class="job-card">
//                     <div class="job-card__info">
//                         <div class="d-md-flex align-items-center">
//                             <div class="img-c"><img src="http://projects.lollypop.design/job-listing/eyecam-co.svg" /></div>
//                             <div>
//                                 <div class="d-flex align-items-center">
//                                     <p>Eyecam Co.</p>
//                                     <p class="tag-new">New!</p>
//                                     <p class="tag-featured">Featured</p>
//                                 </div><a href="javascript:void(0)">
//                                     <h6>Senior Frontend Developer</h6>
//                                 </a>
//                                 <ul>
//                                     <li>1w ago</li>
//                                     <li>Full Time</li>
//                                     <li>Worldwide</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <ul class="job-card__tags">
//                         <li>Fullstack</li>
//                         <li>Midweight</li>
//                         <li>Javascipt</li>
//                         <li>Django</li>
//                         <li>Python</li>
//                     </ul>
//                 </li>
//                 <li class="job-card">
//                     <div class="job-card__info">
//                         <div class="d-md-flex align-items-center">
//                             <div class="img-c"><img src="http://projects.lollypop.design/job-listing/the-air-filter-company.svg" /></div>
//                             <div>
//                                 <div class="d-flex align-items-center">
//                                     <p>The Air Filter Company</p>
//                                     <p class="tag-new">New!</p>
//                                     <p class="tag-featured">Featured</p>
//                                 </div><a href="javascript:void(0)">
//                                     <h6>Frontend Developer</h6>
//                                 </a>
//                                 <ul>
//                                     <li>1mo ago</li>
//                                     <li>Part Time</li>
//                                     <li>Worldwide</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <ul class="job-card__tags">
//                         <li>Frontened</li>
//                         <li>Junior</li>
//                         <li>React</li>
//                         <li>Sass</li>
//                         <li>Javascript</li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </main>
  