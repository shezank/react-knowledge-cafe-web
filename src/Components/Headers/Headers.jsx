import ProfileImg from '../../../public/images/profile.png'

const Headers = () => {
    return (
        <div className='flex justify-between text-center m-6 border-b-2'>
            <h1 className='text-4xl font-medium '>Web Knowledge Cafe</h1>
            <img src={ProfileImg} alt="" />
        </div>
    );
};

export default Headers;