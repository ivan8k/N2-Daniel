function user_auth()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4)
		{
			console.log(this.responseText);
			//var data = JSON.parse(this.responseText);
			/*if (data["messages"] == "success")
			{
				var date = new Date(data["response"]["0"]["risetime"]*1000);
				alert(date.toString());
			}
			else
				alert("error");*/
		}
	};
	xhttp.open("GET", "https://gyazo.com/oauth/authorize?client_id=1575259b32649a2ec3fa4c146bef1a151882d737a005b8206bb9c772e423261b&redirect_uri=https%3A%2F%2Fivan8k.github.io%2Findex.html&response_type=code", true);
	xhttp.setRequestHeader("Origin", "https://ivan8k.github.io/");
	xhttp.send();
	//return pos;
}

user_auth();