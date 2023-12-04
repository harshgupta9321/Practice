import React, { useState } from "react";


const Contact = () => {
    const [data,setData]=useState({
        name:"",
        phone:"",
        email:"",
        message:""

    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return {...preVal,[name]:value}
        })

    }
    const formsubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.name}. My mobile no. is ${data.phone}. My email address is ${data.email}. My message is ${data.message}`)
        
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" name="name" value={data.name} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput2" className="form-label">Phone</label>
                                <input type="text" name="phone" value={data.phone} onChange={InputEvent}  className="form-control" id="exampleFormControlInput2" placeholder="Mobile No." />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput3" className="form-label">Email address</label>
                                <input type="email" name="email" value={data.email} onChange={InputEvent}  className="form-control" id="exampleFormControlInput3" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" placeholder="write your message here"  name="message" value={data.message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;