import React from 'react'
import './Home.css'
import "C:/Users/acer/OneDrive/Desktop/Web Dev/Reactjs/reactlec/node_modules/bootstrap/dist/css/bootstrap.min.css"



function Home() {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid nav-bg'>
          <div className='row '>
            <div className="col-10 mx-auto">
              <div className='row mx-4 justify-content-between'>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome to <strong className='brand-name'>Eve</strong>
                  </h1>
                  <h2 className="my-3">
                    Keeping track of your period can help you understand more about your cycle and your overall health. It can also help you plan so you can always be prepared. Learn more about how to track your monthly cycle using our EVE.
                  </h2>
                  <div className="mt-3">
                    <a href="/calculate" className="btn-get-started">Get Started</a>
                  </div>
                </div>

                <div className="col-md-4 order-1 order-lg-2 header-img">
                  <img src="/welcome1.jpeg" className='img-fluid animated' alt="img" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className='sec'>
        <div className="card">
          <img src="./cycle.jpeg" className="card-img-top" alt="..." />
          <div className="card-body" style={{ paddingLeft: "100px" }}>
            <h5 className="card-title">WHAT IS MENSTRUAL CYCLE?</h5>
            <p className="card-text">The menstrual cycle is a monthly process that occurs in the female reproductive system to prepare for a potential pregnancy. It typically lasts about 28 days but can range from 21 to 35 days. The cycle is divided into phases: the menstrual phase (when the uterine lining sheds, causing menstruation), the follicular phase (when an egg matures in the ovaries), ovulation (when the mature egg is released from the ovary), and the luteal phase (when the body prepares for a possible pregnancy). If fertilization does not occur, the cycle begins anew with menstruation.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body" style={{ paddingRight: "100px" }}>
            <h5 className="card-title">WHAT IS IRREGULAR MENSTRUAL CYCLE?</h5>
            <p className="card-text">An irregular menstrual cycle refers to variations in the length, duration, and flow of the menstrual cycle that deviate from the typical pattern. While a regular menstrual cycle lasts about 28 days, an irregular cycle can be shorter than 21 days or longer than 35 days. Additionally, irregular cycles may involve variations in the amount of menstrual flow, the presence of spotting between periods, or missed periods altogether. Causes of irregular menstrual cycles can include hormonal imbalances, stress, significant weight changes, excessive exercise, and underlying medical conditions such as polycystic ovary syndrome (PCOS) or thyroid disorders. Consulting a healthcare provider is advisable if menstrual irregularities persist.</p>
          </div>
          <img src="./irregular.jpeg" className="card-img-top" alt="..." />
        </div>

        <div className="card">
          <img src="./cramps.jpeg" className="card-img-top" alt="..." />
          <div className="card-body" style={{ paddingLeft: "100px" }}>
            <h5 className="card-title">HOW TO RELIEVE PERIOD CRAMPS?</h5>
            <p className="card-text">To relieve period cramps, several approaches can be effective. Pain relievers such as ibuprofen or naproxen are commonly used to reduce pain and inflammation. Applying heat to the lower abdomen with a heating pad or hot water bottle can help relax the muscles and ease discomfort. Staying well-hydrated is important; herbal teas like chamomile or ginger tea can also be soothing. Engaging in light exercise, such as walking, yoga, or gentle stretching, can increase blood flow and reduce cramping. Additionally, practicing relaxation techniques, such as deep breathing exercises, meditation, or taking warm baths, can help alleviate stress and reduce pain. Ensuring you get enough rest and sleep is also crucial for managing cramps. If period pain is severe or persists despite these measures, it's important to consult a healthcare provider</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body" style={{ paddingRight: "100px" }}>
            <h5 className="card-title">WHAT IS SPOTTING?</h5>
            <p className="card-text">Spotting before a period is typical and often means the period is about to start. It may last for around 1 or 2 days. However, sometimes spotting occurs for other reasons, such as pregnancy.Spotting is light bleeding from the vagina that is noticeable but not substantial enough to soak a pad or liner. The blood is typically brown or dark red.  Spotting can happen for a variety of reasons, including:hormonal chnages ,  ovulation, implantation bleeding, contraceptives, infections, polyps or fibroids, endometriosis, stress, thyroid disorders, cancer, trauma or injury.</p>
          </div>
          <img src="./spotting.jpeg" className="card-img-top" alt="..." />
        </div>

        <div className="card">
          <img src="./skinchange.jpeg" className="card-img-top" alt="..." />
          <div className="card-body" style={{ paddingLeft: "100px" }}>
            <h5 className="card-title">HOW DOES SKIN CHANGES DURING CYCLE?</h5>
            <p className="card-text">Many women experience various skin issues throughout the different phases of their menstrual cycle. These skin problems can be attributed to hormonal fluctuations during each phase. Skin breaksout during menstruation phase becuase of being dry and dehydrated. It is radiant, calm, balanced and glowy during follicular and ovulation phase. Skin is oily and dull during luteal phase.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

/*

      <section id='header' className=''>
        <div className='container-fluid nav-bg'>
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className='row'>
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  Welcome
                </h1>
                <h2 className="my-3">
                  we are team of talented developers making websites
                </h2>
                <div className="mt-3">
                  <a href="" className="btn btn-primary">Get Started</a>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src="/welcome1.jpeg" className='img-fluid animated' alt="img" />
              </div>
              </div>

            </div>

          </div>

        </div>
        
      </section>

*/
