all_blogger();

function all_blogger() {
const blog = [
"CONTENT CREATOR",
"SOFTWARE DEVELOPER",
"CODING LANGUAGE",
"SELF IMPROVEMENT",
"MY LIFESTYLES",
"NETWORKING"
];

const imgblog = [
"img/img_coding_language.png",
"img/img_content_creator.png",
"img/img_software_developer.png",
"img/img_coding_language.png",
"img/img_content_creator.png",
"img/img_software_developer.png"
];

const decblog = [
"Topik ini membahas tentang bagaimana menjadi Content Creator yang terus update dengan berbagai ide. Untuk platformnya, lebih fokus ke Linkedln.",
"Topik ini lebih membahas pengetauhan dan perkembangan berbagai Software. Ada juga contoh pembuatan program aplikasi di berbagai platform (Web/Android/iOS). Ada juga live coding.",
"Topik ini membahas tentang coding secara basic (fundamental). Selain itu juga ada mindset dan mental yang harus siap dalam belajar. Ada contoh studi kasus + live coding",
"Topik ini membahas tentang bagaimana menjadi Content Creator yang terus update dengan berbagai ide. Untuk platformnya, lebih fokus ke Linkedln.",
" This is about my lifestyles. You can enjoy my profile. You can get more inspirations from my channels. Don't worry. I'm open to connect. You can follow my instagram.",
"Topik ini lebih ke arah kegiatan networking. Kegiatan adalah sebuah gambaran di lingkungan jaringan yang saling berbagi ilmu dan pengalaman. Saya bercerita sedikit saja tentang ilmu ini."
];

layout_card(imgblog, blog, decblog);
}

function layout_card(img, blog, dec) {
let card = '<div class="row">';
for (let x = 0; x < blog.length; x++) {
   card += ui_card(img[x], blog[x], dec[x]);
}
document.getElementById("dt_blogger").innerHTML = card + '</div>';
}

function ui_card(img, blog, dec) {
return '<div class="col-md-4">' +
'<div class="p-2 bd-highlight">' +
 '<div class="card" style="width:100%">' +
 '<img class="card-img-top" src="' + img +'" alt="Card image" style="width:100%">' +
 '<div class="card-body">' +
 '<h4 class="card-title">' + blog +'</h4>' +
 '<p class="card-text">' + dec + '</p>' +
 '<a href="#" class="btn btn-primary">View More</a>' +
 '</div>' +
 '</div>' +
 '</div>' +
 '</div>';
}
