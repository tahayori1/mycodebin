var zanjire = [];

var rikht = ['variz','bardasht','komak','vam','bazpardakht','abunman','virayesh']
var sh = {};
variz("ali",100);
variz("asghar",100);
variz("hamid",100);
variz("jafar",100);
variz("ahmad",100);
////
for(i=0;i<12;i++){
abunman("ali",1);
abunman("asghar",1);
abunman("hamid",1);
abunman("jafar",1);
abunman("ahmad",1);
}
///
barasi();
vam("ali",250);
vam("asghar",250);
for(i=0;i<4;i++) bazpardakhat("ali",25);
for(i=0;i<4;i++) bazpardakhat("asghar",25);
barasi();
vam('ahmad',250);
for(i=0;i<4;i++) bazpardakhat("ahmad",25);
for(i=0;i<4;i++) bazpardakhat("ali",25);
for(i=0;i<4;i++) bazpardakhat("asghar",25);
barasi();
vam('jafar',250);
for(i=0;i<2;i++) bazpardakhat("jafar",25);
for(i=0;i<2;i++) bazpardakhat("ahmad",25);
for(i=0;i<2;i++) bazpardakhat("ali",25);
for(i=0;i<2;i++) bazpardakhat("asghar",25);
barasi();
vam('hamid',250);
for(i=0;i<4;i++) bazpardakhat("hamid",25);
for(i=0;i<4;i++) bazpardakhat("jafar",25);
for(i=0;i<4;i++) bazpardakhat("ahmad",25);
barasi();


            
//if(i.vam - i.bazpardakht > 0) bazpardakhat(i.vam/10);

function variz(sh,arzesh){
    tarakonesh('variz',arzesh,sh,1)
}

function bardasht(sh,arzesh){
    tarakonesh('bardasht',arzesh,1,sh)
}

function komak(sh,arzesh){
    tarakonesh('komak',arzesh,1,sh)
}

function vam(sh,arzesh){
    tarakonesh('vam',arzesh,1,sh)
}

function bazpardakhat(sh,arzesh){
    tarakonesh('bazpardakhat',arzesh,sh,1)
}

function abunman(az,arzesh){
    tarakonesh('abunman',arzesh,sh,1)
}

function barasi(){
    var sum = 0;
    sh = {};
    for(i=0; i < zanjire.length; i++){
        if(sh[zanjire[i].az] == undefined){
            sh[zanjire[i].az] =  {variz:0, bardasht:0,vam:0,abunman:0,komak:0,bazpardakhat:0};
            sh[zanjire[i].az][zanjire[i].rikht] = zanjire[i].arzesh;
        }else{
            sh[zanjire[i].az][zanjire[i].rikht] += zanjire[i].arzesh;
        }
        if(sh[zanjire[i].be] == undefined){
            sh[zanjire[i].be] =  {variz:0, bardasht:0,vam:0,abunman:0,komak:0,bazpardakhat:0};
            sh[zanjire[i].be][zanjire[i].rikht] = zanjire[i].arzesh;
        }else{
            sh[zanjire[i].be][zanjire[i].rikht] += zanjire[i].arzesh;
        }
    }
    console.log(sh); 
    console.log((sh[1].bazpardakhat + sh[1].abunman + sh[1].variz) - sh[1].vam );
    
}

function tarakonesh(rikht,arzesh,az,be){
    tarikh = new Date();
    var tara = {
        rikht: '',
        arzesh: '',
        tarikh: '',
        az: '',
        be: '',
        status: '0'
    }
    tara.arzesh = parseInt(arzesh);
    tara.rikht = rikht;
    tara.az = az;
    tara.be = be;
    tara.tarikh = tarikh.getTime();
    zanjire.push(tara);
}