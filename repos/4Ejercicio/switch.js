// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;

//     default:
//         alert('We hope that this page looks ok!');
// }

let browser = prompt("Type a browser")
if (browser == "edge") {
    alert("You've got the Edge!");
}
else if (browser == "chrome" || browser == "firefox" || browser == "safari" || browser == "opera") {
    alert('Okay we support these browsers too');
}
else {
    alert('We hope that this page looks ok!');
}