function ErrorMessage({ error , touch }) {

    if (!touch||!error) return null
    return (
        <p className='text-red mb-2'>{error}</p>
  );
}


export default ErrorMessage;