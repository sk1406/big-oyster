
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
   
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}

$('.collapse').collapse()

//gallery
var $grid = $('.gallery-wrapper').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    transitionDuration: 0,
  });

  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });

//<button onclick="myFunction()">Click me</button>