function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
export default function generate(amount,basepath,signsarray,syntax){
    const randquestions=[];
    const signs=signsarray;
    for(let index=0;index<amount;index++){
        const correctanswer=getRandomInt(0,4);
        const sign=getRandomInt(0,signsarray.length);
        const path=""+signs[sign]
        let alreadyassigned=[];
        alreadyassigned+=path
        randquestions[index]={
            answerOptions: [
            ],
            picture:require("../pictures/"+`${basepath}`+"/"+`${path}`+".png"),
        };
        randquestions[index].answerOptions[correctanswer]={
            answerText: ""+`${syntax}`+" "+`${path}`+"",isCorrect:true
        }
        for(let b=0;b<4;b++){
            if(b!=correctanswer){
                let randint=getRandomInt(0,signsarray.length)
                let randsign=""+signs[randint]
                while(randsign==path || alreadyassigned.includes(randsign)){
                    randint=getRandomInt(0,signsarray.length)
                    randsign=""+signs[randint]
                }
                randquestions[index].answerOptions[b]={
                    answerText:""+`${syntax}`+" "+`${randsign}`+"",isCorrect:false
                }
                alreadyassigned+=randsign
            }
        }
    }
    return randquestions
}