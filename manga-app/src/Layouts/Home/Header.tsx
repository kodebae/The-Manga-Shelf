export const Header = () => {
    return (
        <div className='p-5 mb-4 bg-dark header'>
            <div className='container-fluid py-5 text-white d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='display-5 fw-bold'>Main Header Text</h1>
                    <h5 className='col-md-8 fs-4'>Smaller Bold Text</h5>
                    <a type='button' className='btn main-color btn-lg text-white' href='#'>Featured Manga</a>
                </div>
            </div>
        </div>
    )
}