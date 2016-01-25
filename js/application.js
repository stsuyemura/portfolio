$(window).load(function(){
  showGrid('.grid-1');
  
  $('.swipebox').swipebox();

  $('.btn').click(function(event){
    $('.btn').toggleClass('btn-selected', false);
    $(event.target).toggleClass('btn-selected', true);
  });

  $(document).scroll(function(){
    var showFloatingNav = $(this).scrollTop() >= 537;
    if(showFloatingNav){
      $('#float-nav-wrapper').slideDown();
    }
    else{
      $('#float-nav-wrapper').slideUp();
    }
  });
});

var showGrid = function(gridSelector){
  $('.grid').toggleClass('hidden-grid', true);
  $(gridSelector).toggleClass('hidden-grid', false);
  $(gridSelector).masonry({
    itemSelector: ".grid-item",
    columnWidth: 225,
    transitionDuration: 0,
    gutter: 25,
  });
};


