import React from "react";
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/addNewProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.insertedId) {
          alert("Product added successfully");
        }
      });
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-center">
      <div>
        <h2 className="mb-3">Add a new product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <input
            className="p-2 m-2 w-75 mx-auto"
            type="text"
            {...register("bicycleName")}
            required
            placeholder="Bi-cycle Name"
          />
          <br />
          <input
            className="p-2 m-2 w-75 mx-auto"
            type="number"
            {...register("price", { required: true })}
            required
            placeholder="Price"
          />
          <br />
          <input
            className="p-2 m-2 w-75 mx-auto"
            type="text"
            {...register("img", { required: true })}
            required
            placeholder="Img URL"
          />
          <br />
          <textarea
            rows="3"
            cols="23"
            className="p-2 m-2 w-75 mx-auto"
            type="text"
            {...register("description", { required: true })}
            required
            placeholder="Product Description"
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

export default AddNewProduct;
