import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { toast, ToastContainer } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const {userLogin,setUser,signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()

    const notify = () => {
        toast.error('Invalid credentials!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const email = formData.get("email")
        const password = formData.get("password")
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate("/")
                form.reset();

            })
            .catch((error) => {
                console.log(error)
                notify()

            })

    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {

                const user = result.user;
                setUser(user);
               
                navigate("/")

            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="flex flex-col justify-center items-center mt-8 md:mt-10">

        <h2 className="text-xl font-bold text-Pink text-center mb-4" >- Welcome Back -</h2>
        
        <div className="card bg-base-100  w-[320px] md:w-[340px] shrink-0 shadow-2xl">

            <form onSubmit={handleSubmit} className="card-body pb-0 p-6">
                <h1 className="text-xl font-bold text-sky-400  text-center">Login</h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <Link to="" className="label-text-alt link link-hover text-[14px] underline mt-2">Forgot password?</Link>
                    </label>
                </div>
                <div className="form-control mt-1">
                    <button className="btn bg-sky-500 text-white hover:text-black hover:outline outline-4 outline-sky-500">Login</button>
                    <p className="text-center font-semibold my-2 text-sm">OR</p>
                </div>
            </form>
            <div className="w-[270px] md:w-[290px] mx-auto mb-3">
                <button onClick={handleSignInWithGoogle} className="btn w-[270px] md:w-[290px] mx-auto hover:text-black outline outline-2 outline-sky-500">Continue with Google</button>
            </div>
            <p className="text-center pl-8 pb-4 text-base ">Don’t Have An Account ? <Link className="text-red-500 font-bold underline" to="/register">Register</Link></p>
        </div>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
    )
}
