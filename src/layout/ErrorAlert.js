// Simple alert component to display the current error
function ErrorAlert({ error }){
    // Return an alert for the current error, if there is one given
    if (error){
        return (
            <div className="alert alert-warning" role="alert">
                {error.message}
            </div>
        );
    }
}

export default ErrorAlert;