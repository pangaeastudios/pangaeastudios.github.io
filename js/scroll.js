window.onscroll = function() {
	scrollFunction();
};

/*
function revealContent()
{
	document.getElementById("main-content").style.display = "block";
}
*/

function scrollFunction() 
{
	if(document.body.scrollTop > 995 || document.documentElement.scrollTop > 995)
	{
		document.getElementById("navbar-logo").style.backgroundImage = "url(img/ps-logo-waves.svg)";
		document.getElementById("nav").classList.add("bg-light");
		document.getElementById("nav").classList.remove("navbar-dark");
		document.getElementById("nav").classList.add("navbar-light");
		document.getElementById("landing-header-text").style.color = "rgba(0,0,0,225)";
	} else {
		document.getElementById("navbar-logo").style.backgroundImage = "url(img/ps-logo-waves-white.svg)";
		document.getElementById("nav").classList.remove("bg-light");
		document.getElementById("nav").classList.remove("navbar-light");
		document.getElementById("nav").classList.add("navbar-dark");
		document.getElementById("landing-header-text").style.color = "rgba(225,225,225,0)";
	}
}