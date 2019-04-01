var themeButtonPressed = false;

function makePreviewBox(title, image, desc)
{
	
	var ret;
	console.log(themeButtonPressed);
	if (themeButtonPressed)
		ret = '<div class="previewbox" id="preview' + n + '" style="background-color: rgba(50, 50, 50, 1)"><p class="title"><b>' + title +
	'</b></p><img class="image" alt="" src="' + image + '"></img><p class="desc">' + desc + '</p></div>';
	else
		ret = '<div class="previewbox" id="preview' + n + '"><p class="title"><b>' + title +
	'</b></p><img class="image" alt="" src="' + image + '"></img><p class="desc">' + desc + '</p></div>';
	n += 1;
	return ret;
}

function link_preview(link)
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4)
		{
			var data = JSON.parse(this.responseText);
			if(data.title == "")
			{
				alert("Erro");
				return;
			}
			document.getElementById("mainbox").innerHTML = makePreviewBox(data.title, data.image, data.description) +
			document.getElementById("mainbox").innerHTML;
			/*document.getElementById("title").innerHTML = "<b>" + data["title"] + "</b>";
			document.getElementById("image").src = data["image"];
			document.getElementById("desc").innerHTML = data["description"];*/
		}
	};
	xhttp.open("GET", "https://api.linkpreview.net?key=5c9bb9554b13d41f1a4f7e9c9800871a1632a2dea5d06&q=" + link, true);
	//xhttp.setRequestHeader("Access-Control-Allow-Origin", "");
	xhttp.send();
	//return pos;
}

function buttonClick()
{
	link_preview(document.getElementById("input").value);
	document.getElementById("input").value = "";
}

function darkTheme()
{
	
}

var n = 1;
//link_preview("https://www.google.com");