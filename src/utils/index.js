

export default{
    // 最近浏览
addViews(item){
      if(!localStorage.views){
       let arr = []
       arr.push(item)
       localStorage.setItem('views',JSON.stringify(arr))
      }
      else{
          let arr = JSON.parse(localStorage.views) 
          arr.push(item)
          localStorage.setItem('views',JSON.stringify(arr))
      }
},

//    搜索历史
addIpValue(item){
    if(!localStorage.IpValue){
     let arr = []
     arr.push(item)
     localStorage.setItem('IpValue',JSON.stringify(arr))
    }
    else{
        let arr = JSON.parse(localStorage.IpValue) 
        arr.push(item)
        localStorage.setItem('IpValue',JSON.stringify(arr))
    }
}
}