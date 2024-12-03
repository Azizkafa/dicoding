// Function to open modal with image
function openModal(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = image.src;
  }
  
  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  
  // Function to toggle the feedback form visibility
  function toggleForm() {
    var form = document.getElementById("feedback-form");
    form.classList.toggle("hidden");
  }
  
  // Function to handle feedback submission
  function submitFeedback() {
    var feedbackText = document.getElementById("feedback-text").value;
    if (feedbackText) {
      alert("Terima kasih atas ulasan Anda!");
      document.getElementById("feedback-text").value = ''; // Clear feedback input
    } else {
      alert("Tolong isi ulasan Anda!");
    }
    var output = feedbackText;
    document.getElementById('output').value = output;
  }