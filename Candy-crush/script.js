let arr = [];
let square;
let currSquare;
let otherSquare;
let swap;
let rows=8;
let colums=8;
let r1,r2;
let c1,c2;
let score=0;
let images = ['url(images/blue-candy.png)', 'url(images/green-candy.png)',
    'url(images/orange-candy.png)', 'url(images/purple-candy.png)'
    , 'url(images/red-candy.png)', 'url(images/yellow-candy.png)']
let container = document.getElementsByClassName('container')[0];

function blockgame() {
    for (let r = 0; r <rows; r++) {
        let row = [];

        for (let c = 0; c<colums; c++) {

            square = document.createElement('div');
            square.setAttribute('draggable', true)

            let index = Math.floor(Math.random() * images.length);
            square.style.backgroundImage = images[index];
            square.id = r.toString() + '-' + c.toString();
            container.appendChild(square);

            row.push(square);

            square.addEventListener('dragstart',(current)=>{
                currSquare=current.currentTarget;
                swap=current.currentTarget.style.backgroundImage;
               let coordinate=currSquare.id.split('-');
                r1=parseInt(coordinate[0]);
                c1=parseInt(coordinate[1]);


            } );
            square.addEventListener('dragover', (current)=>{
                otherSquare=current.currentTarget;
                let coordinate=otherSquare.id.split('-');
                r2=parseInt(coordinate[0]);
                c2=parseInt(coordinate[1]);
                

            });


            square.addEventListener('dragend',()=>{

            let movedown=r1==r2-1&&c1==c2;
            let moveup=r1==r2+1&&c1==c2;
            let moveright=r1==r2&&c2==c1+1;
                let moveleft=r1==r2&&c2==c1-1;

                if(movedown||moveleft||moveright||moveup){
                currSquare.style.backgroundImage=otherSquare.style.backgroundImage;
                otherSquare.style.backgroundImage=swap;
                }
               
            });


        }
        arr.push(row);
    }

}




window.onload = function() {
score=0;

    blockgame();

setInterval(checkcandy,100);
    
}



    function checkcandy(){

        for(let row=0;row<rows;row++)

        for(let colum=0;colum<colums-2;colum++)
        {

        
        let candy1=arr[row][colum];    
        let candy2=arr[row][colum+1];    
        let candy3=arr[row][colum+2];    
        if(candy1.style.backgroundImage==candy2.style.backgroundImage&&candy2.style.backgroundImage==candy3.style.backgroundImage)
        {

            let index = Math.floor(Math.random() * images.length);

            candy1.style.backgroundImage = images[index];
            let index1 = Math.floor(Math.random() * images.length);


            candy2.style.backgroundImage = images[index1];
            let index2 = Math.floor(Math.random() * images.length);

            candy3.style.backgroundImage = images[index2];

            score+=1;
document.getElementById('score').innerText=score;



        }
        
        
        }

        for(let colum=0;colum<colums;colum++){
        for(let row=0;row<rows-2;row++)

        {

        
        let candy4=arr[row][colum];    
        let candy5=arr[row+1][colum];    
        let candy6=arr[row+2][colum];    
        if(candy4.style.backgroundImage==candy5.style.backgroundImage&&candy5.style.backgroundImage==candy6.style.backgroundImage)
        {
        let index = Math.floor(Math.random() * images.length);
        candy4.style.backgroundImage = images[index];
        let index1 = Math.floor(Math.random() * images.length);

        candy5.style.backgroundImage = images[index1];
        let index2 = Math.floor(Math.random() * images.length);

        candy6.style.backgroundImage = images[index2];

        score+=1;
        document.getElementById('score').innerText=score;

    
            



        }
        
        
        }
    }

}
















