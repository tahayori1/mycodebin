const fintv = 60000;
const nintv = 1200000;
var nmsg = 'Time to check:\r\n\t'
var intv = setInterval(rfsh,fintv);
Notification.requestPermission();
var gt = 0;
document.head.innerText = '';
document.body.innerText = '';
var nf = Intl.NumberFormat('en-us')
function rfsh(){
    var dt = new Date();
    fetch('https://api.nobitex.ir/v2/orderbook/all').then((response) => response.json()).then(data => {
    var x = '';
    if(data.status == "ok"){
   
    x += "<p><span>Time:</span><b>" 
    + tme(dt)
    + "</b></p>"
    + numformat(data,'USDTIRT')
    + numformat(data,'BTCIRT')
    + numformat(data,'ETHIRT')
    + numformat(data,'BTCUSDT')
    + numformat(data,'ETHUSDT')
    }
    document.body.innerHTML = (x);
    if((dt.getTime() - gt) > nintv){
        new Notification(
		'Last Fetch '
		+ tme(dt) 
		,{body: 
			nmsg 
			+ "BTCUSDT = " 
			+ data['BTCUSDT'].lastTradePrice 
		});
        gt = dt.getTime();
    }
})
}

function tme(dt){
	return zro(dt.getHours()) + ":" + zro(dt.getMinutes()) + ":" + zro(dt.getSeconds());
}
function zro(num){
    if(num<10)
     return "0" + num;
    else 
    return num;
}
function numformat(data,num,unf){
    
    var nmm = (data[num].lastTradePrice);
    var fp = nmm;
    var flag = '';
    if (num.includes("IRT") == true){
        nmm = nmm/10;
          if (nmm > 1000000){
        nmm = nmm / 1000000;
            flag = "M";
        } else if (nmm > 1000){
            nmm = nmm / 1000;
            flag = "K";
        }
    }
  
    if(!unf){
    var str = "<p><span>" + num + '</span>';
    str += '<b title="'+ nf.format(parseInt(fp)) +'">' + nf.format(parseInt(nmm)) + flag + '</b>';
    str += '</p>';
    return str;
    }else{
        return parseInt(nmm);
    }
}
rfsh();
