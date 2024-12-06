import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import register from "../assets/images/register.svg"
import { AuthContext } from "../provider/AuthProvider"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { createUser, updateUserProfile, setUser, signInWithGoogle } = useContext(AuthContext)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const notify = () => {
        toast.error('Please enter valid credentials ! ', {
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
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        const newUser = { name, email }
        if (!passwordRegex.test(password)) {

            return setError("Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.")
        }

        createUser(email, password)
            .then((result) => {
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser(result.user);
                        fetch("http://localhost:5000/users", {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                            })

                        navigate("/")
                    })
                    .catch(error => {
                        console.log(error)
                    })

            })
            .catch(error => {
                notify()
                console.log(error)
            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {

                const user = result.user;
                setUser(user);


                const email = user.email
                const displayName = user.displayName
                const newUser = {email,displayName}
                fetch("http://localhost:5000/users", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                
                navigate("/")

            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="flex flex-col justify-center items-center mt-8 md:mt-12 ">

            <h2 className="text-xl font-bold text-sky-400 mb-8 w-64 text-center ">Create Your Account & Get Started Today!</h2>
            <div className="md:flex items-center gap-16 lg:gap-20 md:mr-10 ">

                {/* register image */}
                <div>
                    <img src={register} className="w-80 lg:w-96 hidden md:block bg- rounded-md" alt="" />
                </div>


                {/* register form */}
                <div className="card bg-base-100  max-w-[330px] md:max-w-[350px] shrink-0 shadow-2xl">

                    <form onSubmit={handleSubmit} className="card-body pb-1">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Name" className="input h-11 w-64 md:w-72 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo-URL" className="input h-11 w-64 md:w-72 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input h-11 w-64 md:w-72 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onKeyDown={() => setError(null)} name="password" type="password" placeholder="password" className="input h-11 w-64 md:w-72 input-bordered" required />
                            {error && <p className="text-red-500 text-sm">{error}</p>}

                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-Pink text-white hover:text-black hover:outline outline-4 outline-Pink">Register</button>
                        </div>
                        <p className="text-center font-semibold my-0.5 text-sm dark:text-black">OR</p>
                    </form>
                    <div className="w-64 md:w-72 mx-auto mb-3">
                        <button onClick={handleSignInWithGoogle} className="btn w-full  outline outline-2 outline-Pink ">Continue with Google</button>
                    </div>
                    <p className="text-center mb-4 dark:text-black">Already have an account? <Link to="/login" className="text-red-500 font-bold underline">Login</Link></p>
                </div>
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
