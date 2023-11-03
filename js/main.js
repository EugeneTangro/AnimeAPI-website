document.querySelector('button').addEventListener('click', getWaifu)
document.getElementById('lightSide').addEventListener('click', lightMode)
document.getElementById('darkSide').addEventListener('click', darkMode)


function lightMode () {
  document.getElementById('light').style.display = 'flex';
  document.getElementById('dark').style.display = 'none';
  let all = document.getElementsByTagName('*');
  for(let i = 0; i < all.length-5; i++){
    all[i].style.color = 'black';
  }
  document.querySelector('body').style.backgroundColor = 'white';
}
function darkMode () {
  document.getElementById('dark').style.display = 'flex';
  document.getElementById('light').style.display = 'none';
  let all = document.getElementsByTagName('*');
  for(let i = 0; i < all.length; i++){
    all[i].style.color = 'white';
  }
  document.querySelector('body').style.backgroundColor = 'black';
  document.getElementById('inputText').style.color = 'black'
}


function getWaifu(){
    let category = document.querySelector('input[name="categories"]:checked').value; 
    let res;
    if(category === 'sfw'){
      res = document.getElementsByName('genre')[0].value;;
    } else if( category === 'nsfw'){
      res = document.getElementsByName('genre')[1].value;;
    } 

    fetch(`https://api.waifu.pics/${category}/${res}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          document.querySelector('img').src = data.url
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}