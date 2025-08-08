export const Footer = () => {
  return (
    <footer className="border-t mt-10">
      <div className="container py-8 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} 7StarMovies. This is a demo template inspired by
          TheKhatrimaza for educational purposes. No ads. No downloads.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
