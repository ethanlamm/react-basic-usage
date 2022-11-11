import { useRouteError } from "react-router-dom";
function Error() {
    const error = useRouteError()
    return (
        <>
            <h2>Oops!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    )
}
export default Error