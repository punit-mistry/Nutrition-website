import React,{useState,useEffect} from 'react'
import {storage} from '../../firebase'
import {ref,uploadBytes,listAll,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
const Upload = () => {

    const [file,setFile ] =useState(null)
    const [imagelist,setImaglist ] =useState([])

    const imagename = ref(storage,'images/')

    const uploadfile=()=>{
        if(file==null) return "please upload a file"
        const imageref  =ref(storage,`images/${file.name+v4()}`)
        uploadBytes(imageref,file).then((res)=>alert("uploaded successfully ")).catch((err)=>console.log(err))
    }
    useEffect(()=>{
        listAll(imagename).then((res)=>{
            res.items.forEach(e => {
                getDownloadURL(e).then((url)=>{
                    setImaglist((prev)=>[...prev,url])
                })
            })
    }).catch((err)=>console.log(err))
    },[])
  return (
    <div>
<input type="file" onChange={(e)=>{setFile(e.target.files[0])}}/>
    <button onClick={uploadfile}>
        upload
    </button>

    {
        imagelist.map((res)=>{
            return (
                <img src={res} width={50} height={50}/>
            )
        })
    }

    </div>
  )
}

export default Upload