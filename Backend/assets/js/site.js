$.fn.serializeObject = function(){
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

var App = {
  destroy: function(model, id, cb){
    io.socket.delete('/'+model+'/'+id, function(resData){
      if(resData){
        cb(true);
      } else {
        cb(false);
      }
    });
  },
  create: function(model, data, cb){
    io.socket.post('/'+model+'/create', data, function(resData, jwres){
      if(jwres.statusCode == 201){
        console.info(resData, JSON.stringify(jwres, undefined, 4));
        cb(true);
      } else {
        console.error('Error: ' +JSON.stringify(jwres));
        cb(false);
      }
    });
  },
};
var x;
$(document).ready(function(){
  $(".dropdown-toggle").dropdown();
  $('.table').DataTable({
    "responsive": true,
    "sDom": '<"top"f>rt<"col-md-4"l><"col-md-4"i><"col-md-4"p><"clear">'
  });

  $("input[type='checkbox']").on('change', function(){
    if(this.checked){
      $(this).val(true);
    } else {
      $(this).val(false);
    }
  });

  // Kill all forms - We'll use ajax instead
  $('form').on('submit', function(e){
    e.preventDefault();
  });

  $('.create-object').on('click', function(e){
    var model = $(this).data('model');
    var data = $(this).closest('form').serializeObject();
    x = data;
    App.create(model, data, function(done){
      if(done){
        console.info('Successfully created object');
        window.location.reload();
      } else {
        console.error('Error creating object');
      }
    });
  });

  $('.destroy-object').on('click', function(e){
    $(this).closest('tr').remove();
    App.destroy(
      $(this).data('api'),
      $(this).data('id'),
      function(done){
        if(done){
          console.info('Successfully destroyed object');
        } else {
          console.error('Error destroying object');
        }
      });
  });
});
