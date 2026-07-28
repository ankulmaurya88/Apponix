c
// Show page title
const title_find_the_tage=document.querySelectorAll('h1')
const title_class  = document.querySelector('.title')


const images = document.querySelectorAll('img');
// Show number of links
const imagesUrls=Array.from(images).map(img => img.src);
// Show number of images
const total_number_of_image=Array.length;