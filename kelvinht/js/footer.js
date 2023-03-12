med_sos()

function med_sos() {
const ms_img = ["img/linkedln_logo.svg","img/ig_logo.svg","img/tiktok_logo.svg","img/wa_logo.svg"];
const ms_link = [
"https://www.linkedin.com/in/kelvin-herwanda-tandrio",
"https://www.instagram.com/kelvin_373",
"https://www.tiktok.com/@kelvinht373",
"#"
];
ic_med_sos(ms_img, ms_link)
}

function ic_med_sos(img, link) {
let ic_ms = '<ul class="nav justify-content-end">';
for (let x = 0; x < ms_img.length; x++) {
   ic_ms += ui_med_sos(img[x], link[x]);
}
document.getElementById("footer_med_sos").innerHTML = ic_ms + '</ul>';
}

function ui_med_sos(img, link) {
return '<li class="nav-item m-2px p-3px">' +
'<a href="' + link +'"><img src="' + img +'" class="img-icon"></a>'
'</li>';
}