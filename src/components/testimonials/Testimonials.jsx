import "./testimonials.scss"

export default function Testimonials() {
    const data=[
        {
            id:"1",
            name: "Steve Harrington",
            icon :"./assets/github1.png",
            title: "Student",
            desc : 
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quod debitis architecto cupiditate neque iure adipisci earum sapiente,",
            img :"./assets/User.png",
            
        },
        {
            id:"3",
            name: "Rachel",
            icon :"./assets/linkedin.png",
            title: "Senior Developer",
            desc :
            "Lorem, ipsum dolor sit amet  elit. Quos quod debitis architecto cupiditate neque iure adipisci earum sapiente,",
            img :"./assets/tourist.png",
            featured: true,
            
        },
        {
            id:"3",
            name: "Stephen Jr.",
            icon :"./assets/twitter.png",
            title: "Junior Developer",
            desc :
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quod debitis architecto cupiditate neque iure adipisci earum sapiente,",
            img :"./assets/man.png",
            
        },
        
       
    ];

    return (
        <div className="testimonials" id ='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=> (

                
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/back.png" alt="" className="left" />
                        <img src={d.img} className="user" alt="" />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">
                            {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                    
                </div>

                   ))}
            </div>
        </div>
    )
}
