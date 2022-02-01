const weatherBtn = document.getElementById('weatherBtn');

weatherBtn.addEventListener('click', function() {

    const weatherInput = document.getElementById('weatherInput').value;


    // const link = `api.openweathermap.org/data/2.5/weather?q=${weatherInput}&appid=8a5dbcbb8a735ec217df695ae29bdccb`;




    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + weatherInput + '&appid=8a5dbcbb8a735ec217df695ae29bdccb')
        .then(res => res.json())
        .then(data => {

            const cardTitle = document.getElementById('cardTitle');
            const cardText = document.getElementById('cardText');
            const textMuted = document.getElementById('textMuted');
            const cardImg = document.getElementById('cardImg');
            const tem = data.main.temp;
            const temp = tem - 273;
            cardTitle.innerText = data.name;
            cardText.innerText = temp.toFixed(2);
            textMuted.innerText = data.weather[0].main;
            if (data.weather[0].main == "Clear") {
                cardImg.src = "./img/cloudy.png";
            } else if (data.weather[0].main == "Clouds") {
                cardImg.src = "./img/foggy.png";
            } else if (data.weather[0].main == "Haze") {
                cardImg.src = "./img/fog.png";
            } else {
                cardImg.src = "./img/cloudy.png";
            }


        })

    .catch((error) => {
        alert("Hey Stupid!! insert correct Capital Name");
    });



})