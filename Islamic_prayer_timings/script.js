const input = document.getElementById('input-city');


const fajr = document.getElementById('fajr');
const zuhr = document.getElementById('zuhr');
const asr = document.getElementById('asr');
const magrib = document.getElementById('magrib');
const isha = document.getElementById('isha');

const fajrTime = document.getElementById('fajr-time');
const zuhrTime = document.getElementById('zuhr-time');
const asrTime = document.getElementById('asr-time');
const magribTime = document.getElementById('magrib-time');
const ishaTime = document.getElementById('isha-time');

const todate = document.getElementById('todate');
const location_ = document.getElementById('location');
const qiblaDirection = document.getElementById('qibla-direction');
const prayer_method = document.getElementById('prayer-method');

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        const city = input.value;
      
        const data = prayer(city);
        data.then((result) => {
           const res = JSON.parse(result);
           console.log(res);
           if(res.status_code === 0 ) {
                alert('City Not found');
                return;
              }
            else{
           location_.textContent = res.address ? res.address : res.query;
           fajrTime.textContent = res.items[0].fajr;
           zuhrTime.textContent = res.items[0].dhuhr;
           asrTime.textContent = res.items[0].asr;
           magribTime.textContent = res.items[0].maghrib;
           ishaTime.textContent = res.items[0].isha;
           todate.textContent = res.items[0].date_for;
           qiblaDirection.textContent = res.qibla_direction;
           prayer_method.textContent = res.prayer_method_name;}
        })

        async function prayer(city) {

            const url = `https://muslimsalat.p.rapidapi.com/${city}.json`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': CONFIG.xRapidKey,
                    'x-rapidapi-host': CONFIG.xRapidHost
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                // console.log(result);
                return result;
            } catch (error) {
                console.error(error);
            }
        }
    }
});



        async function prayer(city) {
            console.log(city);
            const url = `https://muslimsalat.p.rapidapi.com/${city}.json`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': CONFIG.xRapidHost,
                    'x-rapidapi-host': CONFIG.xRapidKey
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                // console.log(result);
                return result;
            } catch (error) {
                console.error(error);
            }
        }
        const city = 'london';
      
        const data = prayer(city);
       
        data.then((result) => {
           const res = JSON.parse(result);
           console.log(res);
           setTimeout(() => {
               location_.textContent = res.address ? res.address : res.query;
               fajrTime.textContent = res.items[0].fajr;
               zuhrTime.textContent = res.items[0].dhuhr;
               asrTime.textContent = res.items[0].asr;
               magribTime.textContent = res.items[0].maghrib;
               ishaTime.textContent = res.items[0].isha;
               todate.textContent = res.items[0].date_for;
               qiblaDirection.textContent = res.qibla_direction;
               prayer_method.textContent = res.prayer_method_name;
           }, 0);
          

        })


