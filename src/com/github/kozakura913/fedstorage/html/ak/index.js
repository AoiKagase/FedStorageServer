
$(function() {
    get_item_storage_list();
});

function get_item_storage_list()
{
    $.ajax({
        type: 'GET',
        dataType: "json",
        url:'https://fedstorage.k7a.org/api/list/item_frequency.json',
        headers: {'Access-Control-Allow-Origin': 'https://fedstorage.k7a.org/'},
        crossDomain: true,
        success: function(json) {
            var data = JSON.parse(json);
            console.log(json);
        }
    });    
}
