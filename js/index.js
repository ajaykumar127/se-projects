'use strict';

var app = angular.module('app', ['ngSanitize']);

app.controller('MainController', ['$scope', '$window', function($scope, $window) {
  var en = {
    'brand': 'AJAY KUMAR',
    'home': 'Home',
    'about': 'About',
    'pastime': 'Pastime',
    'contact': 'Contact',
    'title': 'Customer Experience Connoisseur',
    'desc': 'Cognizant of "their" perception being my reality',
    'aboutMe': 'Ajay Kumar (aka AJ)',
    'resume': 'I used to be this silly little boy with confusion in his looks, dreams in his eyes and fervor in his visions. Still stranger among the familiar, and in company of my own solitude at times. A dreamer, a believer, and most importantly, like any other, a lost soul in search of his destiny. \n\n Customer Experience Swiss Army Knife. The Turn-around guy for Customer Success + Happiness in any situation. My passion is to use technology-based solutions to help solve real-world challenges as breakthroughs, albeit within simplicity.\n\nCompetencies:\n\t Languages & Frameworks: C++, C#, HTML, CSS3, JavaScript, jQuery, Bootstrap, Bash.\n\t Tools & Platform Expertise: Git, Visual Studio , Eclipse , Google Analytics, Microsoft Azure, SQL Server BI.',
    'works': 'Recent Works',
    'contactMe': 'Contact Me',
    'name': 'Ajay Kumar',
    'licensePre': 'Code licensed under the ',
    'licensePost': ' License.'
  };
  
  $scope.pastimes= [{
    'src': 'http://ajaykumar127.github.io/HRW.png',
    'href': 'http://support.hackerrank.com',
    'desc': 'HackerRank Support'
  },  {
    'src': 'https://raw.githubusercontent.com/ajaykumar127/ajaykumar127.github.io/b83eb6e88d95afe3ba27dbfccae9aee15e1fff0b/Passion.png',
    'href': 'https://blogs.msdn.microsoft.com/ajaykumarks/2012/11/27/updated-this-part-of-my-life-is-called-designing/',
    'desc': 'Microsoft Design Blog'
  }, {
    'src': 'https://raw.githubusercontent.com/ajaykumar127/ajaykumar127.github.io/8571a8d173e0319822d49fcf8106737600b07b0e/SQL.png',
    'href': 'https://blogs.msdn.microsoft.com/ajaykumarks/2010/11/13/a-short-story-about-the-ssis-service-that-failed-to-start',
    'desc': 'SQL Server Debugging'
  }, {
    'src': 'https://raw.githubusercontent.com/ajaykumar127/ajaykumar127.github.io/1df7b3900872bce2df630fb40d4d150884e1e286/SSMA.jpg',
    'href': 'https://blogs.msdn.microsoft.com/ssma/2014/08/21/latest-update-microsoft-sql-server-migration-assistant-ssma-v6-0-is-now-available',
    'desc': 'SQL Migration Tool'
  },  {
    'src': 'http://ajaykumar127.github.io/OOPV.png',
    'href': 'http://oopv.blogspot.in',
    'desc': 'Program Visualizer'
  }, {
    'src': 'http://ajaykumar127.github.io/Art.jpg',
    'href': 'https://sites.google.com/site/ajaykumar127',
    'desc': 'Arts & Paintings'
  }];
  var href = {
    'twitter': 'https://twitter.com/ajaykumarks',
    'github': 'https://github.com/ajaykumar127',
    'linkedin': 'https://in.linkedin.com/in/ajaykumar127',
    'facebook': 'https://www.facebook.com/ajaykumarks.127',
    'google+': 'https://plus.google.com/113092726867308747214',
  };
  $scope.href = function(src) {
    $window.open(href[src], '_blank');
  };
  $scope.lang = function(str) {
    localStorage.visited = true;
    if (str === 'en') {
      localStorage.lang = 'en';
      $scope.isEn = true;
      for (var i in en) {
        $scope[i] = en[i];
      }
    } 
  };
  if (localStorage.visited) {
    $scope.lang(localStorage.lang);
  } else {
    var locale = navigator.language.split('-')[0];
    if (locale === 'en') {
      $scope.lang('en');
    }
  }
}]);

app.filter('toHtml', function($filter) {
  return function(data) {
    if (!data) return data;
    return data.replace(/\n/g, '<br />').replace(/\t/g,
      '<i class="fa fa-caret-right"></i>');
  };
});

app.directive('newTab', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (true) {
        element.attr('target', '_blank');
      }
    }
  };
});

$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    anchors: ['Home', 'About', 'Pastime', 'Contact'],
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: false,

    //Design
    controlArrows: true,
    verticalCentered: true,
    resize: false,
    paddingTop: '50px',
    paddingBottom: '0',
    responsiveWidth: 0,
    responsiveHeight: 0,
  });
});

$(window).load(function() {
  $('.pastime-img').width($('.pastime-img').width() * 75 / 100);
  $('.pastime').width($('.pastime-img').width());
  var margin = ($('.jumbotron').width() - 30 - $('.pastime-img').width() *
    3) / 2;
  for (var i = 0; i < 9; i += 3) {
    $('.pastime').eq(i).css('margin-left', margin + 'px');
  }
});