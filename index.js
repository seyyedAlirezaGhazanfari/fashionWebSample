function GalleryClick(){

 let response =  fetch("http://localhost:3000/gallery",{method:"GET"})
    .then((response)=>console.log("successful"))
    .catch((err)=>console.log("error"));
  return response.json()
}