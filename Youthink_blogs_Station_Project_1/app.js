const blogs = document.getElementById("blogs");
const singleSlug = document.getElementById("slug");
let page = 0;
let article = 0;
function fetchData() {
  page++;
  if (page > 3) {
    document.getElementById("seeMore").style.display = "none";
  }
  fetch(`https://www.wp-course.site/wp-json/youthink/posts?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      blogsData = data;
      for (var i = 0; i < data.data.length; i++) {
        blogs.innerHTML += `
        <div  class="col-sm-10 col-md-6 col-lg-4 mt-5 ">
          <h6 class='rounded-5 rounded-bottom-0 articleNumber '> <span class="text-white">${++article}:</span> ${
          data.data[i].title
        }</h6>
          <div class="card" >
            <img src="${data.data[i].thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                <h6 class="card-title text-center">Brief:</h6>
                <p class="">${data.data[i].excerpt.substring(0, 130)}...</p>
                  </div>
                  <ul class="list-group list-group-flush ">
                <li class="list-group-item"><b>Date:</b> ${
                  data.data[i].date
                }</li>
                <li class="list-group-item"> <b>Tags:</b> ${
                  data.data[i].tags
                }</li>
                <li class="list-group-item"><b>Views:</b> ${
                  data.data[i].views
                }</li>
                </ul>             
                <div class="card-body">
                  <div class=" ">
                      <!-- Button trigger modal -->
                      <a href=${"/slug.html" + "?" + data.data[i].slug}
                        type="button" class="btn text-black main-btn" data-bs-target="#staticBackdrop">
                        Read it
                      </a>
                  </div>
                </div>
            </div>
        </div>
      
  
        `;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchData();
