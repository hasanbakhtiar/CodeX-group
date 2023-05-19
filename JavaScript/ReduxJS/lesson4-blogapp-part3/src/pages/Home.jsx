import React from 'react'
import { connect } from 'react-redux'

const Home = ({ pvalue }) => {

  return (
    <>

      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Rog Blogs</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

        </div>
      </div>

      <h1 className='text-center'>Last blogs</h1>

      <div className="row">
        {/* {pvalue.slice(pvalue.length-3,pvalue.length).reverse().map(item=>{ */}
        {[...pvalue].reverse().slice(0, 3).map(item => {
          return <div key={item.id} className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.photo} className="img-fluid rounded-start" alt="..." style={{ width: "100%", height: "100px" }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        })}

      </div>
    </>

  )
}


const mapStateToProps = (state) => {
  return {
    pvalue: state
  }
}

export default connect(mapStateToProps)(Home)