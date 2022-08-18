
import {useState,useRef} from "react"

import Post from "../Post/Post"
import "./News.css"
function News(props){
    let [allNews,setAllNews]= useState([])
    let textareaRef=useRef()
    function createPost(){
        console.log(textareaRef.current.value)
        let post = {
            author:"Максим",
            avatar:"https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg",
            text: textareaRef.current.value,
            likes:0,
            id:new Date()+textareaRef.current.value,
            liked:false
        }
        setAllNews((oldPosts)=>{
            return [...oldPosts,post]
        })
        textareaRef.current.value = ""
    }
    function likePost (id){
        let post=allNews.find((post)=>post.id==id)
        if(post.liked==true){
            post.likes-=1
            post.liked=false
        }else{
            post.likes+=1
            post.liked=true 
        }
        setAllNews((oldPosts)=>{
            return [...oldPosts]
        })
    }
    function deletePost(id){
        let filtered=allNews.filter((post)=>post.id!=id)
        setAllNews(filtered)
    }
    return(
        <div>
            <h1>Новости</h1>
            <div>
                <textarea ref={textareaRef} className="post-input" placeholder="Ваш пост"></textarea>
                <button onClick={createPost}>Отправить</button>
            </div>
            <ul>
                {allNews.map((post)=>{
                    return(
                        <Post key={post.id} post={post} likePost={likePost} deletePost={deletePost}/>
                    )
                })}
            </ul>
        </div>
    )
}
export default News