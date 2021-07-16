let request=new XMLHttpRequest()
request.open("GET","/style.css")
request.onreadystatechange=()=>{
    if(request.readyState===4){
        if(request.status>=200 && request.status<300){
            const style=document.createElement("style")
            style.innerHTML=request.response
            document.head.appendChild(style)
        }else{
            alert('加载css失败')
        }
    }
}
request.send()

const request1=new XMLHttpRequest()
request1.open("GET","/2.js")
request1.onreadystatechange=()=>{
    if(request1.readyState===4){
        if(request1.status>=200 && request1.status<300){
          const script=document.createElement("script")
          script.innerHTML=request1.response
          document.body.appendChild(script)
        }else{
            alert('加载js失败')
        }
    }
}
request1.send()

const request2=new XMLHttpRequest()
request2.open("GET","/3.html")
request2.onreadystatechange=()=>{
    if(request2.readyState===4){
        if(request2.status>=200 && request2.status<300){
          const div=document.createElement("div")
          div.innerHTML=request2.response
          document.body.appendChild(div)
        }else{
            alert('加载html失败')
        }
    }
}
request2.send()

const request3=new XMLHttpRequest()
request3.open("GET","/4.xml")
request3.onreadystatechange=()=>{
    if(request3.readyState===4){
        if(request3.status>=200 && request3.status<300){
           const dom=request3.responseXML
           const text=dom.getElementsByTagName("warning")[0].textContent
           console.log(text.trim())
        }else{
            alert('加载xml失败')
        }
    }
}
request3.send()


const request4=new XMLHttpRequest()
request4.open("GET","/5.json")
request4.onreadystatechange=()=>{
    if(request4.readyState===4){
        if(request4.status>=200 && request4.status<300){
          const object=JSON.parse(request4.response)
          myName.innerHTML=object.name
        }else{
            alert('加载json失败')
        }
    }
}
request4.send()


let n=1
getJSON.onclick=()=>{
const request=new XMLHttpRequest()
request.open("GET",`/page${n+1}`)
request.onreadystatechange=()=>{
    if(request.readyState===4){
        if(request.status>=200 && request.status<300){
            console.log(request.response)
          const array=JSON.parse(request.response)
          array.forEach(item=>{
            const li=document.createElement("li")  
            li.textContent=item.id 
            xxx.appendChild(li) 
          })
        }else{
            alert('没有下一页了')
        }
        n+=1
    }
}
request.send()
}