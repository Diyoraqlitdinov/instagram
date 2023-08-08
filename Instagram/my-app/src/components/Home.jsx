import Navbar from "./Navbar"
import Post from "./Post";
import Sidebar from "./sidebar";

const Home = () => {
    const foto1 = 'https://i.pinimg.com/564x/7c/a0/66/7ca066b21aeb2ef43e736b16fe6c526f.jpg'
    const foto2 = 'https://i.pinimg.com/564x/f3/fc/b5/f3fcb5d201c1de28f1201c11a9040841.jpg'
    const foto3 = 'https://i.pinimg.com/564x/38/fb/42/38fb424fcc92c83ea34a1345675d7775.jpg'
    return (
        <div>
            <Navbar />
            <Post foto={foto1} />
            <Post foto={foto2} />
            <Post foto={foto3} />
            <div className="mt-5"><Sidebar /></div>
        </div>
    )
}


export default Home;
