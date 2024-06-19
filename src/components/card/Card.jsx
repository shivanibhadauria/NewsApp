import jon from './jon.png'
import './Card.css'
import { useEffect, useState } from 'react';


export default function Card() {


    const [news, getNews] = useState([]);
    async function fetchApi() {
        let res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8b7e1c566f7547f495183cdab2bfe6b6");
        let data = await res.json();
        getNews(data.articles)

    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <body>

            <div className='main'>
                {
                    news.map((item) => {
                        return <>

                            <div className="card-container">
                                <div className='card'>
                                    <div><img src={item.urlToImage== null? {jon} : item.urlToImage
                                    } /></div>
                                    <div className='content'>

                                        <h1 className='headline'>{item.title}</h1>

                                        <p>{item.content}</p>


                                        <a href={item.url} target='_blank' rel="noreferrer" alt="imghere"  className='card-btn'>Read More</a></div>
                                </div>

                            </div>






                        </>






                    })
                }

            </div>

        </body>


    )

}
