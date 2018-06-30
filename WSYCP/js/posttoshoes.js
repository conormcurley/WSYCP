$('.button').click(function(){
  var docwrite = 0;
  var key = $('.key').val();
  var name = $('.name').val();
  var ret = $('.ret').val();
  var desc = $('.desc').val();
  var imgurl = $('.imgurl').val();

  db.collection("shoes").doc(key).set({
    name: name,
    retailer1link: ret,
    description: desc,
    imgurl:imgurl
}).then(function() {
  var docwrite = docwrite + 1;
  $('.is-warning').html('Document Written (' + docwrite + ').');
})
.catch(function(error) {
    $('.is-warning').html('Error writing document. Error (1)')
});
})
