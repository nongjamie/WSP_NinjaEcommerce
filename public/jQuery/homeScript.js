$( () => {

    // Detail for bestseller table
    let array = [
      {
        rank: 1,
        name: 'VaritAss',
        cost: 3000,
        description: 'varit.as@ku.th'
      },
      {
        rank: 2,
        name: 'VaritAss2',
        cost: 6000,
        description: 'varit.as@ku.th'
      }
    ];

    // Add detail in table
    $('.bestseller-box-table-detail').html(() => {
      let ans = "";
      for (var i = 0; i < array.length; i++) {
        let rank = array[i].rank;
        let name = array[i].name;
        let cost = array[i].cost;
        let detail = array[i].description;
        ans = ans + `
        <tr>
          <th scope="row"> ${rank} </th>
          <td> ${name} </td>
          <td> ${cost} </td>
          <td> ${detail} </td>
        </tr>`;
      }
      return ans;
    });

});
