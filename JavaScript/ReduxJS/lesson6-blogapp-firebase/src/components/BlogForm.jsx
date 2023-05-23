import React, { useState } from 'react'

const BlogForm = ({onFormSubmited,editblog}) => {
    const [iphoto,setiPhoto] = useState(editblog?editblog.photo:"");
    const [ititle,setiTitle] = useState(editblog?editblog.title:"");
    const [idesc,setiDesc] = useState(editblog?editblog.desc:"");
    
    const blogSubmit =e=>{
            e.preventDefault();
            if (!ititle || !iphoto || !idesc) {
                alert('plase, fill input');
            }else{
                onFormSubmited({
                    photo:iphoto,
                    title:ititle,
                    desc:idesc
                })
                
                  
              
            }
    }
    
    return (
        <div className="d-flex align-items-center justify-content-center">
            <form onSubmit={blogSubmit} className='col-4'>
            <div className="mb-3">
                    <label className="form-label">Blog photo url </label>
                    <input value={iphoto} type="text" className="form-control" onChange={e=>{setiPhoto(e.target.value)}}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Blog title</label>
                    <input value={ititle} type="text" className="form-control" onChange={e=>{setiTitle(e.target.value)}} />
                </div>
               
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" onChange={e=>{setiDesc(e.target.value)}} id="floatingTextarea2" style={{ height: 100 }} defaultValue={idesc} />
                    <label htmlFor="floatingTextarea2">Blog description</label>
                </div>


                <button type="submit" className="btn btn-primary mt-4">{editblog?"Edit":"Add"}</button>
            </form>
        </div>

    )
}

export default BlogForm