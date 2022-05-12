let dropdownBtn = $('dropdown-button');
let containsDropdown = document.querySelectorAll('.contains-dropdown');
let dropdownLinks = document.querySelectorAll('.drop-link');
let modal1 = $('.modal1');
let modal2 = $('.modal2');
let linksBtn = $('.menu-icon');
let overflow = $('.overflow');
let blanket = $('.blanket');
let menuClose = $('.menu-close');



containsDropdown.forEach((item, i) => {
  $(item).hover(
    () => {
      if ($(item).hasClass("modal-1-link")) {
        console.log(1);
        modal1.removeClass("display-none");
      } else if ($(item).hasClass("modal-2-link")) {
        console.log(2);
        modal2.removeClass("display-none");
      }
    },
    () => {
      if ($(item).hasClass("modal-1-link")) {
        modal1.addClass("display-none");
      } else if ($(item).hasClass("modal-2-link")) {
        modal2.addClass("display-none");
      }
    }
  )
});

dropdownLinks.forEach((item, i) => {
  $(item).hover(
    () => {
      if ($(item).hasClass('drop-link-1')) {
        $('.drop-link-1 .drop-icon-1').attr('src','images/icon-arrow-up.svg');
      } else if ($(item).hasClass('drop-link-2')) {
        $('.drop-link-2 .drop-icon-2').attr('src','images/icon-arrow-up.svg');
      }
    },
    () => {
      if ($(item).hasClass('drop-link-1')) {
        $('.drop-link-1 .drop-icon-1').attr('src','images/icon-arrow-down.svg');
      } else if ($(item).hasClass('drop-link-2')) {
        $('.drop-link-2 .drop-icon-2').attr('src','images/icon-arrow-down.svg');
      }
    }
  )
})

dropdownLinks.forEach((item, i) => {
  $(item).on('click', () => {
    if ($(item).hasClass('drop-link-3')) {
      console.log($('.drop-links-3 .inner-links').hasClass('display-none'));
      if ($('.drop-link-3 .inner-links').hasClass('display-none')) {
        $('.drop-link-3 .drop-icon-3').attr('src', 'images/icon-arrow-up.svg');
        $('.drop-link-3 .inner-links').removeClass('display-none');
      } else {
        $('.drop-link-3 .drop-icon-3').attr('src', 'images/icon-arrow-down.svg');
        $('.drop-link-3 .inner-links').addClass('display-none');
      }
    } else if ($(item).hasClass('drop-link-4')) {
      if ($('.drop-link-4 .inner-links').hasClass('display-none')) {
        $('.drop-link-4 .drop-icon-4').attr('src', 'images/icon-arrow-up.svg');
        $('.drop-link-4 .inner-links').removeClass('display-none');
      } else {
        $('.drop-link-4 .drop-icon-4').attr('src', 'images/icon-arrow-down.svg');
        $('.drop-link-4 .inner-links').addClass('display-none');
      }
    }
  });
})

linksBtn.on('click', () => {
  // Using jquery animate
  console.log(overflow.css('margin-left'));
  if (overflow.css('width') != '0px') {
    blanket.removeClass('display-block');
    overflow.animate({
      marginLeft: '100%',
      width: 0
    }, 500);
  } else {
    blanket.addClass('display-block');
    overflow.animate({
      marginLeft: '40%',
      width: '60%'
    }, 500);
  }
});

menuClose.on('click', () => {
  blanket.removeClass('display-block');
  overflow.animate({
    marginLeft: '100%',
    width: 0
  }, 500);
});


$(window).resize(() => {
  console.log(overflow.css('width'));
  if (window.matchMedia('(min-width: 661px)').matches) {
    blanket.removeClass('display-block');
    blanket.addClass('display-none');
  } else {
    if (overflow.css('width') != '0px') {
      blanket.addClass('display-block');
      blanket.removeClass('display-none');
    } else {
      blanket.removeClass('display-block');
      blanket.addClass('display-none');
    }
  }
})
