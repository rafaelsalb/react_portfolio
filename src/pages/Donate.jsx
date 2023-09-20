export function Donate(props) {
    return(
        <>
            <h1 className="text-center">Donate</h1>
            <p className="text-center">You really don't need to, but it would help </p>
            <div className="card">
                <div className="card-header">
                    Paypal
                </div>
                <div className="card-body">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=PZEN3ZMNESMJ8" className="btn btn-primary">Doar</a>
                </div>
            </div>
            <div className="p-1"></div>
            <div className="card">
                <div className="card-header">
                    Pix
                </div>
                <div className="card-body">
                    <p className="card-text">Chave: rafaeldasilvaalbuquerque256@gmail.com</p>
                </div>
            </div>
            <div className="p-1"></div>
            <div className="card">
                <div className="card-header">
                    Ko-fi
                </div>
                <div className="card-body">
                    <a href="https://ko-fi.com/rafaelsalb" className="btn btn-primary">Doar</a>
                </div>
            </div>
        </>
    );
}

export default Donate;