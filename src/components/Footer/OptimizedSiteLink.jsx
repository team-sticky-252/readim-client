function OptimizedSiteLink({ href, faviconSrc, siteName }) {
  return (
    <a
      href={href}
      className="flex items-center justify-center ml-1 mr-1 whitespace-nowrap hover:underline"
    >
      <img
        className="inline-block w-3"
        src={faviconSrc}
        alt={`${siteName}Favicon`}
      />
      <span className="ml-1">{siteName}</span>
    </a>
  );
}

export default OptimizedSiteLink;
