function makeChatBlob(message)
{
    var chatBlobHTML = '<div class="chatblob"><p>' + message + '</p></div>';
    return chatBlobHTML;
}

function makeChatBlobLeft(message)
{
    var chatBlobHTML = '<div class="chatblob left"><p>' + message + '</p></div>';
    return chatBlobHTML;
}

function send()
{
    var msn = document.getElementById("input").value;
    if (msn.trim() == "")
    {
        return;
    }
    document.getElementById("chatbox").innerHTML += makeChatBlob(msn);
    document.getElementById("chatbox").innerHTML += makeChatBlobLeft(messageProcess(msn));
    document.getElementById("scroll").scrollIntoView();
    document.getElementById("input").value = "";
}

function messageProcess(message)
{
    var keywords = message.toLowerCase().replace(/\u003F/g, "").split(" ");
    var answers = [];
    for (x in table)
    {
        var condition = false;
        for (y in table[x])
        {
            condition = false;
            for (z in table[x][y])
            {
                for (v in keywords)
                {
                    if (keywords[v] == table[x][y][z])
                    {
                        condition = true;
                        break;
                    }
                }
                if (condition)
                    break;
            }
            if (!condition)
                break;
        }
		/*if (condition)
            answers.push([x.replace(/_/g, " ").replace(/PP/g, ".").replace(/VVv/g).replace(/VVa/g, '"')
            .replace(/XXa/g, "á").replace(/YYa/g, "ã").replace(/XXe/g, "é").replace(/YYc/g, "ç")
            .replace(/WWo/, "ô").replace(/WWa/, "â").replace(/ZZ/g, ""), table[x].length]);*/
		
        if (condition)
            answers.push([x, table[x].length]);
    }
    if (answers.length == 0)
        return "Desculpe, não entendi a sua pergunta.";
    else
    {
        var max = 0;
        var ret = [];
        for (x in answers)
        {
            if (answers[x][1] > max)
                max = answers[x][1];
        }
        for (x in answers)
        {
            if (answers[x][1] == max)
                ret.push(answers[x][0]);
        }
        return tableNames[ret[Math.floor(Math.random() * ret.length)]];
    }
}