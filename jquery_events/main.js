/* Independent Practice

Making a list: jQuery


You'll add the ability to complete the you gotta be's in your lyrics list:

- Using jQuery, add a "complete" link at the end of each to-do item (i.e. each "gotta-be")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete" link at the end

*/

$('#new-thing-button').on('click', function() {
    event.preventDefault();
    var list = $('#gotta-be-list');
    var thing = $('#new-thing').val();
    addToList(list, thing);
});

function addToList($list, thing) {
  var $thingLi = $('<li>').text(thing);
  var complete = $('<span class="complete">');
  $("li").after(complete);
  $("span").html("(Complete)");
  $list.append($thingLi);
  addCompleteLinks($thingLi);
}
