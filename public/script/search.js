console.log("search.js")

$(() => {
    let allproduct = [
        {
            productName: 'red_150',
            cost: 150
        },
        {
            productName: 'red_300',
            cost: 300
        },
        {
            productName: 'blue_150',
            cost: 150
        },
        {
            productName: 'blue_300',
            cost: 300
        },
        {
            productName: 'rde_150',
            cost: 150
        },
        {
            productName: 'herered_300',
            cost: 300
        },
        {
            productName: 'bluesky_150',
            cost: 150
        }
    ];

    // Go to search page
    $('#search-button').on('click', () => {
        let row = 1;
            let input = $('#search-input').val();
            for(let i=0;i < allproduct.length; i++ ) {
                if(allproduct[i].productName.substring(0,input.length) == input) {
                    let name = allproduct[i].productName;
                    let cost = allproduct[i].cost;
                    console.log("find " + allproduct[i].productName);
                    $('#searchTableItem').append( () => {
                        let ans = `<tr>
                        <th scope="row"> ${row+1} </th>
                        <td> ${name} </td>
                        <td> ${cost} </td>
                      </tr>`;
                        return ans;
                    });
                }
            }
        console.log("finished process");
        window.location = "http://localhost:3000/search";
    });

    document.querySelector('#search-button').addEventListener('keypress', function(e) {
        console.log("Begin Searching...")
        if (e.key === 'Enter') {
            let row = 1;
            let input = $('#search-input').val();
            for(let i=0;i < allproduct.length; i++ ) {
                if(allproduct[i].productName.substring(0,input.length) == input) {
                    let name = allproduct[i].productName;
                    let cost = allproduct[i].cost;
                    console.log("find " + allproduct[i].productName);
                    $('#searchTableItem').append( () => {
                        let ans = `<tr>
                        <th scope="row"> ${row+1} </th>
                        <td> ${name} </td>
                        <td> ${cost} </td>
                      </tr>`;
                        return ans;
                    });
                }
            }
        }
    });
});



