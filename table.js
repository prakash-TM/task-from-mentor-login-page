//import fetch from "node-fetch";
// const api_url = "https://api.publicapis.org/entries";


// var aa = document.getElementById("filter").value;

var a = 1;


async function getapi() {
    const url = "https://api.publicapis.org/entries";
    var aa = document.getElementById("filter").value;

    const response = await fetch(url);

    // Storing data in form of JSON
    var data = [];
    var data = await response.json();


    show(data, aa);
}

var tab = "";

function table(tab) {
    tab =
        `<tr>
        <th>S.no</th>
       
    	<th>API</th>
        
    	<th>Auth</th>
        
    	<th>HTTPS</th>
        
    	<th>Cors</th>
        
        <th>Category</th>
    	</tr>`;
    return tab;

}


function separateTable(aa, b, t) {

    for (let x = 0; x <= 1000; x++) {
        if ((b[x].Category) === aa) {
            t += `<tr>
            <td>${x+1} </td>
           
            <td>${b[x].API} </td>
           
            <td>${b[x].Auth}</td>
            
            <td>${b[x].HTTPS}</td>
            
            <td>${b[x].Cors}</td>
            
            <td>${b[x].Category}</td>
                
        </tr>`;
        }
    }
    return t

}




function show(data, aa) {
    if (aa === "Animals") {
        var b = data.entries;
        var t = table(tab)
        var ta = separateTable(aa, b, t)

        // for (let x = 0; x <= 1000; x++) {
        //     if ((b[x].Category) === "Animals") {
        //         tab += `<tr>
        //         <td>${x+1} </td>

        //     	<td>${b[x].API} </td>

        //     	<td>${b[x].Auth}</td>

        //     	<td>${b[x].HTTPS}</td>

        //     	<td>${b[x].Cors}</td>

        //         <td>${b[x].Category}</td>

        //     </tr>`;
        //     }
        // }

    } else if (aa === "Anime") {
        var b = data.entries;
        var t = table(tab)
        var ta = separateTable(aa, b, t)


    } else if (aa === "Anti-Malware") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)

    } else if (aa === "Art & Design") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)

    } else if (aa === "Authentication") {
        var b = data.entries;
        var t = table(tab)
        var ta = separateTable(aa, b, t)

    } else if (aa === "Blockchain") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)

    } else if (aa === "Books") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)

    } else if (aa === "Business") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)

    } else if (aa === "Calendar") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)

    } else if (aa === "Cloud Storage & File Sharing") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)

    } else if (aa === "Continuous Integration") {
        var b = data.entries;
        var t = table(tab)
        var ta = separateTable(aa, b, t)

    } else if (aa === "Cryptocurrency") {
        var b = data.entries;
        var t = table(tab)
        var ta = separateTable(aa, b, t)

    } else if (aa === "Currency Exchange") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)

    } else if (aa === "Data Validation") {
        var b = data.entries;
        var t = table(tab)
        var ta = separateTable(aa, b, t)

    } else if (aa === "Development") {
        var b = data.entries;
        var t = table(tab)
        var ta = separateTable(aa, b, t)

    } else if (aa === "Dictionaries") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)
    } else if (aa === "Environment") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)

    } else if (aa === "Finance") {
        var b = data.entries;
        var t = table(tab)

        var ta = separateTable(aa, b, t)

    } else if (aa === "" || aa === "full") {
        var b = data.entries;
        var t = table(tab)
        for (let x = 0; x <= 1300; x++) {
            t += `<tr>
                <td>${x+1} </td>
               
            	<td>${b[x].API} </td>
               
            	<td>${b[x].Auth}</td>
                
            	<td>${b[x].HTTPS}</td>
                
            	<td>${b[x].Cors}</td>
                
                <td>${b[x].Category}</td>
                	
            </tr>`;
        }
        ta = t
    }
    document.getElementById("table").innerHTML = ta;
}