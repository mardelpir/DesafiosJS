let lollaDay = prompt("Seleccione el dia del festival: 1, 2 o 3");

switch(lollaDay){
    case "1":
        alert("Bandas: Arctic Monkeys, Depeche Mode, The Killers")
        break;
    case "2":
        alert("Bandas: Tool, The Kooks, Red Hot Chili Peppers");
        break;
    case "3":
        alert("Bandas: Imagine Dragons, The Strokes, Foster The People");
        break;
    default:
        alert("No selecciono ningún día");
        break;
}