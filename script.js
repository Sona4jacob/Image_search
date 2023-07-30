const accessKey="Y0wKZ6ddxUHvDdgmP_QlTA72ky4O6WPaNlaf1grD7aU"
searchForm=document.getElementById("search-form")
searchBox=document.getElementById("search-box")
searchResult=document.getElementById("search-result")
showMore=document.getElementById("show-more-btn")

let keyword="";
let page=1;

async function searchImage(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=48`
  const response=await fetch(url);
  const dataArray=await response.json()
  if(page===1){
    searchResult.innerHTML="";
  }
  const results=dataArray.results;

  results.map((result)=>{
   const image=document.createElement("img") 
   image.src=result.urls.small;
   const imageLink=document.createElement("a")
   imageLink.href=result.links.html;
   imageLink.target="_blank"
   imageLink.appendChild(image)
   searchResult.appendChild(imageLink)
  })

}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})