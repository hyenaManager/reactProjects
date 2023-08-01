import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="d-flex justify-content-center">
      <h1 className="text-danger">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-danger">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
