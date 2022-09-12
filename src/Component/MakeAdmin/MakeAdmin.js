import axios from 'axios';
import { useForm } from 'react-hook-form';
import "./MakeAdmin.css";
const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.put(`http://localhost:8000/users/${data.email}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert("Admin added successful");
                    return;
                }
                if (res.data.isAdmin) {
                    alert("User already a Admin");
                    return;
                }
                if (!res.data.registered) {
                    alert("Please Register this user, we cannot find him/her in out database");
                    return;
                }
            })
    };
    return (
        < >
            <div className='bg-img admin-form pt-5'>
                <div className='col-md-12 text-center rounded-2 shadow-lg py-5 admin-area mt-5'>
                    <div className='admin-title'>
                    <h2 className="text-center fw-bold">Make Admin</h2>
                    </div>
                    <div className="mt-3 d-flex justify-content-center admin-form-container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" placeholder="Enter Email Address"{...register("email", { required: true })} />
                            <br />
                            <button className="btn btn-danger mt-3 px-4 fw-bold rounded-1 outline-0">Submit</button>
                        </form>

                    </div>
                </div>

            </div>
        </>
    );
};

export default MakeAdmin;

{/* <div className='bg-img'>
                <h2 className="text-center text-white fw-bold">Make Admin</h2>
                <div className="mt-5 d-flex justify-content-center admin-form-container">
                    <form onSubmit={handleSubmit(onSubmit)} class="container">
                        <label for="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email Address"{...register("email", { required: true })} />
                        <br />
                        <input className="btn btn-primary" type="submit" />
                    </form>

                </div>
            </div> */}


