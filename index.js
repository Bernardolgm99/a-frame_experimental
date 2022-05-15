
  AFRAME.registerComponent('move-click', {
    schema: {
      url: {default: ''}
    },

    init: function () {
      var data = this.data;
      var el = this.el;

      el.addEventListener('click', function () {
        let object_color_change = document.QuerySelectorAll(".new_color")
        object_color_change.material = "src: #"
      });
    }
  });        
