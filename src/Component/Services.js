import { useForm } from "react-hook-form";
function Services() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmit1 = (data) => {
    console.log(data);
  };
  return (
    <>
      <p>Services Page</p>
      <form onSubmit={handleSubmit(handleSubmit1)}>
        <input
          {...register("fname", {
            required: "**First name is required",
            maxLength: {
              value: 12,
              message: "**First name cannot exceed 12 characters",
            },
            minLength: {
              value: 2,
              message: "**First name must be at least 2 characters",
            },
          })}
        />{" "}
        {errors.fname && (
          <span style={{ color: "red" }}>{errors.fname.message}</span>
        )}{" "}
        <br /> <br />
        <input
          {...register("lname", { required: " ** Please Fill This Field" })}
        />{" "}
        {errors.lname && (
          <span className="text-danger">{errors.lname.message}</span>
        )}{" "}
        <br /> <br />
        <input
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "**Invalid email format",
            },
          })}
        />{" "}
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
        <br /> <br />
        <input
          {...register("password", {
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "**Password must be at least 6 characters and include a number",
            },
          })}
        />{" "}
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
        <br /> <br />
        <input
          // type="number"
          {...register("age", {
            min: {
              value: 18,
              message: "Min age should be 18",
            },
            max: {
              value: 65,
              message: "Max age should be 65",
            },
          })}
        />
        {errors.age && (
          <span className="text-danger">{errors.age.message}</span>
        )}{" "}
        <br /> <br />
        <input type="checkbox" {...register("subscribe")} /> <br /> <br />
        <button>Submit</button>
      </form>
    </>
  );
}
export default Services;