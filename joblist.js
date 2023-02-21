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
                <span class="jobs_company">
                    ${jobData.company}
                </span>
               
             <div class="new-featured-tag">
              ${jobData.new?
              `<div class="newtag ntag--hidden" id="ntag">NEW!</div>` :""}

              ${jobData.featured?
                `<div class="featuredtag ntag--hidden" id="ntag">FEATURED</div>` :""}              
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



    searchContentEl.innerHTML = searchBarTags.reduce((acc, currentTag) => {
      return acc + getTagHTML(currentTag, 'close-tag')
   }, ''); 

    toggleClass(targetEl, 'tag--active');
    setJobsListings(searchBarTags)


});

setJobsListings()

