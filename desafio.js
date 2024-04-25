let nickname = "Rodrigo"
let exp = 1311
if (exp <= 1000){
    console.log("O herói " + nickname + " Alcançou o nivel FERRO")
} else if(exp >= 1001 && exp <=2000){
    console.log("O herói " + nickname + " Alcançou o nivel BRONZE")
} else if(exp >= 2001 && exp <=5000){
    console.log("O herói " + nickname + " Alcançou o nivel PRATA")
} else if(exp >= 5001 && exp <=7000){
    console.log("O herói " + nickname + " Alcançou o nivel OURO")
} else if(exp >= 7001 && exp <=8000){
    console.log("O herói " + nickname + " Alcançou o nivel PLATINA")
}else if(exp >= 8001 && exp <=9000){
    console.log("O herói " + nickname + " Alcançou o nivel ASCENDENTE")
} else if(exp >= 9001 && exp <=10000){
    console.log("O herói " + nickname + " Alcançou o nivel IMORTAL")
} else if(exp > 10000){
    console.log("O herói " + nickname + " Alcançou o nivel RADIANTE")
}
