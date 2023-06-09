export const Header = () => {
    return (
        <div className='jumbotron p-5 mb-4 bg-image header'>
            <div className='container-fluid py-7 text-white d-flex justify-content-center align-items-center h-100 dark-overlay'>
                <div>
                    <h1 className='display-4 fw-bold'>The Manga Shelf</h1>
                    <hr className="my-4"></hr>
                    <h5 className='col-md-8 fs-4'>Read manga anywhere.</h5>
                    <a type='button' className='btn main-color btn-lg text-white' href='#'>Featured Manga</a>
                </div>
            </div>
        </div>
    )
}

/**
 * * for styles:
 * * mt= margin top. mb= margin bottom
 * * d-flex= display flex. Bootstrap uses flexbox at it's core so we can use flexbox properties here. 
 * 
 */