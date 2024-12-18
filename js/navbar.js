  // Get the dropdown button and dropdown content
  const dropdownButton = document.querySelector('.sorn-dropdown-btn');
  const dropdownContent = document.querySelector('.sorn-dropdown-content');

  // Function to toggle the dropdown menu
  dropdownButton.addEventListener('click', function(event) {
    // Prevent the event from bubbling up to the document and triggering the outside click
    event.stopPropagation();
    
    // Toggle the 'show' class to trigger the transition
    dropdownContent.classList.toggle('show');
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', function(event) {
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.remove('show');
    }
  });