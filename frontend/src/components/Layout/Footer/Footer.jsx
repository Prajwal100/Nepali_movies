import React from 'react'
import './Footer.css'
const footerLinks = [
    {
      title: "About",
      links: [
        {
          name: "Contact Us",
          redirect: "https://github.com/Prajwal100",
        },
        {
          name: "About Us",
          redirect: "https://github.com/Prajwal100",
        },
      
      ]
    },
    {
      title: "Quick Links",
      links: [
        {
          name: "Payments",
          redirect: "https://github.com/Prajwal100/pages/payments",
        },
        {
          name: "Shipping",
          redirect: "https://github.com/Prajwal100/pages/shipping",
        },
      
      ]
    },
    {
      title: "social",
      links: [
        {
          name: "Facebook",
          redirect: "https://www.facebook.com/codingWithPrajwal",
        },
        {
          name: "YouTube",
          redirect: "https://www.youtube.com/channel/UCwVCK97DApTsNKH-7oAskFw",
        }
      ]
    }
  ]
function Footer() {
  return (
    <>
      <footer className="mt-4 footer-section">
        <div className="container">
            <div className="row">
                
                <div className="col-md-3">
                <div className="">
                    <h2 className="text-primary-grey">Nepali Movies</h2>
                    <p className="mt-2 leading-5">Nepali Movies Private Limited,Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nisi reprehenderit. Inventore.<br />
                
                    44600,<br />
                    kathmandu, Nepal
                    </p>
                </div>
                
                </div>
                {footerLinks.map((el, i) => (
                    <div className="col-md-3" key={i}>
                    <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                    <ul>
                    {el.links.map((item, i) => (
                        <li><a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a></li>
                    ))}
                    </ul>

                    </div>
                ))}
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-12 text-center">
                    <p>Design & Developed By : <a targe="_blank" href="https://github.com/Prajwal100">Prajwal R.</a></p>
                </div>
            </div>
        </div>
      
           

          </footer></>
  )
}

export default Footer