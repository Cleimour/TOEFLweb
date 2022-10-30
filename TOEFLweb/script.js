function geoTxt() {
    document.getElementById("journey").textContent = "დაიწყეთ თქვენი ინგლისური ენის შესწავლის თავგადასავალი" ;
    document.getElementById("toeflBig").textContent = "TOEFL (ინგლისური, როგორც უცხო ენის ტესტი) არის სტანდარტიზებული აკადემიური ინგლისური ენის ტესტი, რომელსაც უპირველეს ყოვლისა ატარებენ სტუდენტები, რომლებიც განაცხადებენ შეერთებული შტატების უნივერსიტეტებში.";
    document.getElementById("ieltsBig").textContent = "ინგლისური ენის ტესტირების საერთაშორისო სისტემა (IELTS) შექმნილია იმისთვის, რომ დაგეხმაროთ იმუშაოთ, ისწავლოთ ან მიგრაციაში წახვიდეთ ქვეყანაში, სადაც ინგლისური მშობლიური ენაა.";
    document.getElementById("genEng").textContent = "ინგლისური ენის ტესტირების საერთაშორისო სისტემა (IELTS) შექმნილია იმისთვის, რომ დაგეხმაროთ იმუშაოთ, ისწავლოთ ან მიგრაციაში წახვიდეთ ქვეყანაში, სადაც ინგლისური მშობლიური ენაა.";
    document.getElementById("viewMr").textContent = "შეიტყვე მეტი";
    document.getElementById("viewMr1").textContent = "შეიტყვე მეტი";
    document.getElementById("viewMr2").textContent = "შეიტყვე მეტი";
    document.getElementById("cnctEmail").textContent = "✉ ელე. მისამართი: example@gmail.com";
    document.getElementById("cnctNum").textContent = "☏ ტელეფონის ნომერი: +032 2 203491";
    document.getElementById("cnctLoc").textContent = "ლოკაცია: სულხან ცინცაძის 5"
}

function engTxt() {
    window.location.reload();
}

const btn = document.getElementById("xtrTxt")
const main1 = document.querySelector('.changeTxt')
const txtUrl = 'ajax_info.txt';
btn.onclick = dataReq;

function output(data) {
    console.log(data);
    console.log(this.responeText);
    main1.textContent = this.responeText;
}

function dataReq() {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', output)
    xhr.open('GET', txtUrl)
    xhr.send();
    console.log(xhr)
}