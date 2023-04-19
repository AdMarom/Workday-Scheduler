

$(function () {

  // Date at the top of application
  var currentDate = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(currentDate);

  $(".saveBtn").on('click', function () {
  var noteText = $(this).prev("#user-input").val();
  var blockID = $(this).parent().attr("id");
    
    // Save the note to local storage using the time block ID as the key
    localStorage.setItem(blockID, noteText);
  });


  // Loop through each time block
  $(".time-block").each(function () {
    // Get the current hour
    var currentHour = moment().hour()
    var setHour = parseInt($(this).attr("id").split("-")[1]);

    // Compare the block hour to the current hour
    if (setHour < currentHour) {
      $(this).addClass("past")
    } else if (setHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

           // Get any saved user input for this time block from localStorage
      // Get any saved user input for this time block from localStorage
      console.log($(this).attr("id"))

    // Get any saved user input for this time block from localStorage
    var savedNote = localStorage.getItem($(this).attr("id"));
    var noteText = $(this).prev("#user-input").val();
  
    if (savedNote) {
      // Set the value of the corresponding textarea to the saved note
      $(this).find("#user-input").val(savedNote);
    }

  });

});

