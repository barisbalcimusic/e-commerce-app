const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Oops! It looks like the page you were looking for doesn't exist.</p>
        <p>Here are a few reasons why this might have happened:</p>
        <ul>
          <li>The page has been moved or deleted.</li>
          <li>The URL you entered is incorrect.</li>
          <li>The link you followed is broken.</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
