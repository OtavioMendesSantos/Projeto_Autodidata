var agora = new Date()
var hora = agora.getHours()

switch (hora) {
    case (hora >= 0 && hora <= 5): 
        //madrugada
    break
    case (hora <= 12):
        //dia
    break
    case (hora <= 18):
        //tarde
    break
    case (hora <= 23):
        //noite
    break
    default: 

}