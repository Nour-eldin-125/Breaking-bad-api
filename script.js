let tmp;
async function get(){
    const response = await fetch ("https://www.breakingbadapi.com/api/characters/");
    const data = await response.json();

    console.log(data[0].name)
    document.querySelector("#content").innerHTML +=
    `
    <select id = "select" onchange="change(this.value)">
        ${data.map(actor=>` <option> ${actor.name} </option>`)}
    </select>
    `
    tmp = data;
    console.log(data[0].name)
    change(tmp[0].name);

}

get()
function change (actorName){
    console.log(actorName);
    for (let i = 0 ; i < tmp.length ; i++)
    {
        console.log(tmp[i].name);
        if (tmp[i].name == actorName)
            {
            document.querySelector("#title").innerHTML = ` Name : ${tmp[i].name}`;
            document.querySelector("#bd").innerHTML = `Birthday : ${tmp[i].birthday}`;
            document.querySelector("#occupation").innerHTML = `Occupation : ${tmp[i].occupation}`;
            document.querySelector("#status").innerHTML = `Status : ${tmp[i].status}`;
            document.querySelector("#nick").innerHTML = `Nickname : ${tmp[i].nickname}`;
            document.querySelector("img").setAttribute("src",`${tmp[i].img}`);
            //     <h3> Birthday : ${tmp[i].birthday} </h3>
            //     <h3> occupation : ${tmp[i].occupation} </h3>
            //     <h3> status : ${tmp[i].status} </h3>
            //     <h3> nickname : ${tmp[i].nickname} </h3>
            //     <h3> category : ${tmp[i].category} </h3>
            //     <img src="${tmp[i].img}" >
            // `
        }
    }
}



