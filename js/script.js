import * as view from './view.js'
import * as data from '../data.js'

$(document).ready(function() {
    // var d;
    // $.getJSON('../data.json', function(data) {
    //     $('#table-body')[0].innerHTML = view.constructTable(data);
    //     d = data;
    // })
    console.log(data.a);
    $('table').DataTable({
        data: data.a,
        columns: [
            {data: 'Specimen ID'},
            {data: 'Location'},
            {data: 'Latitude'},
            {data: 'Longitude'},
            {data: 'Date'},
            {data: 'Collected InOn'},
            {data: 'Collectors'},
            {data: 'Sex'},
            {data: 'Family'},
            {data: 'Scientific name'},
            {data: 'Common name'},
            {data: 'ID by'},
            {data: 'Notes'}
        ]
    });
});