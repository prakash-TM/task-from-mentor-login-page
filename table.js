//import fetch from "node-fetch";
// const api_url = "https://api.publicapis.org/entries";

async function getapi() {
    const url = "https://api.publicapis.org/entries";

    const response = await fetch(url);

    // Storing data in form of JSON
    var data = [];
    var data = await response.json();

    if (response) {
        hideloader();
    }
    show(data);
}




function hideloader() {
    console.log()
}

function show(data) {

    var b = data.entries;
    // console.log((b[1].API))
    var tab =
        `<tr>
        <th>S.no</th>
        <th></th>
        <th></th>
    	<th>API</th>
        <th></th>
        <th></th>
    	<th>Auth</th>
        <th></th>
        <th></th>
    	<th>HTTPS</th>
        <th></th>
        <th></th>
    	<th>Cors</th>
        <th></th>
        <th></th>
        <th>Category</th>
    	</tr>`;


    for (let x = 0; x <= 100; x++) {
        tab += `<tr>
                <td>${x+1} </td>
                <td></td>
                <td></td>
              
              
            	<td>${b[x].API} </td>
                <td></td>
                <td></td>
            	<td>${b[x].Auth}</td>
                <td></td>
                <td></td>
            	<td>${b[x].HTTPS}</td>
                <td></td>
                <td></td>
            	<td>${b[x].Cors}</td>
                <td></td>
                <td></td>
                <td>${b[x].Category}</td>
                	
            </tr>`;
        // console.log(r.API)
        //console.log(r)

    }



    document.getElementById("table").innerHTML = tab;




}