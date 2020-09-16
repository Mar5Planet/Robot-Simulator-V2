document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  const movesContainer = document.querySelector('#moves-container')

  const moveButton = document.querySelector('#move-button')
  // ADD CODE HERE!
  document.addEventListener('keydown', function(e){
    if (e.key == 'ArrowLeft') {

      const newLi = document.createElement('li')
      newLi.innerText = 'left'
      movesContainer.appendChild(newLi)
    }

    else if (e.key == 'ArrowUp') {

      const newLi = document.createElement('li')
      newLi.innerText = 'up'
      movesContainer.appendChild(newLi)
    }

    else if (e.key == 'ArrowRight') {

      const newLi = document.createElement('li')
      newLi.innerText = 'right'
      movesContainer.appendChild(newLi)
    }

    else if (e.key == 'ArrowDown') {

      const newLi = document.createElement('li')
      newLi.innerText = 'down'
      movesContainer.appendChild(newLi)
    }

  })

  moveButton.addEventListener('click', function(e){
    const exisitingLi = document.querySelector('li')
    if (exisitingLi) {
      const allLis = document.querySelectorAll('li')
      
      for (i = 0; i < allLis.length; i++) {
        setInterval(move(allLis[i].innerText), 500);
        allLis[i].remove()
        
       
      }
      
    } else { alert('There are no moves to make!')}
  })

  
})

// 37 - left 
// 38 - up 
// 38 - right 
// 40 - down
