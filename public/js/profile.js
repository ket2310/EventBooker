const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#event-name').value.trim();
    const eventTime = document.querySelector('#event-time').value.trim();
    const description = document.querySelector('#event-desc').value.trim();
  
    if (name && eventTime && description) {
      const response = await fetch(`/api/events/addevent`, {
        method: 'POST',
        body: JSON.stringify({ name, eventTime, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create event');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete event');
      }
    }
  };
  
  
const zipsearch = async () => {
  document.location.replace('/zipsearch')
}

  document.querySelector('#gosearch').addEventListener('click', zipsearch);

  document
    .querySelector('.new-event-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.event-list')
    .addEventListener('click', delButtonHandler);
  