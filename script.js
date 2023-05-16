

var url = window.location.href;
var filename = url.split('/').pop();

switch (filename) {
    case "Contact.html":
        document.getElementById("contact").setAttribute("class", "active");
        break;
    case "SoniaJohnsonBio.html":
        document.getElementById("about").setAttribute("class", "active");
        break;
    case "Resume.html":
        document.getElementById("resume").setAttribute("class", "active");
        break;
}
