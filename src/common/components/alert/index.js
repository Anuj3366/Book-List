function UAlert({ message, show, closeAlert}) {
    return (
        <>{show && (
            <div>
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> {message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => closeAlert(false)}></button>
                </div>
            </div >
        )
        }
        </>
    );
}
export default UAlert;