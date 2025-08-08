// Simple client-side search: shows/hides movie cards by title match
document.addEventListener('DOMContentLoaded', function(){
  var input = document.getElementById('search');
  if(!input) return;
  input.addEventListener('input', function(){
    var q = this.value.toLowerCase();
    document.querySelectorAll('.movie-card').forEach(function(card){
      var title = card.getAttribute('data-title').toLowerCase();
      card.style.display = title.includes(q) ? '' : 'none';
    });
  });
});