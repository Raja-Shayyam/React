import { DeletePost } from "./ApiProvider";

export const Card = ({ post, setPost }) => {
  console.log(post);

  const handleDelete = async (id) => {
    try {
      const res = await DeletePost(id)
      // console.log(res);

      if (res.status === 200) {
        const newdata = post.filter((ele) => {
          return ele.id !== id
        })
        setPost(newdata)
      }
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <>
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
          {
            post.map((post,i) => {
              return <li key={post.id}>

                <div className="">
                  <div className="card shadow-sm p-2">
                    <div class="media g-mb-30 media-comment" style={{ display: "contents" }}>
                      <strong className='me-2'>ID {post.id}</strong>
                      <img
                        class="d-flex g-width-10 g-height-20 rounded-circle g-mt-3 g-mr-15 p-3"
                        src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Image Description"
                      />
                      <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                        <div class="g-mb-15">
                          <h5 class="h5 g-color-gray-dark-v1 mb-0">

                            {post.title}
                          </h5>
                          <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span>
                        </div>
                        <p>
                          {post.body}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(post.id)}
                        >
                          delete
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>

              </li>
            })
          }
        </div>
      </div >
    </>)
}
