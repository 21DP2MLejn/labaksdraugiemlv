let availableKeywords = [
    "Guapo",
    'NIGGERS',
  
];

let resultbox = document.querySelector(".resultbox")
let inputbox = document.getElementById("input-box")

inputbox.onkeyup = function(){
    let result = [];
    let input = inputbox.value;
    if(input.lenght){
        result = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultbox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return `<li onclick=selectinput(this)>` + list + `</li>`;
    });

    resultbox.innerHTML = `<ul>` + content.join('') + `</ul>`;
}

function selectinput(list){
    inputbox.value = list.innerHTML;
    resultbox.innerHTML = '';
}