export const lrc2Json = (lrc) => {

  // console.log(lrc,"jieshoudao")
    let arr = lrc.split('\n')
    let timeReg = /^\[.*\]/
    let json = []


    for(var i=0;i<arr.length-1;i++){
      let time = arr[i].match(timeReg)[0].substr(1, 8)
        let minute = time.substr(0, 2)
        let second = time.substr(3, 2)
        let ms = time.substr(6, 2)
        let cont=arr[i].substr(10)
        if(arr[i].substr(10)[0]=="]"){
         cont=arr[i].substr(10).slice(1)
        }
         
        json.push({
              time,
              ms: parseInt(minute) * 60 * 1000 + parseInt(second) * 1000 + parseInt(ms) * 10,
              content:  cont
            })
 
    }

 
    return json
  }

  
  