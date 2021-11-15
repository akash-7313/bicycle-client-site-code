import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";


const Review = () => {
    
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    
  const onSubmit = (data) => {
    console.log(data);

    fetch("https://peaceful-hollows-85818.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.insertedId) {
          alert("Riview added successfully");
        }
      });
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-center">
      <div>
        <h2 className="mb-3">Add your valuable Reviews here!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <input
            className="p-2 m-2 w-50 mx-auto"
            defaultValue={user.displayName}
            type="text"
            {...register("name")}
            required
            placeholder="Your Name"
          />
          <br />
          <input
            className="p-2 m-2 w-50 mx-auto"
            defaultValue={user.email}
            type="email"
            {...register("email")}
            required
            placeholder="Your Email"
          />
          <br />
          <input
            className="p-2 m-2 w-50 mx-auto"
            type="text"
            {...register("img", { required: true })}
            required
            placeholder="Your Img URL"
          />
          <br />
          <input
            className="p-2 m-2 w-50 mx-auto"
            type="date"
            {...register("date", { required: true })}
            required
            placeholder="Date"
          />
          <br />
          <input
            className="p-2 m-2 w-50 mx-auto"
            type="number"
            {...register("rating", { required: true })}
            required
            placeholder="rating"
          />
          <br />
          <textarea
            rows="3"
            cols="23"
            className="p-2 m-2 w-50 mx-auto"
            type="text"
            {...register("review", { required: true })}
            required
            placeholder="Write Your Review Here"
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input
            className="px-3 mt-3 ms-2 btn btn-sm btn-secondary"
            type="submit"
          />
          <input
            className="px-3 mt-3 ms-5 btn btn-sm btn-outline-secondary"
            type="reset"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
