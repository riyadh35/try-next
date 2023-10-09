const SignleBlog = ({ params }) => {
    console.log(params.segments);
    const [year , id] =params.segments || [];
  return (
    <div>SignleBlog {year || new Date().getFullYear() } for {id} </div>
  )
}

export default SignleBlog;