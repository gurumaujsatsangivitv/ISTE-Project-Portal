

const Login=()=>{
    
    return(
        <>
            <div className="flex h-screen font-george">
                <div className="bg-login-left w-1/2 h-full p-[4vw] login-shadow z-0">
                    <div className="flex flex-col justify-start items-start text-login-color-left text-5xl font-bold w-[29vw] leading-tight">
                        Welcome to the ISTE Projects Portal
                    </div>
                </div>
                <div className="bg-login-right w-1/2 h-full flex flex-col justify-center items-center">
                    <div className="text-login-color-right bg-login-left login-rounded login-gradient login-shadow text-5xl p-[2vw] font-bold h-[clamp(300px, 50vh, 500px)] w-[clamp(250px, 40vw, 400px)] ">
                        Login
                        <form className="flex flex-col items-center mt-[8vh] space-y-4 text-lg w-full">
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                className="w-3/4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 text-black"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-3/4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 text-black"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white w-3/4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Login