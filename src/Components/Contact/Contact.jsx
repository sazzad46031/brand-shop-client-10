

const Contact = () => {
    return (
        <div className="max-w-screen-2xl mx-auto bg-orange-400 mt-20 p-16">
            <h2 className="text-3xl font-semibold text-purple-400 mt-10 mb-10 text-center">Contact Us</h2>
            <h3 className="text-7xl font-bold text-white mb-10 text-center">Its very easy to contact us</h3>
            <div>
                <div className="pl-72">
                    <p className="text-2xl mb-4">Your name</p>
                    <hr className="w-80 mb-4"></hr>
                    <p className="text-2xl mb-4">Your email</p>
                    <hr className="w-80 mb-4"></hr>
                    <p className="text-2xl mb-4">Web address</p>
                    <hr className="w-80 mb-4"></hr>
                    <p className="text-2xl mb-4">Type your message</p>
                    <hr className="w-80 mb-8"></hr>
                    <input type="submit" className="btn btn-primary" value="Submit now" />
               </div>
            </div>
        </div>
    );
};

export default Contact;