import './Navbar.css'

export default function Navbar(){
    return(
        <div className="container">
            <h1 className='logo'>News App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>News</li>
                <div className='search'>
                    <input type="text" placeholder='type something'/>
                    <button>Search</button>
                </div>
            </ul>
        </div>




    )
}