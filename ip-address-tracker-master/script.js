async function getuserip(ipkey) {
    const response = await fetch(
        'https://geo.ipify.org/api/v2/country,city?apiKey=at_tq2yFt2PH6G86YqADqFkAsTeuij2h&ipAddress=' + ipkey
    );

    const data = await response.json();
    res.innerText=data.ip;
    loc.innerText=data.location.city;
    time.innerText=data.location.timezone;
    isp.innerText=data.isp;

    console.log("IP:", data.ip);
    console.log("Country:", data.location.country);
    console.log("Region:", data.location.region);
    console.log("City:", data.location.city);
}


const btn=document.getElementById("btn");
const res=document.getElementById("ip");
const loc=document.getElementById("location");
const time=document.getElementById("timezone");
const isp=document.getElementById("isp");
btn.addEventListener("click",function(){
    const ans=document.getElementById("ipinput").value;
    getuserip(ans);
});