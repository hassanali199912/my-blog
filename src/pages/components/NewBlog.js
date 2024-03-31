import { useForm } from "react-hook-form";

export default function NewBlog() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const response = fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        reset();
        alert("Add Successfuly");
      } else {
        alert("something went wrong");
      }
    });
  };
  return (
    <>
      <section className="main">
        <div className="col-12">
          <h1 className="blog-title text-center">Create New Post</h1>
          <p className="text-center py-3">You can add new post to.</p>
        </div>
        <div className="row">
          <div className="col-8 m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12">
                  <label>Enter Title</label>
                  <input
                    {...register("title")}
                    className="form-control"
                    placeholder="Title Here ..."
                    required
                  />
                </div>
                <div className="col-12">
                  <label>Enter Auther Name</label>
                  <input
                    {...register("auther")}
                    className="form-control"
                    placeholder="Auther Name ..."
                    required
                  />
                </div>
                <div className="col-12">
                  <label>Image Url</label>
                  <input
                    {...register("image")}
                    className="form-control"
                    placeholder="Image Url ..."
                    required
                  />
                </div>
                <div className="col-12">
                  <label>Enter Post </label>

                  <textarea
                    {...register("body")}
                    className="form-control"
                    placeholder="Post Here ..."
                    rows={10}
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-danger">
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
