document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector('#create-task-form')

  function addTask() {
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault()
      const info = e.target['new-task-description'].value
      const taskNew = document.querySelector('#tasks')
      const li = document.createElement('li')
      li.textContent = info 
      taskNew.append(li)

      const xButton = document.createElement('button')
      xButton.className = 'delete-button'
      xButton.dataset.action = 'delete'
      xButton.textContent = 'X'
      li.append(xButton)

      xButton.addEventListener('click', function() {
        li.remove()
      })
    })
  }

  addTask()

  const top = document.createElement('collection-select')
});
