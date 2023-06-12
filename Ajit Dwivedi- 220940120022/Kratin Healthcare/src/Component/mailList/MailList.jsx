import "./mailList.css"
const MailList = () => {
    return(
        <div className="mail">
            <h1 className="mailTitle">ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।</h1>
            <span className="mailDesc">Sign up and we'll send the daily health tips to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email"></input>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList