$(document).ready(function() {

  // ajax calls will be done here in applicaton.js



  $("#new").on('click', function() {
      var firstName = $("#first_name").val();
      var lastName = $("#last_name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      $.ajax({
      url: 'http://localhost:3000/contacts',
      method: 'POST',
      dataType: 'json',
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
      }

    });

});



// button click 

// form submit data to grab data, and create a post ajax call 

var button = $('#list');
 button.on('click', function() {
  $.ajax({
    url: 'http://localhost:3000/contacts',
    method: 'GET',
    dataType: 'json',
    success: function (listcontacts) {
        listcontacts.forEach((contact, i) => {
          $('#contacts').append(`

            </br>
            <div>Contact #${i+1}</div>
            <div>First name: ${contact.first_name}</div>
            <div>Last name: ${contact.last_name}</div>
            <div>Email: ${contact.email}</div>
            <div>Phone number:${contact.phone_number}</div>
          `);
        });
    }
});

});

 var find = $('#search');
 find.on('click', function(event) {
  var id = $("#searchinput").val();
  $.ajax({
    url: 'http://localhost:3000/contacts/'+ id,
    method: 'GET',
    dataType: 'json',
    success: function (contact) {
          $('#find').append(`
            </br>
            <div>Contact id ${contact.id}</div>
            <div>First name: ${contact.first_name}</div>
            <div>Last name: ${contact.last_name}</div>
            <div>Email: ${contact.email}</div>
            <div>Phone number:${contact.phone_number}</div>
          `);
    }
  });
});


 var grab = $('#textsearch');
 grab.on('click', function(event) {
  var text = $("#searchbytext").val();
  $.ajax({
    url: 'http://localhost:3000/contacts/search?term=' + text,
    method: 'GET',
    dataType: 'json',
    success: function (listcontacts) {
        listcontacts.forEach((contact, i) => {
        $('#searchdetail').append(`
        </br>
        <div>Contact id ${contact.id}</div>
        <div>First name: ${contact.first_name}</div>
        <div>Last name: ${contact.last_name}</div>
        <div>Email: ${contact.email}</div>
        <div>Phone number:${contact.phone_number}</div>
      `);
      });
   }   
  });
});
 
 // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});




