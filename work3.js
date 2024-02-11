document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('button');
  var type = document.getElementById('type');
  var work = document.getElementById('work');
  var digitalDate = document.getElementById('digital-date');

  button.addEventListener('click', function() {
    var workText = type.value;
    if (workText.trim() !== '') {
      var li = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          li.classList.add('completed');
        } else {
          li.classList.remove('completed');
        }
      });
      var label = document.createElement('label');
      label.textContent = workText;
      li.appendChild(checkbox);
      li.appendChild(label);
      work.appendChild(li);
      type.value = '';
    }
  });

  // Function to update digital date and time
  function updateDigitalDateTime() {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var formattedDateTime = currentDate.toLocaleDateString('en-US', options);
    digitalDate.textContent = formattedDateTime;
  }

  // Update digital date and time initially and refresh every second
  updateDigitalDateTime();
  setInterval(updateDigitalDateTime, 1000);
});
