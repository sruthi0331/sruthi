var dataJson = [
    {
        "img": "https://cdn-icons-png.flaticon.com/128/2156/2156009.png",
        "title": "Prediction of IPL using Machine Learning",
        "paragraph":"Predict's the IPL scores ",
        "url":""
    },
    {
        "img": "https://cdn-icons-png.flaticon.com/128/2190/2190654.png",
        "title": "Smart Parking system using IOT",
        "paragraph":"Smart Parking system",
        "url":""
    }
];

var raw_html = "";
dataJson.forEach(function(item){
    raw_html += `<div
    class="col-lg-5"
    style="min-height: fit-content;">
    <div
      style="padding: 12px"
      class="project progress mb-5 align-items-center">
      <img
        class="img-fluid"
        style="height: 90px; width: 90px"
        src="${item.img}"
        alt="${item.title}"
        height="100px"
        width="120px"
      />
      <div class="mt-3 ms-3 row">
        <h2 style="color: txt-color">${item.title}</h2>
        <p style="color: txt-color; font-size: medium">
        ${item.paragraph}
        </p>
        <a
          rel="noopener"
          href="${item.url}"
          target="_blank"
          title="${item.title}">
          <button type="button" class="btn btn-secondary">
            View
          </button></a>
      </div>
    </div>
    </div>`;
})
document.getElementById('project-container').innerHTML = raw_html;

