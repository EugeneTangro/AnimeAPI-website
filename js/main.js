document.querySelector('button').addEventListener('click', getWaifu)

function getWaifu(){

    
    fetch('https://api.waifu.pics/trap/nsfw/trap')
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }