const posts = [
    {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];



let intervalId=0;

function getPosts(){
    clearInterval(intervalId)
    intervalId = setInterval(()=>{
        let output=''
        for(let i=0; i<posts.length; i++){
        output += `<li>${posts[i].title} - last updated  ${(new Date().getTime() - posts[i].createdAt)/1000}- seconds ago</li>`
        }    
        document.body.innerHTML = output;
    
    },2000)
  
}

// function getPosts(){
//     let output=''
//     for(let i=0; i<posts.length; i++){
//     output += `<li>${posts[i].title} - last updated  ${(new Date().getTime() - posts[i].createdAt)/1000}- seconds ago</li>`
//     }    
//     document.body.innerHTML = output;

// }


function create3Post (post,callback){
    setTimeout(()=>{
       
        posts.push({ ...post, createdAt: new Date().getTime()});
       
        callback()

    },6000)

}




function create4Post (post,callback){
    setTimeout(()=>{
        posts.push({ ...post, createdAt: new Date().getTime()});
        callback();
    },6000)

}

create3Post({title:'Post Three', body: 'this is  post three'},getPosts);
create4Post({title:'Post Four', body: 'this is  post four'},getPosts);

