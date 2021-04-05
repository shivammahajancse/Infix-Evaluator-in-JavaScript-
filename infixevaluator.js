var stackarr=[];
var topp=-1;
var evalstack=[];

function postfixevaluator(evalst)
{
    eval=evalst.split("$");
    console.log(eval);
   for(var i=0;i<eval.length-1;i++)
   {
       if(!operator(eval[i]))
       {
           push(eval[i]);
       }
       else
       {
           var op1=parseInt(pop());
           var op2=parseInt(pop());
           
           if(eval[i]=="+")
           {
               push(op2+op1);
           }
           else if(eval[i]=="-")
           {
               push(op2-op1);
           }
           else if(eval[i]=="*")
           {
               push(op2*op1);
           }
           else
           {
               push(op2/op1);
           }
       }
   }
   document.getElementById("text").innerHTML=(pop());
}

function push(e)
{
   topp++;
   stackarr[topp]=e;
}


 