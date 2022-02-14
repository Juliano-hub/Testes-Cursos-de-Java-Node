var Today = new Date()
var Day = Today.getDay()


switch(Day){
    case 0:
        console.log('Sunday')
    break;

    case 1:
        console.log('Monday')
    break;
    
    default:
        console.log('Other day')
    break;
}