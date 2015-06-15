var showElements = function() {
  var target = $('#mainapp')[0];
  var i = 0;

/*
  MutationsObserver zum Überwachen, wenn ein Post im DOM eingefügt wurde.
  Ist ein Post eingefügt worden, füge dem Post die Klasse show hinzu
*/
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var newNodes = mutation.addedNodes;
      if(newNodes !== null) {
        var $nodes = $(newNodes);
        $nodes.each(function() {
          if($(this).hasClass('post')) {
            var post = $(this);
            setTimeout(function() {
              post.addClass('show');
            }, (i+1) * 250);
            i++;
          }
        });
      }
    });
  });

  var config = {
    subtree: true,
    attributes: false,
    childList: true,
    characterData: false
  };

  observer.observe(target, config);
};
