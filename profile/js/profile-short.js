const socialLinks = [
    {
        url: 'https://bit.ly/AlgoKelvinLinkedln',
        imgSrc: 'https://raw.githubusercontent.com/algokelvin-373/algokelvin-373/master/my_resources/linkedln_logo.png',
        altText: 'Linkedln',
        text: 'Linkedln'
    },
    {
        url: 'https://bit.ly/AlgoKelvinIG',
        imgSrc: 'https://raw.githubusercontent.com/algokelvin-373/algokelvin-373/master/my_resources/ig_logo.png',
        altText: 'Instagram',
        text: 'Instagram'
    }
];
function createSocialLink(link) {
    return `
        <div class="row p-3 mt-3" style="background-color: #7BA3F1; cursor: pointer; border-radius: 15px;" onclick="location.href='${link.url}';">
            <center>
                <a class="text-white" style="text-decoration: none">
                    <img src="${link.imgSrc}" alt="${link.altText}" width="30" height="30">
                    ${link.text}
                </a>
            </center>
        </div>
    `;
}

// Insert social links into the container
document.getElementById('social-links').innerHTML = socialLinks.map(createSocialLink).join('');