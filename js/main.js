document.querySelector('button').addEventListener('click', getWaifu)
document.getElementById('lightSide').addEventListener('click', lightOptionsAppear)
document.getElementById('darkSide').addEventListener('click', darkOptionsAppear)

function lightOptionsAppear () {
  document.getElementById('light').style.display = 'flex';
  document.getElementById('dark').style.display = 'none';
}
function darkOptionsAppear () {
  document.getElementById('dark').style.display = 'flex';
  document.getElementById('light').style.display = 'none';
}


function getWaifu(){
    let category = document.querySelector('input[name="categories"]:checked').value;
    let genre = document.getElementsByName('genre')[0].value;
    let genre2 = document.getElementsByName('genre')[1].value;

    let res = genre !== undefined ? genre : genre2;

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