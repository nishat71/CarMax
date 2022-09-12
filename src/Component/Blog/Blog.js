import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineComment } from "react-icons/ai";
import "./Blog.css"


export default function Blog() {
    return (

        <section className="blog-area" id="blog">
            <div className="blog-container">
                <div className="section-title">
                    <h4>Blog</h4>
                    <h2>Latest News</h2>
                </div>
                <div className="blog">
                    <div className="single-blog shadow">
                        <div className="blog-img img-fluid">
                            <img className='img-fluid'  src="https://i.ytimg.com/vi/NFeo5lEa7rg/maxresdefault.jpg" alt="" />
                            <div className="img-content">
                                <p><RiAdminLine /> Blog</p>
                                <p><AiOutlineComment /> 12-01-2022</p>
                            </div>
                        </div>
                        <h4 className='p-2'>Maruti YFG (Skoda Kushaq/VW Taigun Rival) to Launch Soon</h4>
                        <p className='p-2'>
                            Maruti Suzuki has restricted itself to just the entry-level SUV segment for many years now. The Brezza has been successful in helping the country’s leading carmaker with enviable presence but it’s surely conspicuous by its absence in the higher SUV segments. The Creta, for instance, has helped Hyundai establish a strong foothold in the C-SUV segment. So far, it’s been the undisputed leader of its category but it looks like Maruti Suzuki will soon try to grab the bull by the horns. Launching this Diwali is the production Maruti YFG, a compact SUV that takes fight straight to the top-selling South Korean. Well, it will even try and outsell the likes of Kia Seltos, Skoda Kushaq and VW Taigun.
                        </p>
                    </div>

                    <div className="single-blog shadow">
                        <div className="blog-img">
                            <img className='img-fluid' src="https://i.ibb.co/WyNpG1J/2022-santa-fe-1.jpg" alt="" />
                            <div className="img-content">
                                <p><RiAdminLine /> Blog</p>
                                <p><AiOutlineComment /> 22-04-2022</p>
                            </div>
                        </div>
                        <h4 className='p-2'>Best Hyundai Automatic SUV Cars</h4>
                        <p className='p-2'>
                            Hyundai has been performing quite well in the Indian market. This coincides with the rising popularity of automatic cars in the country. Currently, there are many good models to choose from. This has led to more affordable options for consumers. Hyundai offers some of the best automatic SUVs in the Indian market. Let’s take a closer look at Best Hyundai Automatic SUV cars in India and their features.
                        </p>

                    </div>

                    <div className="single-blog shadow">
                        <div className="blog-img img-fluid">
                            <img className='img-fluid' src="https://i.ibb.co/TKSRQVr/Hyundai-Venue.jpg" alt="" />
                           <div className="img-content">
                                <p><RiAdminLine /> Blog</p>
                                <p><AiOutlineComment /> 30-03-2022</p>
                            </div>
                        </div>
                        <h4 className='p-2'>New Hyundai Venue Adopts Sensuous Sportiness Theme for Bold Outlook</h4>
                        <p className='p-2'>
                            Hyundai Motor India Ltd, country’s First Smart Mobility Solutions Provider and the largest exporter since inception, recently revealed the new Hyundai Venue whose market launch is programmed for June 16. The new SUV promises to deliver an exciting experience with many new styling elements and a handful of first-in-segment features. The former is courtesy Hyundai’s Sensuous Sportiness design language that imparts a bold new look to the popular SUV.
                        </p>


                    </div>
                </div>
            </div>
        </section>


    )
}
