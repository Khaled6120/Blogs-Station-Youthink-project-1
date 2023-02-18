
const slugPage = document.querySelector("#slug")
console.log(slugPage)


const getSingleBlog = () => {
    fetch(`https://www.wp-course.site/wp-json/youthink/post?slug=${window.location.href.split("?")[1]}`).then(res => res.json())
    .then(data => {
        console.log(data.data)
        if(data.success) {
            slugPage.innerHTML = `

     
            <h6 class='rounded-5 rounded-bottom-0 articleNumber  '> ${
              data.data.title
            }</h6>
            <div class="card d-flex justify-content-center" >
            <img src="${data.data.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                <h6 class="card-title text-center">Brief:</h6>
                <p class="">${data.data.excerpt}</p>
                  </div>
                  <ul class="list-group list-group-flush ">
                <li class="list-group-item"><b>Date:</b> ${
                  data.data.date
                }</li>
                <li class="list-group-item"> <b>Tags:</b> ${
                  data.data.tags
                }</li>
                <li class="list-group-item"><b>Views:</b> ${
                  data.data.views
                }</li>
                </ul>             
                
            </div>

            </div>
            
            `
        }
    } )
    .catch(err => console.log(err))
    
}


getSingleBlog()