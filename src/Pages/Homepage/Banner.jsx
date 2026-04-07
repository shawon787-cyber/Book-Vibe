import bookImg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto px-2'>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-10 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src={bookImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br></br> your bookshelf</h1>

                        <button className="btn btn-success text-white mt-8">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;