/* Data types in JS */

/*let arrayObject = [45,78,"JavaScript","matn",true,false];*/
/*let oddiyObject = {ism:"Rustam", familya:"Murodov", yoshi: 15};*/
/*console.log(arrayObject [2]);*/
/*console.log(oddiyObject.ism);*/

/* Functions in JS */

/*function savatchaniTekshirish(){
    if (savatcha.length == 0){
        document.write("Savatchaning ichida " + savatcha.length + "dona ma'lumot bor");
    }
    else{
        document.write("Savatchaning ichida " + savatcha.length + "ta ma'lumot bor");
    }
}
let savatcha = [12,"text",true];
savatchaniTekshirish();*/

/* Date in JS */

let sana = new Date();

sana.setFullYear(2008)
sana.setMonth(0)
sana.setDate(15)
let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftakuni = sana.getDay();

let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentybar","oktyabr","noyabr","dekabr"]
let kunlar = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]

document.write ("Hozir" + yil +  "-yil"  +oylar[oy] +  "oyining"  +kun+  ".-kuni Haftaning esa "
                + kunlar [haftakuni] + "-kuni");









