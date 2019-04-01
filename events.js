var menuButtonPressed = false;
/*var overMenu = false;*/

let button = document.getElementById("button");
button.addEventListener("click", () =>
{
	buttonClick();
});

let menu = document.getElementById("menubutton");
menu.addEventListener("click", () =>
{
	if(menuButtonPressed)
		document.getElementsByClassName("menu")[0].style.display = "none";
	else
		document.getElementsByClassName("menu")[0].style.display = "initial";
	menuButtonPressed = !menuButtonPressed;
});
/*menu.addEventListener("blur", () =>
{
	console.log(overMenu);
	if (true)
	{
		document.getElementsByClassName("menu")[0].style.display = "none";
		menuButtonPressed = false;
	}
});

let over = document.getElementsByClassName("menu")[0];
over.addEventListener("mousedown", () =>
{
	console.log("h");
	overMenu = true;
	document.getElementsByClassName("menu")[0].style.display = "initial";
	menuButtonPressed = true;
});
over.addEventListener("mouseup", () =>
{
	console.log("h2");
	overMenu = false;
});*/

let theme = document.getElementById("theme");
theme.addEventListener("click", () =>
{
	if(themeButtonPressed)
	{
		document.getElementById("background").style.backgroundImage = "linear-gradient(to bottom right, white, #E0E0E0)";
		document.body.style.color = "black";
		document.getElementsByClassName("menu")[0].style.backgroundColor = "white";
		document.getElementsByClassName("menubar")[0].style.backgroundColor = "white";
		for(x=0; x < document.getElementsByClassName("previewbox").length; x++)
		{
			document.getElementsByClassName("previewbox")[x].style.backgroundColor = "rgba(255, 255, 255, 1)";
		}
		document.getElementById("switchtheme").style.display = "initial";
		document.getElementById("switchthemeon").style.display = "none";
	}
	else
	{
		document.getElementById("background").style.backgroundImage = "linear-gradient(to bottom right, rgb(20, 20, 20), rgb(40, 40, 40))";
		document.body.style.color = "rgb(150, 150, 150)";
		document.getElementsByClassName("menu")[0].style.backgroundColor = "rgb(40, 40, 40)";
		document.getElementsByClassName("menubar")[0].style.backgroundColor = "rgb(40, 40, 40)";
		for(x=0; x < document.getElementsByClassName("previewbox").length; x++)
		{
			document.getElementsByClassName("previewbox")[x].style.backgroundColor = "rgba(50, 50, 50, 1)";
		}
		document.getElementById("switchtheme").style.display = "none";
		document.getElementById("switchthemeon").style.display = "initial";
	}
	themeButtonPressed = !themeButtonPressed;
});