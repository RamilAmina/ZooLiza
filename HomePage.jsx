import Postlist from "../components/PostList";
function HomePage(){
    return (
        <section class="mobile-block">
        <div class="mobile-block__header is-danger">
            Рекомендации 
        </div>
        <Postlist />
    </section>
    );
}

export default HomePage;