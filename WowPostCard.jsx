
function WowPostCard({post}){
    return (
        <div to={`/post/${post.id}`} class="news-card">
            <div class="container">
                 <h3 class="news-card__title"> {post.title} </h3>
                 <h2 class="card__name "> {post.name}</h2>
                <span class="news-card__date"> {post.date} </span>
                <span class="news-card__category"> {post.category} </span>
               
            </div>
        </div>
    );
}

export default WowPostCard;