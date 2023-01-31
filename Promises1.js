const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];



let intervalId=0;

function getPosts(){
    clearInterval(intervalId)
    intervalId = setInterval(()=>{
        let output=''
        for(let i=0; i<posts.length; i++){
        output += `<li>${posts[i].title}</li>`
        }    
        document.body.innerHTML = output;
    
    },2000)
  
}

function createPost (post){
    return new Promise((resolve, reject) => {
        setTimeout (()=> {
       
            posts.push(post);
            const error = true;

            if(!error)
            {
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
           
        },4000)
    });
   

}

createPost({title:'Post Three', body: 'This is  post three'}, getPosts)
 .then(getPosts)
 .catch(err => console.log(err));

 


getPosts()
