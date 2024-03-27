import ArticalTR from "../ui/ArticalTR";

export default function UserWrites() {
  return (
    <>
      <div className="card-profile-2 user-writes">
        <h1> My Artical</h1>
        <p>This is your articals </p>
        <div className="card-profile-2-artical-display">
          <div className="table-responsive">
            <table className=" table table-hover artical-table  ">
              <thead>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Reviews</th>
                <th scope="col">published</th>
                <th scope="col">Action</th>
              </thead>
              <tbody className="table table-striped">
                <ArticalTR />
                <ArticalTR />
                <ArticalTR />
                <ArticalTR />
                <ArticalTR />
                <ArticalTR />
                <ArticalTR />
              </tbody>
            </table>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
