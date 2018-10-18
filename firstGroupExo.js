// Looptriangle();
// Chessboard();
// FizzBuzz();
// console.log(Minimum(4,3));
//  BeanCounting();
// SumOfRange();
 ReversingArray()

function Looptriangle(){
    let row=Number(prompt("Entrer le nombre de ligne"));
    let viewer=document.getElementById("viewer");
    for(let i=1; i<row;i++){
        let ligne="";
        for(let j=i;j>0;j--){
            ligne+="#"
        }
        console.log(ligne);
    }
}

function Chessboard(){
    let col=prompt("enter the number of cols");
    for(let i=0;i<col*2;i++){
        let ligne="";
        for(let j=0;j<col;j++){
            if(i%2==0 && j%2!=0){
                ligne+="#";
            }else if(i%2!=0 && j%2==0){
                ligne+="#";
            }else{
                ligne+=" ";
            }
        }
        console.log(ligne);
    }
}

function FizzBuzz(){
    for(let i=1;i<=100;i++){
       let expression="";
        if(i%3==0){
            expression="Fizz"
       }
       if(i%5==0){
           expression+="Buzz";
       }
       if(expression){
        console.log(expression);
       }else{
           console.log(i);
       }
       
    }
}

    function Minimum(a,b){
        if(a>b){
            return b;
        }else{
            return a;
        }
    }

    function isEvent(val){
        if(val<=-1){
            return
        }

    }

    function BeanCounting(){
        console.log(countBs("Bien bon que va t'il Boire"));
        console.log(countChar("Bien bon que va t'il Boire","e"));
        console.log(countBs("Bien bon que va t'il Boire"));
        function countBs(text){
            let countB=0;
            for(let i=0; i<text.length;i++){
                if(text[i]=="B") countB++;
            }
            return countB;
        }
        function countChar(text,letter){
            let countLetter=0;
            for(let i=0; i<text.length;i++){
                if(text[i]==letter) countLetter++;
            }
            return countLetter;
        }
        function CountBs(text){
            countChar(text,"a");
        }
    }
function SumOfRange(){
    console.log(sum(Range(1,10)));
    console.log(RangeStep(10,1,-2))
    console.log(sum(RangeStep(1,10,2)));

    function Range(start,end){
        let tab=[];
        for(i=start;i<=end;i++) {
            tab.push(i);
        }
        
        return tab;
    }
    function RangeStep(start,end,step){
        let tab=[];
        if(step>0){
            for(i=start;i<=end;i+=step){
                tab.push(i);
            }
        }else{
            for(i=start;i>=end;i+=step){
                tab.push(i);
            }
        }
        return tab;
    }
    function sum(tab){
       let n=0,s=0;
        while(n<tab.length){
            s+=tab[n];
            n++;
        }
        return s;
    }
}
function ReversingArray(){
    console.log(reverseArrayInPlace([1,2,3,4,5,6]));
    console.log(reverseArray([1,2,3,4,5,6,3,7,9,1,0]));
    function reverseArrayInPlace(tab){
        let table=[]
        for(let i=tab.length-1;i>=0 ;i--){
            table.push(tab[i]);
        }
        return table;
    }
    function reverseArray(tab){
        let senti=0;
        for(let i=0;i<=(tab.length/2);i++){
            senti=tab[i];
            tab[i]=tab[tab.length-i-1];
            tab[tab.length-i-1]=senti;
        }
        return tab;
    }
}
function List(){
  failed;
}