import './Block4.scss'

function Block4() {
    return (
        <div className='four-container'>
            <div className="container-email">
                <h1>Get offers straight to your inbox</h1>
                <p>Sign up for the Sushiman newsletter.</p>
                <label>
                    <input type="text" placeholder='Enter email address'/>
                    <button>Get Started</button>
                </label>
            </div>
        </div>
    );
}

export default Block4;