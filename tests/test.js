let image1 = document.getElementById("image_1");
let i1 = 0;
image1.onclick = function () {
    if (i1 === 0) {
      image1.style.backgroundImage = "url(photo/66987311_p0.png)";
      i1++;
    } else if (i1 === 1) {
      image1.style.backgroundImage = "url(photo/52993606_p0.png)";
      i1++;
    } else if (i1 === 2) {
      image1.style.backgroundImage = "url(photo/77981613_p0.jpg)";
      i1++;
    }
   else {
    image1.style.backgroundImage = "url(photo/47305056_p0.png)";
    i1=0
  }
};


let image2 = document.getElementById("image_2");
let i2 = 0;
image2.onclick = function () {
  if (i2 === 0) {
    image2.style.backgroundImage = "url(photo/66987311_p0.png)";
    i2++;
  } else if (i2 === 1) {
    image2.style.backgroundImage = "url(photo/47305056_p0.png)";
    i2++;
  } else if (i2 === 2) {
    image2.style.backgroundImage = "url(photo/77981613_p0.jpg)";
    i2++;
  } else {
    image2.style.backgroundImage = "url(photo/52993606_p0.png)";
    i2 = 0;
  }
};

let image3 = document.getElementById("image_3");
let i3 = 0;
image3.onclick = function () {
  if (i3 === 0) {
    image3.style.backgroundImage = "url(photo/52993606_p0.png)";
    i3++;
  } else if (i3 === 1) {
    image3.style.backgroundImage = "url(photo/47305056_p0.png)";
    i3++;
  } else if (i3 === 2) {
    image3.style.backgroundImage = "url(photo/77981613_p0.jpg)";
    i3++;
  } else {
    image3.style.backgroundImage = "url(photo/66987311_p0.png)";
    i3 = 0;
  }
};


let image4 = document.getElementById("image_4");
let i4 = 0;
image4.onclick = function () {
  if (i4 === 0) {
    image4.style.backgroundImage = "url(photo/52993606_p0.png)";
    i4++;
  } else if (i4 === 1) {
    image4.style.backgroundImage = "url(photo/47305056_p0.png)";
    i4++;
  } else if (i4 === 2) {
    image4.style.backgroundImage = "url(photo/66987311_p0.png)";
    i4++;
  } else {
    image4.style.backgroundImage = "url(photo/77981613_p0.jpg)";
    i4 = 0;
  }
};




