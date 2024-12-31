import errorImg from "../../assets/errror.png" 
const ErrorElement = () => {
    return (
        <div className="mt-32">
            <h1 className="text-center text-red-500 text-6xl mb-10 ">Oppps...</h1>
            <div className="flex justify-center">
                <img className="lg:w-[800px]" src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default ErrorElement;